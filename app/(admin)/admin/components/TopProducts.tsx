type Product = {
    id: string
    name: string
    totalSales: number
    totalRevenue: number
    category: { name: string }
}

export default function TopProducts({ products }: { products: Product[] }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-5">Productos más vendidos</h2>
            <div className="flex flex-col gap-4">
                {products.map((product, index) => (
                    <div key={product.id} className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-stone-200 w-8">{index + 1}</span>
                        <div className="w-10 h-10 bg-stone-100 rounded-xl flex-shrink-0" />
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-stone-800">{product.name}</p>
                            <p className="text-xs text-stone-400">{product.category.name} · {product.totalSales} ventas</p>
                        </div>
                        <p className="text-sm font-bold text-stone-800">${product.totalRevenue?.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}