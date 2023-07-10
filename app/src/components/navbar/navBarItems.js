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
  { name: 'purchase refund',href:'/PurchaseRefund', icon: HomeIcon, current: false },
  { name: 'purchase adjustment',href:'/PurchaseAdjustment', icon: ChartPieIcon, current: false },
  { name: 'purchase order', href:'/purchaseOrder',icon: FolderIcon, current: false },
  { name: 'account payable', icon: CalendarIcon, current: false },
];

export const stock_navigation_items = [
  { name: 'add stock', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'stock increase', icon: ChartPieIcon, current: false },
  { name: 'stock decrease', icon: UsersIcon, current: false },
  { name: 'search', icon: FolderIcon, current: false },
];

export const supplier_navigation_items = [
  { name: 'add vendor/supplier', href: '/addSupplier', icon: DocumentDuplicateIcon, current: false },
  { name: 'search', icon: UsersIcon, current: false },
];
