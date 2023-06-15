import Dexie from 'dexie';

// Define the database
const db = new Dexie('myDatabase');
// Define the tables and their schemas
db.version(1).stores({
  users: '++id,name, password',
  suppliers: '++id, name, contact_type_id, category_id, is_active',
  supplierContactTypes: '++id, contact_type_name',
  supplierContacts: '++id, supplier_id, contact_name, phone, email',
  supplierCategories: '++id, category_name',
  supplierAddresses: '++id, supplier_id, address_line1, address_line2, city, state, postal_code, country, region',
  supplierProducts: '++id, supplier_id, product_id, supplier_product_code',
  stock: '++id, product_id, quantity_in_stock',
  stockAudit: '++id, product_id, audit_date, quantity_counted',
  stockAdjustment: '++id, product_id, adjustment_date, quantity_adjusted, reason, adjustment_type',
  lowStockAlert: '++id, product_id, alert_date, alert_message',
  stockTransfer: '++id, product_id, source_location, destination_location, transfer_date, quantity_transferred',
  stockMovement: '++id, product_id, movement_date, source_location, destination_location, quantity_moved',
  stockTransaction: '++id, product_id, transaction_date, transaction_type, quantity',
  shelf: '++id,name, capacity',
  shelfLocation: '++id, shelf_id, product_id, quantity_on_shelf',
  products: '++id,name, category_id, description, unit_price, quantity_in_stock, supplier_id, reorder_point, manufacturer, dosage_id',
  productCategories: '++id,name',
  productExpiryAlert: '++id, product_id, alert_date, expiry_date',
  batch: '++id, product_id, batch_number, expiration_date, manufacturing_date, quantity_in_batch',
  unit: '++id,name, unit_symbol',
  medDosage: 'id, dosage_form',
});



export default db;
