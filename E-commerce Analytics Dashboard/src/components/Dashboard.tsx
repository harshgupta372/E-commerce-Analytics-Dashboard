import React from 'react';
import { SalesChart } from './charts/SalesChart';
import { CustomerChart } from './charts/CustomerChart';
import { StockTable } from './tables/StockTable';
import { MetricCard } from './cards/MetricCard';
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign,
  Package,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <ShoppingCart className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold">E-commerce Analytics</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard
            title="Total Revenue"
            value="$124,563.00"
            change="+14.2%"
            trend="up"
            icon={<DollarSign className="h-6 w-6 text-green-600" />}
          />
          <MetricCard
            title="Total Orders"
            value="1,456"
            change="+7.3%"
            trend="up"
            icon={<Package className="h-6 w-6 text-blue-600" />}
          />
          <MetricCard
            title="New Customers"
            value="892"
            change="-2.4%"
            trend="down"
            icon={<Users className="h-6 w-6 text-purple-600" />}
          />
          <MetricCard
            title="Conversion Rate"
            value="3.24%"
            change="+1.2%"
            trend="up"
            icon={<TrendingUp className="h-6 w-6 text-orange-600" />}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
            <SalesChart />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Customer Growth</h2>
            <CustomerChart />
          </div>
        </div>

        {/* Stock Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Low Stock Items</h2>
            <StockTable />
          </div>
        </div>
      </main>
    </div>
  );
}