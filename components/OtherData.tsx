import React from 'react';
import { Database } from 'lucide-react';

export const OtherData: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-gray-700 mb-4">
        <Database className="text-blue-500" />
        <h2 className="text-xl font-bold">Quản lý Dữ liệu Khác</h2>
      </div>
      
      <p className="text-gray-600">Nội dung quản lý các loại dữ liệu khác ngoài người dùng.</p>
      
      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};