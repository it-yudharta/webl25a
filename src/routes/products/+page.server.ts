import type { PageServerLoad } from './$types';
import { getDb } from '$lib/server/db';
import { products } from '$lib/server/db/schema';

export const load: PageServerLoad = async ({ platform }) => {
    const db = getDb(platform!.env.DB)
    const productList = await db.select().from(products).all()

    return { products: productList }
}