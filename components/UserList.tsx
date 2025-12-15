import React, { useState } from 'react';
import { User, OrderStatus } from '../types';
import { INITIAL_USERS, STATUS_OPTIONS } from '../constants';
import { FileText, Search, Download, Trash2, Edit } from 'lucide-react';

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusChange = (userId: number, newStatus: string) => {
    setUsers(prev => prev.map(u => 
      u.id === userId ? { ...u, status: newStatus as OrderStatus } : u
    ));
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm) ||
    user.program.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: OrderStatus) => {
    switch(status) {
      case 'Mới': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Đỗ': return 'bg-green-100 text-green-800 border-green-200';
      case 'Trượt': return 'bg-red-100 text-red-800 border-red-200';
      case 'Đang xử lý': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Đã phỏng vấn': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-gray-700 mb-4">
        <FileText className="text-orange-500" />
        <h2 className="text-xl font-bold">Danh sách Người dùng đã gửi thông tin</h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <input 
            type="text" 
            placeholder="Tìm kiếm theo Tên, SĐT, Ghi chú..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded font-bold text-sm transition-colors">
          <Download size={16} />
          Xuất File TXT
        </button>
      </div>

      <div className="bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded text-sm">
        Tải thành công! Có <span className="font-bold">{filteredUsers.length}</span> người dùng.
      </div>

      <div className="overflow-x-auto bg-white rounded shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">ID</th>
              <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">Ngày nhận</th>
              <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">Họ Tên</th>
              <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">SĐT</th>
              <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">Năm Sinh</th>
              <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">Địa Chỉ</th>
              <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">Chương Trình</th>
              <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">Quốc Gia</th>
              <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">Ghi Chú</th>
              <th className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wider">Hành Động</th>
              <th className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wider">Quản lý Đơn hàng</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-3 py-4 text-sm text-gray-500">{user.id}</td>
                <td className="px-3 py-4 text-sm text-gray-500">{user.date}</td>
                <td className="px-3 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-3 py-4 text-sm text-gray-500">{user.phone}</td>
                <td className="px-3 py-4 text-sm text-gray-500">{user.dob}</td>
                <td className="px-3 py-4 text-sm text-gray-500 max-w-xs truncate">{user.address}</td>
                <td className="px-3 py-4 text-sm text-gray-500">{user.program}</td>
                <td className="px-3 py-4 text-sm text-gray-500">{user.country}</td>
                <td className="px-3 py-4 text-sm text-gray-400 italic">{user.note || 'null'}</td>
                <td className="px-3 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center gap-2">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                      <Edit size={12} /> Sửa
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                      <Trash2 size={12} /> Xóa
                    </button>
                  </div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-center">
                  <select 
                    value={user.status}
                    onChange={(e) => handleStatusChange(user.id, e.target.value)}
                    className={`block w-full pl-3 pr-8 py-1.5 text-xs font-semibold rounded-md border appearance-none focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 cursor-pointer ${getStatusColor(user.status)}`}
                  >
                    {STATUS_OPTIONS.map(opt => (
                      <option key={opt} value={opt} className="bg-white text-gray-800">
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={11} className="px-6 py-4 text-center text-sm text-gray-500">
                  Không tìm thấy người dùng nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};