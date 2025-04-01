'use client';

import { useState } from 'react';
import CandidateList from '../components/CandidateList';

export default function TestCandidates() {
  const [jobDescription, setJobDescription] = useState('');
  const [candidates, setCandidates] = useState<[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/match-candidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobDescription }),
      });
      
      const data = await response.json();
      setCandidates(data.candidates || []);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 md:p-12 max-w-4xl mx-auto dark:text-white">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Test Candidate Matching</h1>
        <p className="text-gray-400">Enter a job description to find the most suitable candidates based on AI matching.</p>
      </div>
      
      <div className="space-y-8">
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-6">
            <label htmlFor="jobDescription" className="block mb-2 text-lg font-medium">
              Job Description:
            </label>
            <div className="relative">
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="w-full p-4 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                rows={5}
                placeholder="Enter detailed job requirements, skills, and qualifications..."
                required
              />
              <div className="absolute bottom-3 right-3 flex space-x-1 opacity-70">
                <div className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Be specific about required technical skills, experience level, and any other important criteria.</p>
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
                Matching Candidates...
              </>
            ) : (
              'Find Matching Candidates'
            )}
          </button>
        </form>
        
        {candidates.length > 0 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Results:</h2>
              <CandidateList candidates={candidates} loading={loading} />
            </div>
          </div>
        )}
        
        {!loading && candidates.length === 0 && (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <p className="text-xl font-medium">No candidates to display</p>
            <p className="mt-2">Enter a job description and click "Find Matching Candidates"</p>
          </div>
        )}
      </div>
    </div>
  );
} 