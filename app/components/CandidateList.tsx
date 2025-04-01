import React from 'react';

type Candidate = {
  id: string;
  name: string;
  title?: string;
  skills?: string[];
  experience?: string;
  background?: string;
  education?: string;
  location?: string;
}

interface CandidateListProps {
  candidates?: Candidate[];
  loading?: boolean;
}

const CandidateList = ({ candidates, loading = false }: CandidateListProps) => {
  if (loading) {
    return <div className="flex items-center justify-center py-10">
      <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span className="ml-3 text-lg">Loading candidates...</span>
    </div>;
  }
  
  if (!candidates || candidates.length === 0) {
    return <div className="text-center py-6 text-gray-400">No matching candidates found.</div>;
  }
  
  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
      {candidates.map((candidate) => (
        <div key={candidate.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-xl font-semibold text-white">{candidate.name}</h3>
                {candidate.title && (
                  <p className="text-blue-400 font-medium">{candidate.title}</p>
                )}
              </div>
              {candidate.location && (
                <div className="mt-2 md:mt-0 flex items-center text-gray-400">
                  <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {candidate.location}
                </div>
              )}
            </div>
            
            {candidate.experience && (
              <div className="mt-4 flex items-center text-gray-300">
                <svg className="h-4 w-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>{candidate.experience} of experience</span>
              </div>
            )}
            
            {candidate.background && (
              <p className="mt-3 text-gray-300">{candidate.background}</p>
            )}
            
            {candidate.education && (
              <div className="mt-2 text-gray-400 text-sm flex items-center">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                {candidate.education}
              </div>
            )}
            
            {candidate.skills && candidate.skills.length > 0 && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-900 text-blue-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="px-6 py-3 bg-gray-900 flex justify-between items-center">
            <span className="text-sm text-gray-500">Candidate ID: {candidate.id.substring(0, 8)}...</span>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
              View Full Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CandidateList; 