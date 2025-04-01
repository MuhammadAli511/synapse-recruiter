'use client';

import { useState } from 'react';

export default function TestPrompt() {
  const [position, setPosition] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/generate-candidate-summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ position }),
      });
      
      const data = await response.json();
      setSummary(data.summary || '');
    } catch (error) {
      console.error('Error generating summary:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 md:p-12 max-w-4xl mx-auto dark:text-white">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Test Recruiting Co-pilot Prompt</h1>
        <p className="text-gray-400">Generate a structured candidate summary with specific technical skills, experience, and ideal background.</p>
      </div>
      
      <div className="space-y-8">
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-6">
            <label htmlFor="position" className="block mb-2 text-lg font-medium">
              Position:
            </label>
            <div className="relative">
              <input
                id="position"
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full p-4 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="e.g., senior frontend engineer in NYC"
                required
              />
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Include the role, seniority level, and location if relevant.</p>
          </div>
          
          <button 
            type="submit" 
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              'Generate Candidate Summary'
            )}
          </button>
        </form>
        
        {summary ? (
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold mb-4">Candidate Summary:</h2>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-600 rounded-full p-2 mr-4">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-blue-400">Ideal Candidate Profile</h3>
                  <div className="mt-2 text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {summary}
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-700 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span>Generated with enhanced AI prompt</span>
                </div>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  Save to Templates
                </button>
              </div>
            </div>
          </div>
        ) : !loading && (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            <p className="text-xl font-medium">No summary generated yet</p>
            <p className="mt-2">Enter a position and click "Generate Candidate Summary"</p>
          </div>
        )}
      </div>
    </div>
  );
} 