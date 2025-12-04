import React from 'react';
import { AlertTriangle, Clock, AlertCircle } from 'lucide-react';
import { tickets, objectives } from '../../data/mockData';

function RiskAlerts() {
  const blockedTickets = tickets.filter(t => t.status === 'blocked');
  const atRiskKRs = objectives.flatMap(obj => 
    obj.keyResults.filter(kr => kr.status === 'at-risk' || kr.status === 'behind')
      .map(kr => ({ ...kr, objective: obj.title }))
  );
  
  return (
    <div className="bg-gray-800 rounded-lg p-6 h-full border border-gray-700 shadow-lg">
      <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
        <AlertTriangle className="text-amber-500" size={20} />
        Risk Alerts
      </h3>
      
      <div className="space-y-4">
        {/* At-risk KRs */}
        {atRiskKRs.length > 0 && (
          <div>
            <div className="text-xs font-semibold text-gray-400 mb-3 tracking-wide">AT-RISK KEY RESULTS</div>
            <div className="space-y-2">
              {atRiskKRs.map(kr => (
                <div key={kr.id} className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 hover:bg-amber-500/15 transition-colors">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white line-clamp-2">{kr.title}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        Progress: {kr.progress}% • {kr.linkedTickets} tickets
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Blocked tickets */}
        {blockedTickets.length > 0 && (
          <div>
            <div className="text-xs font-semibold text-gray-400 mb-3 tracking-wide">BLOCKED TICKETS</div>
            <div className="space-y-2">
              {blockedTickets.map(ticket => (
                <div key={ticket.id} className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 hover:bg-red-500/15 transition-colors">
                  <div className="flex items-start gap-2">
                    <Clock className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white">{ticket.id}</div>
                      <div className="text-xs text-gray-400 mt-1 line-clamp-1">{ticket.title}</div>
                      <div className="text-xs text-red-400 mt-1">
                        {ticket.blockedReason}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {blockedTickets.length === 0 && atRiskKRs.length === 0 && (
          <div className="text-sm text-gray-400 text-center py-8 px-4">
            No active risks detected
          </div>
        )}
      </div>
    </div>
  );
}

export default RiskAlerts;

