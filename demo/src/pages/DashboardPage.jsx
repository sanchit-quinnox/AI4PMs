import React from 'react';
import { TrendingUp, Target, AlertTriangle, Activity } from 'lucide-react';
import OKRCard from '../components/Dashboard/OKRCard';
import StatusChart from '../components/Dashboard/StatusChart';
import VelocityTrend from '../components/Dashboard/VelocityTrend';
import RiskAlerts from '../components/Dashboard/RiskAlerts';
import ProgressRing from '../components/Dashboard/ProgressRing';
import {
  objectives,
  velocityData,
  calculateOverallProgress,
  getStatusDistribution,
  getAtRiskCount,
  getBlockedCount,
  tickets
} from '../data/mockData';

function DashboardPage() {
  const overallProgress = calculateOverallProgress();
  const statusDistribution = getStatusDistribution();
  const atRiskCount = getAtRiskCount();
  const blockedCount = getBlockedCount();
  const totalTickets = tickets.length;
  
  return (
    <div className="p-6 md:p-8 max-w-[1920px] mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">OKR Dashboard</h1>
        <p className="text-gray-400">Q1 2025 Progress Overview</p>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 flex flex-col justify-between min-h-[140px] shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start justify-between">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Target size={24} className="text-white" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">{overallProgress}%</div>
              <div className="text-sm text-blue-100 mt-1">Overall Progress</div>
            </div>
          </div>
          <div className="text-xs text-blue-100/90 mt-4">
            {objectives.length} Objectives • {objectives.flatMap(o => o.keyResults).length} Key Results
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 flex flex-col justify-between min-h-[140px] shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start justify-between">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <TrendingUp size={24} className="text-white" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">{statusDistribution.done}</div>
              <div className="text-sm text-green-100 mt-1">Tickets Done</div>
            </div>
          </div>
          <div className="text-xs text-green-100/90 mt-4">
            {totalTickets} total tickets • {Math.round((statusDistribution.done / totalTickets) * 100)}% complete
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg p-6 flex flex-col justify-between min-h-[140px] shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start justify-between">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <AlertTriangle size={24} className="text-white" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">{atRiskCount}</div>
              <div className="text-sm text-amber-100 mt-1">At Risk</div>
            </div>
          </div>
          <div className="text-xs text-amber-100/90 mt-4">
            Key Results requiring attention
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 flex flex-col justify-between min-h-[140px] shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start justify-between">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Activity size={24} className="text-white" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">{statusDistribution.inProgress}</div>
              <div className="text-sm text-purple-100 mt-1">In Progress</div>
            </div>
          </div>
          <div className="text-xs text-purple-100/90 mt-4">
            {blockedCount} blocked • {statusDistribution.notStarted} not started
          </div>
        </div>
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="h-full">
          <StatusChart data={statusDistribution} />
        </div>
        <div className="h-full">
          <VelocityTrend data={velocityData} />
        </div>
      </div>
      
      {/* OKRs and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {objectives.map(obj => (
              <OKRCard key={obj.id} objective={obj} />
            ))}
          </div>
        </div>
        
        <div className="lg:sticky lg:top-6">
          <RiskAlerts />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

