import React from 'react';
import { Pencil } from 'lucide-react';

export const ContentEdit: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-gray-700 mb-6 border-b pb-4">
        <Pencil className="text-orange-500" />
        <h2 className="text-xl font-bold">Sửa Văn Bản/Tiêu đề Trang Chủ</h2>
      </div>

      <div className="space-y-8 max-w-4xl">
        {/* Banner Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-gray-800 text-sm uppercase">1. Phần BANNER</h3>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <label className="text-sm font-medium text-gray-600 min-w-[100px]">Text Banner:</label>
            <textarea 
              className="flex-1 w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={2}
            ></textarea>
          </div>
        </div>

        {/* Two Column Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-800 text-sm uppercase">2. Phần TWO-COLUMN SECTION</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
               <div className="flex flex-col gap-1">
                 <label className="text-sm font-medium text-gray-600">Tiêu đề Du Học (H2):</label>
                 <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
               </div>
               <div className="flex flex-col gap-1">
                 <label className="text-sm font-medium text-gray-600">Đoạn văn Du Học (P):</label>
                 <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" rows={3}></textarea>
               </div>
            </div>

            <div className="space-y-2">
               <div className="flex flex-col gap-1">
                 <label className="text-sm font-medium text-gray-600">Tiêu đề XKLĐ (H2):</label>
                 <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
               </div>
               <div className="flex flex-col gap-1">
                 <label className="text-sm font-medium text-gray-600">Đoạn văn XKLĐ (P):</label>
                 <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" rows={3}></textarea>
               </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-800 text-sm uppercase">3. Phần FOOTER</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="flex flex-col gap-1">
               <label className="text-sm font-medium text-gray-600">Tên Công ty (Footer):</label>
               <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
             </div>
             <div className="flex flex-col gap-1">
               <label className="text-sm font-medium text-gray-600">Địa chỉ (Footer):</label>
               <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" rows={2}></textarea>
             </div>
          </div>
        </div>

        <div className="pt-4">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded shadow-md transition-transform active:scale-95 uppercase text-sm">
            Lưu tất cả nội dung
          </button>
        </div>
      </div>
    </div>
  );
};