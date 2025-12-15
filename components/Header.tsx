import React from 'react';
import { ContextType } from '../types';
import { LogOut } from 'lucide-react';

interface HeaderProps {
  currentContext: ContextType;
  setContext: (ctx: ContextType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentContext, setContext }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold tracking-wide uppercase underline decoration-2 underline-offset-4">
            Trang Quản Trị ICOGroup
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setContext('DATA')}
            className={`px-4 py-2 rounded-md transition-colors font-medium ${
              currentContext === 'DATA'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'hover:bg-blue-500 text-blue-100'
            }`}
          >
            Quản lý Dữ liệu
          </button>
          <button
            onClick={() => setContext('CONTENT')}
            className={`px-4 py-2 rounded-md transition-colors font-medium ${
              currentContext === 'CONTENT'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'hover:bg-blue-500 text-blue-100'
            }`}
          >
            Quản lý Nội dung Web
          </button>
        </nav>

        <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold transition-colors text-sm">
          <LogOut size={16} />
          Đăng Xuất
        </button>
      </div>
    </header>
  );
};