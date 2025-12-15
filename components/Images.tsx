import React from 'react';
import { Image } from 'lucide-react';

export const Images: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-gray-700 mb-4">
        <Image className="text-green-500" />
        <h2 className="text-xl font-bold">Quản lý Hình ảnh</h2>
      </div>
      
      <p className="text-gray-600">Upload, thay thế, xóa hình ảnh.</p>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg h-64 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
        <Image size={48} className="text-gray-400 mb-2" />
        <span className="text-gray-500 font-medium">Kéo thả ảnh vào đây hoặc click để upload</span>
      </div>
    </div>
  );
};