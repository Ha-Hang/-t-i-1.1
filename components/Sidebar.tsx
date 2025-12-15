import React from 'react';
import { ContextType, PageType, MenuItem } from '../types';

interface SidebarProps {
  context: ContextType;
  currentPage: PageType;
  setPage: (page: PageType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ context, currentPage, setPage }) => {
  const dataMenu: MenuItem[] = [
    { id: 'USER_LIST', label: 'Danh sách Người dùng' },
    { id: 'OTHER_DATA', label: 'Quản lý Dữ liệu Khác' },
  ];

  const contentMenu: MenuItem[] = [
    { id: 'PAGE_STRUCTURE', label: 'Cấu trúc Trang' },
    { id: 'EDIT_TEXT', label: 'Sửa Văn Bản/Tiêu đề' },
    { id: 'IMAGE_MANAGER', label: 'Quản lý Hình ảnh' },
  ];

  const menuItems = context === 'DATA' ? dataMenu : contentMenu;
  const title = context === 'DATA' ? 'Quản Lý Dữ Liệu' : 'Quản Lý Nội Dung';

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-64px)] hidden md:block flex-shrink-0">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-blue-600 font-bold text-lg">{title}</h2>
      </div>
      <nav className="p-2 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`w-full text-left px-4 py-3 rounded-md transition-colors text-sm font-medium ${
              currentPage === item.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};