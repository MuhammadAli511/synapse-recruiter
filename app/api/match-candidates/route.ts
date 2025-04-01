import { NextResponse } from 'next/server';
import { Pinecone } from '@pinecone-database/pinecone';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY || '',
});

export async function POST(request: Request) {
  try {
    const { jobDescription } = await request.json();
    
    if (!jobDescription) {
      return NextResponse.json(
        { error: 'Job description is required' },
        { status: 400 }
      );
    }

    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-3-large',
      input: jobDescription,
    });
    
    const embedding = embeddingResponse.data[0].embedding;
    
    // Get Pinecone index
    const index = pinecone.index(process.env.PINECONE_INDEX || '');
    
    // Query for top 3 matches
    const queryResponse = await index.query({
      vector: embedding,
      topK: 3,
      includeMetadata: true,
    });
    
    const candidates = queryResponse.matches?.map((match) => match.metadata) || [];
    
    return NextResponse.json({ candidates });
  } catch (error) {
    console.error('Error matching candidates:', error);
    return NextResponse.json(
      { error: 'Failed to match candidates' },
      { status: 500 }
    );
  }
} 