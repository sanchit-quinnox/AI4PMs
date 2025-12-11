import FeatureCard from './FeatureCard';

function NowNextLaterView({ features, onFeatureClick }) {
  // Categorize features based on status and timeline
  const nowFeatures = features.filter(f => 
    f.status === 'in-progress' || 
    (f.status === 'planned' && f.targetQuarter === 'Q4 2024')
  );

  const nextFeatures = features.filter(f => 
    (f.status === 'planned' && f.targetQuarter === 'Q1 2025') ||
    (f.status === 'discovery' && f.targetQuarter === 'Q1 2025')
  );

  const laterFeatures = features.filter(f => 
    f.status === 'discovery' || 
    ['Q2 2025', 'Q3 2025', 'Q4 2025'].includes(f.targetQuarter)
  );

  const Column = ({ title, description, count, features, bgColor }) => (
    <div className="flex-1 min-w-0">
      <div className="mb-4">
        <div className="flex items-baseline gap-2 mb-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="text-sm text-gray-400">({count})</span>
        </div>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      
      <div className={`${bgColor} rounded-lg p-4 min-h-[400px]`}>
        <div className="space-y-3">
          {features.length > 0 ? (
            features.map(feature => (
              <FeatureCard 
                key={feature.id} 
                feature={feature}
                onClick={() => onFeatureClick?.(feature)}
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-sm">No features in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      <Column
        title="Now"
        description="In progress or starting soon"
        count={nowFeatures.length}
        features={nowFeatures}
        bgColor="bg-cyan-500/5 border border-cyan-500/20"
      />
      
      <Column
        title="Next"
        description="Planned for next quarter"
        count={nextFeatures.length}
        features={nextFeatures}
        bgColor="bg-blue-500/5 border border-blue-500/20"
      />
      
      <Column
        title="Later"
        description="Future exploration"
        count={laterFeatures.length}
        features={laterFeatures}
        bgColor="bg-purple-500/5 border border-purple-500/20"
      />
    </div>
  );
}

export default NowNextLaterView;

