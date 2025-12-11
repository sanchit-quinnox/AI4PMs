import FeatureCard from './FeatureCard';
import { releases } from '../../data/mockData';

function TimelineView({ features, onFeatureClick }) {
  // Group features by release
  const featuresByRelease = releases.map(release => ({
    release,
    features: features.filter(f => f.releaseId === release.id)
  }));

  const releaseStatusColor = {
    'current': 'border-cyan-500/30 bg-cyan-500/5',
    'planned': 'border-blue-500/30 bg-blue-500/5',
    'future': 'border-gray-500/30 bg-gray-500/5'
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[1000px]">
        {/* Timeline Header */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {releases.map(release => (
            <div 
              key={release.id}
              className={`border-2 rounded-lg p-4 ${releaseStatusColor[release.status] || releaseStatusColor['future']}`}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-white">{release.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  release.status === 'current' ? 'bg-cyan-500/20 text-cyan-400' :
                  release.status === 'planned' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {release.status}
                </span>
              </div>
              <p className="text-xs text-gray-400">{release.description}</p>
              <div className="mt-2 text-xs text-gray-500">
                {new Date(release.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(release.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
            </div>
          ))}
        </div>

        {/* Features Timeline */}
        <div className="grid grid-cols-4 gap-4">
          {featuresByRelease.map(({ release, features: relFeatures }) => (
            <div key={release.id} className="space-y-3">
              <div className="text-sm font-medium text-gray-400 mb-2">
                {relFeatures.length} feature{relFeatures.length !== 1 ? 's' : ''}
              </div>
              
              {relFeatures.length > 0 ? (
                relFeatures.map(feature => (
                  <FeatureCard 
                    key={feature.id} 
                    feature={feature}
                    onClick={() => onFeatureClick?.(feature)}
                  />
                ))
              ) : (
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
                  <p className="text-sm text-gray-500">No features planned</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-300">Priority:</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span>High</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span>Medium</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <span>Low</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-300">Status:</span>
              <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Discovery</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Planned</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">In Progress</span>
              <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">Shipped</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineView;

