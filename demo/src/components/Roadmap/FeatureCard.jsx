import { useState } from 'react';
import { Calendar, Target, Link2, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { objectives } from '../../data/mockData';

const statusConfig = {
  'discovery': { label: 'Discovery', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  'planned': { label: 'Planned', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  'in-progress': { label: 'In Progress', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  'shipped': { label: 'Shipped', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
  'on-hold': { label: 'On Hold', color: 'bg-gray-500/10 text-gray-400 border-gray-500/20' }
};

const priorityConfig = {
  'high': { color: 'bg-red-500', label: 'High' },
  'medium': { color: 'bg-yellow-500', label: 'Medium' },
  'low': { color: 'bg-gray-500', label: 'Low' }
};

const confidenceConfig = {
  'high': { label: 'High Confidence', color: 'text-green-400' },
  'medium': { label: 'Medium Confidence', color: 'text-yellow-400' },
  'low': { label: 'Low Confidence', color: 'text-gray-400' }
};

function FeatureCard({ feature, compact = false, onClick }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const statusStyle = statusConfig[feature.status] || statusConfig['planned'];
  const priorityStyle = priorityConfig[feature.priority] || priorityConfig['medium'];
  const confidenceStyle = confidenceConfig[feature.confidence] || confidenceConfig['medium'];

  // Get linked OKR titles
  const linkedOKRTitles = feature.linkedOKRs.map(krId => {
    for (const obj of objectives) {
      const kr = obj.keyResults.find(k => k.id === krId);
      if (kr) {
        return kr.title;
      }
    }
    return null;
  }).filter(Boolean);

  const hasLinkedItems = linkedOKRTitles.length > 0 || feature.linkedEpics.length > 0;

  return (
    <div 
      className={`bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all cursor-pointer group ${
        compact ? 'p-3' : 'p-4'
      }`}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${priorityStyle.color}`} title={priorityStyle.label}></div>
          <h3 className={`font-semibold text-white truncate ${compact ? 'text-sm' : 'text-base'}`}>
            {feature.title}
          </h3>
        </div>
        <span className={`text-xs px-2 py-1 rounded border flex-shrink-0 ${statusStyle.color}`}>
          {statusStyle.label}
        </span>
      </div>

      {/* Description */}
      {!compact && (
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
          {feature.description}
        </p>
      )}

      {/* Metadata */}
      <div className="space-y-2">
        {/* Quarter and Owner */}
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{feature.targetQuarter}</span>
          </div>
          {feature.owner && (
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{feature.owner}</span>
            </div>
          )}
        </div>

        {/* Linked Items */}
        {(feature.linkedOKRs.length > 0 || feature.linkedEpics.length > 0) && (
          <div className="flex items-center gap-2 flex-wrap">
            {feature.linkedOKRs.length > 0 && (
              <div className="flex items-center gap-1 text-xs">
                <Target size={12} className="text-blue-400" />
                <span className="text-blue-400">{feature.linkedOKRs.length} OKR{feature.linkedOKRs.length > 1 ? 's' : ''}</span>
              </div>
            )}
            {feature.linkedEpics.length > 0 && (
              <div className="flex items-center gap-1 text-xs">
                <Link2 size={12} className="text-cyan-400" />
                <span className="text-cyan-400">{feature.linkedEpics.length} Epic{feature.linkedEpics.length > 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
        )}

        {/* Confidence indicator */}
        {!compact && feature.confidence && (
          <div className={`text-xs ${confidenceStyle.color}`}>
            {confidenceStyle.label}
          </div>
        )}
      </div>

      {/* Expandable Linked Items Section */}
      {hasLinkedItems && !compact && (
        <div className="mt-3 pt-3 border-t border-gray-700">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="flex items-center justify-between w-full text-xs text-gray-400 hover:text-gray-300 transition-colors"
          >
            <span className="font-medium">Linked to:</span>
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          
          {isExpanded && (
            <div className="mt-2 space-y-2">
              {/* Linked OKRs */}
              {linkedOKRTitles.length > 0 && (
                <div>
                  <div className="text-xs text-blue-400 font-medium mb-1 flex items-center gap-1">
                    <Target size={12} />
                    <span>OKRs ({linkedOKRTitles.length})</span>
                  </div>
                  <div className="space-y-1 ml-4">
                    {linkedOKRTitles.map((title, idx) => (
                      <div key={idx} className="text-xs text-gray-400">
                        • {title}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Linked Epics */}
              {feature.linkedEpics.length > 0 && (
                <div>
                  <div className="text-xs text-cyan-400 font-medium mb-1 flex items-center gap-1">
                    <Link2 size={12} />
                    <span>Epics ({feature.linkedEpics.length})</span>
                  </div>
                  <div className="space-y-1 ml-4">
                    {feature.linkedEpics.map((epic, idx) => (
                      <div key={idx} className="text-xs text-gray-400">
                        • {epic}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {!isExpanded && (
            <div className="mt-1 text-xs text-gray-500">
              {linkedOKRTitles.length > 0 && `${linkedOKRTitles.length} OKR${linkedOKRTitles.length > 1 ? 's' : ''}`}
              {linkedOKRTitles.length > 0 && feature.linkedEpics.length > 0 && ' • '}
              {feature.linkedEpics.length > 0 && `${feature.linkedEpics.length} Epic${feature.linkedEpics.length > 1 ? 's' : ''}`}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FeatureCard;

