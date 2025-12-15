import React from 'react';
import { Settings } from 'lucide-react';

export const Structure: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-gray-700 mb-4">
        <Settings className="text-purple-500" />
        <h2 className="text-xl font-bold">Quản lý Cấu trúc Trang Web</h2>
      </div>
      
      <p className="text-gray-600 text-sm mb-6">
        Đây là khu vực để sửa nội dung của trang web. Bố cục này mô phỏng cấu trúc 3 hàng/3 cột từ Hình 2.
      </p>

      <div className="border-2 border-gray-800 max-w-5xl mx-auto">
        {/* Row 1 */}
        <div className="grid grid-cols-3 divide-x-2 divide-gray-800 border-b-2 border-gray-800">
            <div className="h-24 flex items-center justify-center bg-gray-50 text-gray-600 font-medium">Hàng 1, Cột 1</div>
            <div className="h-24 flex items-center justify-center bg-gray-50 text-gray-600 font-medium">Hàng 1, Cột 2</div>
            <div className="h-24 flex items-center justify-center bg-gray-50 text-gray-600 font-medium">Hàng 1, Cột 3</div>
        </div>
        
        {/* Row 2 */}
        <div className="grid grid-cols-3 divide-x-2 divide-gray-800 border-b-2 border-gray-800">
            <div className="h-24 flex items-center justify-center bg-white text-gray-600 font-medium">Hàng 2, Cột 1: Ảnh</div>
            <div className="h-24 flex items-center justify-center bg-white text-gray-600 font-medium">Hàng 2, Cột 2: Text</div>
            <div className="h-24 flex items-center justify-center bg-white text-gray-600 font-medium">Hàng 2, Cột 3</div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-3 divide-x-2 divide-gray-800">
            <div className="h-24 flex items-center justify-center bg-gray-50 text-gray-600 font-medium">Hàng 3, Cột 1: Icon</div>
            <div className="h-24 flex items-center justify-center bg-gray-50 text-gray-600 font-medium">Hàng 3, Cột 2: Multi-Text</div>
            <div className="h-24 flex items-center justify-center bg-gray-50 text-gray-600 font-medium">Hàng 3, Cột 3: Map</div>
        </div>
      </div>
    </div>
  );
};