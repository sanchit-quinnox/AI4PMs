import React from 'react';
import { Upload, Edit3, Link, Eye, CalendarPlus, RotateCcw } from 'lucide-react';

const actionConfig = {
  'export-jira': {
    label: 'Export to Jira',
    icon: Upload,
    variant: 'primary'
  },
  'refine': {
    label: 'Refine',
    icon: Edit3,
    variant: 'secondary'
  },
  'link-okr': {
    label: 'Link to OKR',
    icon: Link,
    variant: 'secondary'
  },
  'view-in-jira': {
    label: 'View in Jira',
    icon: Eye,
    variant: 'secondary'
  },
  'add-to-sprint': {
    label: 'Add to Sprint',
    icon: CalendarPlus,
    variant: 'secondary'
  },
  'regenerate': {
    label: 'Regenerate',
    icon: RotateCcw,
    variant: 'secondary'
  }
};

function ActionButtons({ actions, onAction, disabled }) {
  if (!actions || actions.length === 0) return null;
  
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {actions.map(actionId => {
        const config = actionConfig[actionId];
        if (!config) return null;
        
        const Icon = config.icon;
        const isPrimary = config.variant === 'primary';
        
        return (
          <button
            key={actionId}
            onClick={() => onAction(actionId)}
            disabled={disabled}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
              transition-all duration-200
              ${isPrimary 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20' 
                : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
            `}
          >
            <Icon size={16} />
            {config.label}
          </button>
        );
      })}
    </div>
  );
}

export default ActionButtons;

