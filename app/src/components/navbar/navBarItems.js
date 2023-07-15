import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';


export const purchase_navigation_items = [
  { name: 'add purchase item', href: '/purchase', icon: DocumentDuplicateIcon, current: false },
  { name: 'purchase refund',href:'/PurchaseRefund', icon: HomeIcon, current: false },
  { name: 'purchase adjustment',href:'/PurchaseAdjustment', icon: ChartPieIcon, current: false },
  { name: 'purchase order', href:'/purchaseOrder',icon: FolderIcon, current: false },
  { name: 'account payable', icon: CalendarIcon, current: false },
];

export const stock_navigation_items = [
  { name: 'add stock', href: '/addstock', icon: DocumentDuplicateIcon, current: false },
  { name: 'stock increase/decrease',href:'/Stock_Increase_Decrease', icon: ChartPieIcon, current: false },
];



