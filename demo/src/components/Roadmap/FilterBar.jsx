import { Filter, X } from 'lucide-react';
import { objectives, releases } from '../../data/mockData';

function FilterBar({ filters, onFilterChange }) {
  const statusOptions = [
    { value: 'all', label: 'All Statuses' },
    { value: 'discovery', label: 'Discovery' },
    { value: 'planned', label: 'Planned' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'on-hold', label: 'On Hold' }
  ];

  const priorityOptions = [
    { value: 'all', label: 'All Priorities' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' }
  ];

  const releaseOptions = [
    { value: 'all', label: 'All Quarters' },
    ...releases.map(r => ({ value: r.id, label: r.name }))
  ];

  const okrOptions = [
    { value: 'all', label: 'All OKRs' },
    ...objectives.flatMap(obj => 
      obj.keyResults.map(kr => ({
        value: kr.id,
        label: `${kr.title.slice(0, 40)}${kr.title.length > 40 ? '...' : ''}`
      }))
    )
  ];

  const activeFiltersCount = Object.values(filters).filter(v => v !== 'all').length;

  const handleClearAll = () => {
    onFilterChange({
      status: 'all',
      priority: 'all',
      release: 'all',
      okr: 'all'
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-300">
          <Filter size={18} />
          <span className="font-medium">Filters</span>
          {activeFiltersCount > 0 && (
            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
              {activeFiltersCount} active
            </span>
          )}
        </div>
        {activeFiltersCount > 0 && (
          <button
            onClick={handleClearAll}
            className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            <X size={14} />
            Clear all
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Status Filter */}
        <div>
          <label className="block text-xs text-gray-400 mb-1.5">Status</label>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
            className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
          >
            {statusOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Priority Filter */}
        <div>
          <label className="block text-xs text-gray-400 mb-1.5">Priority</label>
          <select
            value={filters.priority}
            onChange={(e) => onFilterChange({ ...filters, priority: e.target.value })}
            className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
          >
            {priorityOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Release Filter */}
        <div>
          <label className="block text-xs text-gray-400 mb-1.5">Quarter</label>
          <select
            value={filters.release}
            onChange={(e) => onFilterChange({ ...filters, release: e.target.value })}
            className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
          >
            {releaseOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* OKR Filter */}
        <div>
          <label className="block text-xs text-gray-400 mb-1.5">Linked OKR</label>
          <select
            value={filters.okr}
            onChange={(e) => onFilterChange({ ...filters, okr: e.target.value })}
            className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
          >
            {okrOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;

