import React from 'react';
import { AlertTriangle } from 'lucide-react';

const stockData = [
  { id: 1, name: 'Wireless Earbuds', sku: 'WE-001', stock: 5, threshold: 10, status: 'critical' },
  { id: 2, name: 'Smart Watch', sku: 'SW-002', stock: 8, threshold: 15, status: 'warning' },
  { id: 3, name: 'Laptop Stand', sku: 'LS-003', stock: 12, threshold: 20, status: 'warning' },
  { id: 4, name: 'USB-C Cable', sku: 'UC-004', stock: 3, threshold: 25, status: 'critical' },
  { id: 5, name: 'Power Bank', sku: 'PB-005', stock: 7, threshold: 12, status: 'warning' },
];

export function StockTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              SKU
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Stock Level
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stockData.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{item.sku}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.stock} / {item.threshold}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  item.status === 'critical' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  {item.status === 'critical' ? 'Critical' : 'Warning'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}