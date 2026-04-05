import ProductCard from "./ProductCard"

type Product = {
    id: string
    name: string
    price: number
    category: { name: string}
}

async function getProducts(): Promise<Product[]> {
    const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  })
  return res.json()
}
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
                    }} 
                />
            ))}
        </div>
    )
}