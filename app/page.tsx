import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 dark:bg-gray-900 dark:text-white">
      <main className="flex flex-col items-center max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Synapse Recruiter</h1>
          <p className="text-xl mb-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            An AI-powered recruiting co-pilot to help you find the perfect candidates for your team
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full my-2"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 w-full max-w-4xl mb-12">
          <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-shadow dark:border-gray-700 dark:bg-gray-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
            
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                  <svg className="h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Recruiting Co-pilot</h2>
              </div>
              
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Test our improved prompt that generates detailed candidate profiles with specific skills, experience, and ideal background.
              </p>
              
              <ul className="mb-8 space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Structured 3-sentence summaries
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Specific technical requirements
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Actionable hiring insights
                </li>
              </ul>
              
              <Link 
                href="/test-prompt" 
                className="w-full block text-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Test Prompt
              </Link>
            </div>
          </div>
          
          <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-shadow dark:border-gray-700 dark:bg-gray-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
            
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mr-4">
                  <svg className="h-8 w-8 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Candidate Matching</h2>
              </div>
              
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Find the top candidates that match your job description using AI embeddings and vector search technology.
              </p>
              
              <ul className="mb-8 space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Semantic search with AI
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Top matches with detailed profiles
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Perfect for technical roles
                </li>
              </ul>
              
              <Link 
                href="/test-candidates" 
                className="w-full block text-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Match Candidates
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Powered by AI embeddings and vector search • No candidates' personal data is stored</p>
        </div>
      </main>
    </div>
  );
}
