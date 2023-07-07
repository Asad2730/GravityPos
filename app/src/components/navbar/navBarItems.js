import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

export const sale_navigation_items = [
  { name: 'Sale Refund', icon: UsersIcon, current: false },
];

export const purchase_navigation_items = [
  { name: 'add purchase item', href: '/purchase', icon: DocumentDuplicateIcon, current: false },
  { name: 'purchase return against bill',href:'/PurchaseReturnAgainistBill', icon: HomeIcon, current: false },
  { name: 'direct purchase return', icon: UsersIcon, current: false },
  { name: 'purchase adjustment',href:'/PurchaseAdjustment', icon: ChartPieIcon, current: false },
  { name: 'purchase order', icon: FolderIcon, current: false },
  { name: 'account payable', icon: CalendarIcon, current: false },
];

export const stock_navigation_items = [
  { name: 'add stock', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'stock increase', icon: ChartPieIcon, current: false },
  { name: 'stock decrease', icon: UsersIcon, current: false },
  { name: 'search', icon: FolderIcon, current: false },
];

export const supplier_navigation_items = [
  { name: 'add vendor/supplier', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'search', icon: UsersIcon, current: false },
];
