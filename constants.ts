import { User } from './types';

export const INITIAL_USERS: User[] = [
  {
    id: 10,
    date: '10:37:16 15/12/2025',
    name: 'Nguyễn Văn A',
    phone: '0928454744',
    dob: '2003',
    address: 'Hà Nội',
    program: 'Du học',
    country: 'Nhật Bản',
    note: null,
    status: 'Mới'
  },
  {
    id: 4,
    date: '10:04:21 11/12/2025',
    name: 'Trần Thị B',
    phone: '0928454744',
    dob: '2004',
    address: 'Hồ Chí Minh',
    program: 'Đào tạo ngoại ngữ',
    country: 'Hàn Quốc',
    note: null,
    status: 'Đang xử lý'
  },
  {
    id: 3,
    date: '09:59:58 11/12/2025',
    name: 'Lê Văn C',
    phone: '0366535265',
    dob: '2002',
    address: 'Đà Nẵng',
    program: 'Xuất khẩu lao động',
    country: 'Nhật Bản',
    note: null,
    status: 'Đã phỏng vấn'
  }
];

export const STATUS_OPTIONS = [
  'Mới',
  'Đỗ',
  'Trượt',
  'Đang xử lý',
  'Đã phỏng vấn'
] as const;