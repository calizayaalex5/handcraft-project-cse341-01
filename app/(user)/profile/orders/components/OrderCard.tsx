import Link from "next/link"

const statusColor: Record<string, string> = {
    DELIVERED: "bg-green-100 text-green-700",
    SHIPPED:   "bg-blue-100 text-blue-700",
    PENDING:   "bg-yellow-100 text-yellow-700",
    CANCELLED: "bg-red-100 text-red-700",
}

const statusLabel: Record<string, string> = {
    DELIVERED: "Entregado",
    SHIPPED:   "En camino",
    PENDING:   "Pendiente",
    CANCELLED: "Cancelado",
}

type Order = {
    id: string
    total: number
    status: string
    createdAt: string
    items: {
        id: string
        quantity: number
        price: number
        product: { name: string }
    }[]
}

export default function OrderCard({ order }: { order: Order }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">

            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="text-sm font-bold text-stone-800">Pedido #{order.id.slice(-6)}</p>
                    <p className="text-xs text-stone-400 mt-1">
                        {new Date(order.createdAt).toLocaleDateString("es-ES", {
                        day: "numeric", month: "long", year: "numeric"
                        })}
                    </p>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[order.status]}`}>
                    {statusLabel[order.status]}
                </span>
            </div>

            <div className="flex flex-col gap-3 border-t border-stone-100 pt-4">
                {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-stone-100 rounded-xl flex-shrink-0" />
                    <div className="flex-1">
                        <p className="text-sm font-medium text-stone-800">{item.product.name}</p>
                        <p className="text-xs text-stone-400">Cantidad: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-stone-800">${item.price.toFixed(2)}</p>
                </div>
                ))}
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
                <p className="text-sm font-bold text-stone-800">Total: ${order.total.toFixed(2)}</p>
                <Link
                    href="/products"
                    className="text-xs border border-stone-200 text-stone-600 px-4 py-2 rounded-full hover:bg-stone-800 hover:text-white hover:border-stone-800 transition"
                >
                    Volver a comprar
                </Link>
            </div>

        </div>
    )
}