import React from 'react';
import { User, Bot, Lightbulb, HelpCircle } from 'lucide-react';
import EpicCard from './EpicCard';
import ActionButtons from './ActionButtons';
import ExportResult from './ExportResult';

function Message({ message, onAction }) {
  const isPM = message.type === 'pm';
  
  return (
    <div className={`flex gap-3 ${isPM ? 'justify-end' : 'justify-start'}`}>
      {!isPM && (
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
          <Bot size={18} className="text-white" />
        </div>
      )}
      
      <div className={`flex-1 max-w-2xl ${isPM ? 'flex flex-col items-end' : ''}`}>
        {/* Planning Mode Indicator */}
        {message.planningMode && message.planningContext && (
          <div className="flex items-center gap-2 mb-2">
            <div className="px-2 py-1 bg-cyan-600/20 border border-cyan-600/40 rounded-full text-xs text-cyan-400 font-medium flex items-center gap-1">
              <Lightbulb size={12} />
              Planning: {message.planningContext.feature}
              {message.planningContext.status === 'gathering-requirements' && (
                <span className="text-cyan-500"> • Gathering requirements</span>
              )}
              {message.planningContext.status === 'generating' && (
                <span className="text-cyan-500"> • Generating...</span>
              )}
            </div>
          </div>
        )}
        
        <div
          className={`inline-block rounded-lg px-4 py-3 ${
            isPM
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-100 border border-gray-700'
          }`}
        >
          {/* Main content */}
          <div className="whitespace-pre-wrap">{message.content}</div>
          
          {/* Analysis sections (for feasibility checks) */}
          {message.analysis && (
            <div className="mt-4 space-y-4">
              <div className="text-sm font-semibold text-blue-300 border-b border-gray-700 pb-1">
                {message.analysis.title}
              </div>
              {message.analysis.sections?.map((section, idx) => (
                <div key={idx}>
                  <div className="text-xs font-semibold text-gray-400 mb-1">{section.title}</div>
                  <ul className="space-y-1">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              {message.analysis.recommendation && (
                <div className="bg-blue-900/30 border-l-4 border-blue-500 p-3 rounded">
                  <div className="text-xs font-semibold text-blue-300 mb-1">RECOMMENDATION</div>
                  <div className="text-sm text-gray-200">{message.analysis.recommendation}</div>
                </div>
              )}
            </div>
          )}
          
          {/* Planning question */}
          {message.question && (
            <div className="mt-4 bg-gray-900/50 border border-cyan-600/30 rounded-lg p-4">
              <div className="flex items-start gap-2 mb-3">
                <HelpCircle size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm text-white font-medium">{message.question.text}</div>
                  {message.question.context && (
                    <div className="text-xs text-gray-400 mt-2 italic">
                      {message.question.context}
                    </div>
                  )}
                </div>
              </div>
              
              {/* MCQ Options */}
              {message.question.options && (
                <div className="space-y-2 mt-3">
                  {message.question.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => onAction && onAction('select-option', message.id, option)}
                      className={`w-full flex items-start gap-3 p-3 rounded-lg border transition-all hover:border-cyan-500/50 hover:bg-gray-800/50 text-left ${
                        option.recommended 
                          ? 'border-cyan-600/40 bg-cyan-900/10' 
                          : 'border-gray-700 bg-gray-800/30'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-semibold ${
                        option.recommended
                          ? 'border-cyan-500 text-cyan-400'
                          : 'border-gray-600 text-gray-400'
                      }`}>
                        {option.id.toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-200 flex items-center gap-2">
                          {option.label}
                          {option.recommended && (
                            <span className="px-2 py-0.5 bg-cyan-600/20 border border-cyan-600/30 rounded text-xs text-cyan-400 font-medium">
                              Recommended
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Generated Epic */}
          {message.generatedEpic && (
            <EpicCard epic={message.generatedEpic} />
          )}
          
          {/* Export Result */}
          {message.exportResult && (
            <ExportResult result={message.exportResult} />
          )}
          
          {/* Split Result */}
          {message.splitResult && (
            <div className="mt-3 bg-yellow-900/20 border border-yellow-700 rounded-lg p-3">
              <div className="text-xs font-semibold text-yellow-400 mb-2">STORY SPLIT</div>
              <div className="text-sm text-gray-400 line-through mb-2">{message.splitResult.original}</div>
              <div className="space-y-1">
                {message.splitResult.newStories.map((story, idx) => (
                  <div key={idx} className="text-sm text-gray-200 flex items-center gap-2">
                    <span className="text-green-400">+</span>
                    <span>{story.title}</span>
                    <span className="text-xs text-purple-400">({story.points} pts)</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Action Buttons */}
          {message.actions && (
            <ActionButtons 
              actions={message.actions} 
              onAction={(actionId) => onAction(actionId, message.id)}
            />
          )}
        </div>
        
        <div className={`text-xs text-gray-500 mt-1 ${isPM ? 'text-right' : 'text-left'}`}>
          {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {isPM && (
        <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <User size={18} className="text-gray-300" />
        </div>
      )}
    </div>
  );
}

export default Message;
