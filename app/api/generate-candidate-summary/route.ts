import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { RECRUITER_COPILOT_PROMPT } from '../../utils/prompts';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { position } = await request.json();
    
    if (!position) {
      return NextResponse.json(
        { error: 'Position description is required' },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: RECRUITER_COPILOT_PROMPT },
        { role: 'user', content: `I'm hiring a ${position}. Write a candidate summary.` }
      ],
    });

    const summary = response.choices[0].message.content;
    
    return NextResponse.json({ summary });
  } catch (error) {
    console.error('Error generating candidate summary:', error);
    return NextResponse.json(
      { error: 'Failed to generate candidate summary' },
      { status: 500 }
    );
  }
} 