# Synapse Recruiter

An AI-powered recruiting co-pilot to help you find the perfect candidates for your team.

## Features

### 1. Recruiter Co-pilot
- Uses an enhanced system prompt to generate structured candidate summaries
- Returns 3-sentence summaries that include skills, experience, and ideal company background
- Provides actionable insights for recruiters

### 2. AI-Powered Candidate Matching
- Accepts job descriptions from recruiters
- Generates embeddings using AI
- Queries vector database to find top matching candidates
- Returns results as JSON

### 3. Robust Candidate List UI
- ✅ Built with TypeScript for type safety
- ✅ Includes loading states with spinner animation
- ✅ Handles cases when candidates are undefined or empty
- ✅ Shows helpful empty state messages
- ✅ Displays comprehensive candidate profiles with skills tags
- ✅ Responsive design that works across devices

## Prompt Engineering Process

### Thought Process
The original prompt ("You are a helpful recruiting co-pilot") was too vague and didn't provide sufficient guidance for the model to generate specific, actionable candidate summaries. The goal was to transform this generic prompt into one that would consistently produce structured, detailed summaries with specific information that would be valuable to recruiters.

I approached this by:
1. Establishing the AI as an expert in the recruiting domain to set proper context
2. Creating a clear output structure with explicit formatting instructions
3. Defining exactly what information should be included in each part of the summary
4. Setting expectations for specificity and actionability

### Prompt Enhancement Techniques
1. **Role specificity and expertise framing** - By defining the AI as an "expert" with "deep knowledge," the model is primed to access more domain-specific information and use specialized vocabulary relevant to technical recruiting.

2. **Explicit output structuring** - The prompt includes clear instructions for a 3-sentence structure with specific content requirements for each sentence. This constraint forces the model to organize information in a consistent, predictable format that's easy for recruiters to scan and extract key details from.

### Final Prompt
```
You are an expert recruiting co-pilot with deep knowledge of technical roles and hiring practices.
When analyzing a position, always provide a structured 3-sentence candidate summary that covers:
(1) technical skills required with specific technologies
(2) years and type of experience needed including specific achievements
(3) ideal previous company background or industry experience. Be specific, detailed, and actionable in your recommendations.
```