export type ContextType = 'DATA' | 'CONTENT';

export type PageType = 
  | 'USER_LIST' 
  | 'OTHER_DATA' 
  | 'PAGE_STRUCTURE' 
  | 'EDIT_TEXT' 
  | 'IMAGE_MANAGER';

export type OrderStatus = 'Mới' | 'Đỗ' | 'Trượt' | 'Đang xử lý' | 'Đã phỏng vấn';

export interface User {
  id: number;
  date: string;
  name: string;
  phone: string;
  dob: string;
  address: string;
  program: string;
  country: string;
  note: string | null;
  status: OrderStatus;
}

export interface MenuItem {
  id: PageType;
  label: string;
}