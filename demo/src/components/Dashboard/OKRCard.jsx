import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Target, TrendingUp, CheckCircle2, Clock, XCircle, Circle } from 'lucide-react';
import { tickets } from '../../data/mockData';

const statusConfig = {
  'on-track': { color: 'text-green-500', bg: 'bg-green-500/10', label: 'On Track', icon: TrendingUp },
  'at-risk': { color: 'text-amber-500', bg: 'bg-amber-500/10', label: 'At Risk', icon: Clock },
  'behind': { color: 'text-red-500', bg: 'bg-red-500/10', label: 'Behind', icon: XCircle },
  'not-started': { color: 'text-gray-500', bg: 'bg-gray-500/10', label: 'Not Started', icon: Circle }
};

function OKRCard({ objective }) {
  const [expanded, setExpanded] = useState(false);
  
  const overallProgress = Math.round(
    objective.keyResults.reduce((sum, kr) => sum + kr.progress, 0) / objective.keyResults.length
  );
  
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-all shadow-lg hover:shadow-xl">
      {/* Objective Header */}
      <div
        className="p-5 cursor-pointer hover:bg-gray-750 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            {expanded ? <ChevronDown size={20} className="text-gray-400" /> : <ChevronRight size={20} className="text-gray-400" />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Target size={16} className="text-blue-400" />
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">{objective.quarter}</span>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">{objective.title}</h3>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-400">
                {objective.keyResults.length} Key Results
              </span>
              <span className="text-white font-medium">
                {overallProgress}% Complete
              </span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-16 h-16">
              <svg className="transform -rotate-90" width="64" height="64">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#1f2937"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#0ea5e9"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * (1 - overallProgress / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-white">{overallProgress}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Results */}
      {expanded && (
        <div className="border-t border-gray-700 bg-gray-850">
          {objective.keyResults.map((kr, idx) => (
            <KRRow key={kr.id} kr={kr} isLast={idx === objective.keyResults.length - 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function KRRow({ kr, isLast }) {
  const [showTickets, setShowTickets] = useState(false);
  const statusInfo = statusConfig[kr.status];
  const StatusIcon = statusInfo.icon;
  const linkedTickets = tickets.filter(t => t.kr === kr.id);
  
  return (
    <div className={`${!isLast ? 'border-b border-gray-700' : ''}`}>
      <div className="p-5 hover:bg-gray-800/50 transition-colors">
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="font-medium text-white flex-1">{kr.title}</div>
              <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${statusInfo.bg} flex-shrink-0`}>
                <StatusIcon size={14} className={statusInfo.color} />
                <span className={`text-xs font-medium ${statusInfo.color}`}>{statusInfo.label}</span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mb-3">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
                <span className="font-medium">{kr.progress}% Complete</span>
                <span>Current: {kr.current}{kr.unit} / Target: {kr.target}{kr.unit}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${kr.progress}%` }}
                ></div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => setShowTickets(!showTickets)}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <span>{kr.linkedTickets} tickets</span>
                <ChevronRight size={14} className={`transform transition-transform ${showTickets ? 'rotate-90' : ''}`} />
              </button>
              
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-green-500" />
                <span className="text-xs text-gray-400">{kr.ticketStats.done} done</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-blue-500" />
                <span className="text-xs text-gray-400">{kr.ticketStats.inProgress} in progress</span>
              </div>
              
              {kr.ticketStats.blocked > 0 && (
                <div className="flex items-center gap-1.5">
                  <XCircle size={14} className="text-red-500" />
                  <span className="text-xs text-red-400">{kr.ticketStats.blocked} blocked</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Linked Tickets */}
        {showTickets && linkedTickets.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="text-xs font-semibold text-gray-400 mb-3 tracking-wide">LINKED TICKETS</div>
            <div className="space-y-2">
              {linkedTickets.map(ticket => (
                <div key={ticket.id} className="flex items-center gap-3 text-sm p-3 bg-gray-900/50 rounded hover:bg-gray-900 transition-colors">
                  <span className="font-mono text-blue-400 font-medium">{ticket.id}</span>
                  <span className="flex-1 text-gray-300 min-w-0 truncate">{ticket.title}</span>
                  <TicketStatusBadge status={ticket.status} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TicketStatusBadge({ status }) {
  const badges = {
    done: { label: 'Done', class: 'bg-green-500/20 text-green-400' },
    inProgress: { label: 'In Progress', class: 'bg-blue-500/20 text-blue-400' },
    blocked: { label: 'Blocked', class: 'bg-red-500/20 text-red-400' },
    notStarted: { label: 'Not Started', class: 'bg-gray-500/20 text-gray-400' }
  };
  
  const badge = badges[status];
  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${badge.class}`}>
      {badge.label}
    </span>
  );
}

export default OKRCard;

