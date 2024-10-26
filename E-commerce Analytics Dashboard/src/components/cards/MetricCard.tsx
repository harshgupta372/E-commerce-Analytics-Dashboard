import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

export function MetricCard({ title, value, change, trend, icon }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-sm">{title}</span>
        {icon}
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-semibold">{value}</span>
        <div className={`flex items-center ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? (
            <ArrowUpRight className="h-4 w-4" />
          ) : (
            <ArrowDownRight className="h-4 w-4" />
          )}
          <span className="text-sm ml-1">{change}</span>
        </div>
      </div>
    </div>
  );
}