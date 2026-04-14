import { ShoppingBag, DollarSign, Star, Package } from "lucide-react"

type Stats = {
    totalProducts: number
    totalSales: number
    totalRevenue: number
    avgRating: number
}

export default function SellerStats({ stats }: { stats: Stats }) {
    const cards = [
        { label: "Productos",    value: stats.totalProducts.toString(),      icon: Package,     color: "text-blue-500" },
        { label: "Ventas",       value: stats.totalSales.toString(),          icon: ShoppingBag, color: "text-green-500" },
        { label: "Ingresos",     value: `$${stats.totalRevenue.toFixed(2)}`,  icon: DollarSign,  color: "text-purple-500" },
        { label: "Rating prom.", value: stats.avgRating.toFixed(1) + " ★",   icon: Star,        color: "text-yellow-500" },
    ]

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {cards.map((card) => (
                <div key={card.label} className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <card.icon size={18} className={card.color} />
                        <p className="text-xs text-stone-400 uppercase tracking-widest">{card.label}</p>
                    </div>
                    <p className="text-2xl font-bold text-stone-800">{card.value}</p>
                </div>
            ))}
        </div>
    )
}