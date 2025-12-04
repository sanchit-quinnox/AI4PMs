import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Circle, CheckCircle2, FileText, Code, Target } from 'lucide-react';

function EpicCard({ epic }) {
  const [expandedStories, setExpandedStories] = useState({});
  
  const toggleStory = (storyId) => {
    setExpandedStories(prev => ({
      ...prev,
      [storyId]: !prev[storyId]
    }));
  };
  
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mt-3">
      {/* Epic Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4">
        <div className="flex items-start gap-3">
          <FileText size={20} className="text-white flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="text-xs font-semibold text-blue-200 mb-1">EPIC</div>
            <h3 className="text-lg font-bold text-white">{epic.title}</h3>
            <p className="text-sm text-blue-100 mt-1">{epic.description}</p>
            <div className="flex items-center gap-4 mt-3 text-sm">
              <span className="text-blue-200">
                {epic.stories.length} stories
              </span>
              <span className="text-blue-200">
                {epic.totalPoints} points
              </span>
              {epic.linkedOKR && (
                <span className="flex items-center gap-1 text-cyan-200">
                  <Target size={14} />
                  {epic.linkedOKR}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Stories */}
      <div className="p-3 space-y-2">
        {epic.stories.map((story, idx) => (
          <StoryItem 
            key={story.id} 
            story={story} 
            number={idx + 1}
            expanded={expandedStories[story.id]}
            onToggle={() => toggleStory(story.id)}
          />
        ))}
      </div>
    </div>
  );
}

function StoryItem({ story, number, expanded, onToggle }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <div
        className="p-3 cursor-pointer hover:bg-gray-750 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-start gap-2">
          <div className="flex-shrink-0 mt-0.5">
            {expanded ? (
              <ChevronDown size={16} className="text-gray-400" />
            ) : (
              <ChevronRight size={16} className="text-gray-400" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-blue-400">STORY {number}</span>
              <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs font-medium rounded">
                {story.points} pts
              </span>
            </div>
            <h4 className="text-sm font-medium text-white">{story.title}</h4>
            {story.description && (
              <p className="text-xs text-gray-400 mt-1">{story.description}</p>
            )}
          </div>
        </div>
      </div>
      
      {expanded && (
        <div className="border-t border-gray-700 p-3 bg-gray-850 space-y-3">
          {/* Tasks */}
          <div>
            <div className="text-xs font-semibold text-gray-500 mb-1.5">TASKS</div>
            <div className="space-y-1">
              {story.tasks.map((task, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                  <Circle size={12} className="text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Acceptance Criteria */}
          <div>
            <div className="text-xs font-semibold text-gray-500 mb-1.5">ACCEPTANCE CRITERIA</div>
            <div className="space-y-1">
              {story.acceptanceCriteria.map((criteria, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 size={12} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{criteria}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Notes */}
          {story.technicalNotes && story.technicalNotes.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1.5">TECHNICAL NOTES</div>
              <div className="bg-blue-900/20 border border-blue-800/50 rounded p-2 space-y-1">
                {story.technicalNotes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-blue-300">
                    <Code size={12} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EpicCard;

