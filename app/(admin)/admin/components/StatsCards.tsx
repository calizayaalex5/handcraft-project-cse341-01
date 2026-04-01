import { ShoppingBag, Users, DollarSign, TrendingUp } from "lucide-react"

const stats = [
    { label: "Ventas totales",    value: "$12,450",  icon: DollarSign,  change: "+12%", positive: true },
    { label: "Pedidos",           value: "148",       icon: ShoppingBag, change: "+8%",  positive: true },
    { label: "Usuarios",          value: "320",       icon: Users,       change: "+5%",  positive: true },
    { label: "Productos activos", value: "64",        icon: TrendingUp,  change: "-2%",  positive: false },
]

export default function StatsCards() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-stone-400 uppercase tracking-widest">{stat.label}</p>
                    <div className="p-2 bg-stone-50 rounded-xl">
                        <stat.icon size={18} className="text-stone-500" />
                    </div>
                </div>
                <p className="text-3xl font-bold text-stone-800">{stat.value}</p>
                <p className={`text-xs mt-2 ${stat.positive ? "text-green-600" : "text-red-500"}`}>
                    {stat.change} este mes
                </p>
            </div>
        ))}
        </div>
    )
}