import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const products = sqliteTable('products', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	price: integer('price').notNull().default(0),
	stock: integer('stock').notNull().default(0),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.default(sql`(strftime('%s', 'now'))`),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.default(sql`(strftime('%s', 'now'))`)
});

export const transactions = sqliteTable('transactions', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	totalAmount: integer('total_amount').notNull().default(0),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.default(sql`(strftime('%s', 'now'))`)
});

export const transactionItems = sqliteTable('transaction_items', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	transactionId: integer('transaction_id')
		.notNull()
		.references(() => transactions.id, { onDelete: 'cascade' }),
	productId: integer('product_id')
		.notNull()
		.references(() => products.id),
	quantity: integer('quantity').notNull().default(1),
	priceAtTime: integer('price_at_time').notNull().default(0)
});
