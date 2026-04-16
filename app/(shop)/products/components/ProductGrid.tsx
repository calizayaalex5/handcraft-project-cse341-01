import ProductCard from "./ProductCard"
import { getProducts } from "@/lib/controllers/product.controller"

export default async function ProductGrid() {
    const products = await getProducts()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={{
                        id: product.id,
                        name: product.name,
                        price: `$${product.price.toFixed(2)}`,
                        category: product.category.name,
                        image: product.image ?? undefined,
                        stock: product.stock,
                    }}
                />
            ))}
        </div>
    )
}