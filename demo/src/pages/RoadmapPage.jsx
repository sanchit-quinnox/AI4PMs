import { useState } from 'react';
import { Calendar, Columns3, Info } from 'lucide-react';
import { roadmapFeatures } from '../data/mockData';
import FilterBar from '../components/Roadmap/FilterBar';
import TimelineView from '../components/Roadmap/TimelineView';
import NowNextLaterView from '../components/Roadmap/NowNextLaterView';

function RoadmapPage() {
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline' or 'now-next-later'
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    release: 'all',
    okr: 'all'
  });

  // Apply filters to features
  const filteredFeatures = roadmapFeatures.filter(feature => {
    if (filters.status !== 'all' && feature.status !== filters.status) return false;
    if (filters.priority !== 'all' && feature.priority !== filters.priority) return false;
    if (filters.release !== 'all' && feature.releaseId !== filters.release) return false;
    if (filters.okr !== 'all' && !feature.linkedOKRs.includes(filters.okr)) return false;
    return true;
  });

  const handleFeatureClick = (feature) => {
    // In a real app, this would open a modal or detail view
    console.log('Feature clicked:', feature);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Product Roadmap</h1>
            <p className="text-gray-400">Strategic feature planning and execution timeline</p>
          </div>
          
          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1 border border-gray-700">
            <button
              onClick={() => setViewMode('timeline')}
              className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
                viewMode === 'timeline'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Calendar size={18} />
              <span className="font-medium">Timeline</span>
            </button>
            <button
              onClick={() => setViewMode('now-next-later')}
              className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
                viewMode === 'now-next-later'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Columns3 size={18} />
              <span className="font-medium">Now / Next / Later</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 text-sm text-gray-400 mt-4">
          <div>
            <span className="font-medium text-white">{filteredFeatures.length}</span> features
          </div>
          <div>
            <span className="font-medium text-white">
              {filteredFeatures.filter(f => f.status === 'in-progress').length}
            </span> in progress
          </div>
          <div>
            <span className="font-medium text-white">
              {filteredFeatures.filter(f => f.status === 'planned').length}
            </span> planned
          </div>
          <div>
            <span className="font-medium text-white">
              {filteredFeatures.filter(f => f.status === 'discovery').length}
            </span> in discovery
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mb-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Info size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-200">
            <p className="font-medium mb-1">Interactive Product Roadmap</p>
            <p className="text-blue-300/80">
              This roadmap shows high-level features linked to OKRs and engineering epics. 
              Use filters to focus on specific quarters, priorities, or objectives. 
              Switch between Timeline and Now/Next/Later views for different planning perspectives.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <FilterBar filters={filters} onFilterChange={setFilters} />
      </div>

      {/* Results Info */}
      {filteredFeatures.length === 0 ? (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-12 text-center">
          <div className="text-gray-400 mb-2">No features match your filters</div>
          <button
            onClick={() => setFilters({ status: 'all', priority: 'all', release: 'all', okr: 'all' })}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <>
          {filteredFeatures.length < roadmapFeatures.length && (
            <div className="mb-4 text-sm text-gray-400">
              Showing {filteredFeatures.length} of {roadmapFeatures.length} features
            </div>
          )}

          {/* Main View */}
          {viewMode === 'timeline' ? (
            <TimelineView features={filteredFeatures} onFeatureClick={handleFeatureClick} />
          ) : (
            <NowNextLaterView features={filteredFeatures} onFeatureClick={handleFeatureClick} />
          )}
        </>
      )}
    </div>
  );
}

export default RoadmapPage;

