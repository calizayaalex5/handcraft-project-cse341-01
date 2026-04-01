const products = [
    { id: 1, name: "Collar Artesanal",  sales: 48, revenue: "$1,199.52", category: "Joyería" },
    { id: 2, name: "Jarrón de Barro",   sales: 32, revenue: "$1,279.68", category: "Decoración" },
    { id: 3, name: "Bolso Tejido",      sales: 21, revenue: "$1,154.79", category: "Ropa" },
    { id: 4, name: "Aretes de Plata",   sales: 19, revenue: "$360.81",   category: "Joyería" },
]

export default function TopProducts() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-5">Productos más vendidos</h2>

            <div className="flex flex-col gap-4">
                {products.map((product, index) => (
                    <div key={product.id} className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-stone-200 w-8">
                        {index + 1}
                        </span>
                        <div className="w-10 h-10 bg-stone-100 rounded-xl flex-shrink-0" />
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-stone-800">{product.name}</p>
                            <p className="text-xs text-stone-400">{product.category} · {product.sales} ventas</p>
                        </div>
                        <p className="text-sm font-bold text-stone-800">{product.revenue}</p>
                    </div>
                ))}                         
            </div>
        </div>
    )
}
