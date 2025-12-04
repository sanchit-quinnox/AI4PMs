import React from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';

function ExportResult({ result }) {
  return (
    <div className="bg-green-900/20 border border-green-700 rounded-lg p-4 mt-3">
      <div className="flex items-center gap-2 mb-3">
        <CheckCircle size={20} className="text-green-500" />
        <span className="font-semibold text-green-400">Successfully created in Jira</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-400">EPIC:</span>
          <a 
            href="#" 
            className="text-blue-400 hover:text-blue-300 font-mono text-sm flex items-center gap-1"
          >
            {result.epicKey}
            <ExternalLink size={12} />
          </a>
        </div>
        
        <div className="text-xs font-semibold text-gray-400 mt-2">STORIES:</div>
        <div className="grid grid-cols-1 gap-1">
          {result.stories.map(story => (
            <div 
              key={story.key}
              className="flex items-center gap-2 text-sm bg-gray-800/50 rounded px-2 py-1"
            >
              <a 
                href="#" 
                className="text-blue-400 hover:text-blue-300 font-mono flex items-center gap-1"
              >
                {story.key}
                <ExternalLink size={10} />
              </a>
              <span className="text-gray-400">-</span>
              <span className="text-gray-300 truncate">{story.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExportResult;

