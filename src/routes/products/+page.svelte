<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div>
    {#if data.products.length === 0}
        <div>Belum ada produk. Silakan tambahkan produk baru.</div>
    {/if}
    {#each data.products as product}
        <div>
            {product.id} {product.name} {product.price} {product.stock}
        </div>
    {/each}
</div>