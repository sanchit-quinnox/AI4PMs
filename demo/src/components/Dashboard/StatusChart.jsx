import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = {
  done: '#10b981',
  inProgress: '#3b82f6',
  blocked: '#ef4444',
  notStarted: '#6b7280'
};

const LABELS = {
  done: 'Done',
  inProgress: 'In Progress',
  blocked: 'Blocked',
  notStarted: 'Not Started'
};

// Custom Tooltip component with proper text styling
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div 
        className="bg-gray-700 border border-gray-600 rounded-lg p-3 shadow-lg"
        style={{ color: '#ffffff' }}
      >
        <p className="text-white font-medium">
          {`${payload[0].name} : ${payload[0].value}`}
        </p>
      </div>
    );
  }
  return null;
};

function StatusChart({ data }) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: LABELS[key],
    value,
    color: COLORS[key]
  }));
  
  return (
    <div className="bg-gray-800 rounded-lg p-6 h-full flex flex-col border border-gray-700 shadow-lg">
      <h3 className="text-lg font-semibold text-white mb-6">Ticket Status Distribution</h3>
      <div className="flex-1 flex flex-col justify-center">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              formatter={(value) => <span className="text-gray-300">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-gray-700">
        {chartData.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-gray-400">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusChart;

