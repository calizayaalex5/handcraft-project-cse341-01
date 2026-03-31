import Link from "next/link"

const orders = [
    { id: "001", date: "Mar 2026", total: "$24.99",  status: "Entregado",  items: 1 },
    { id: "002", date: "Feb 2026", total: "$104.97", status: "En camino",  items: 3 },
    { id: "003", date: "Ene 2026", total: "$39.99",  status: "Entregado",  items: 1 },
]

const statusColor: Record<string, string> = {
  "Entregado": "bg-green-100 text-green-700",
  "En camino": "bg-blue-100 text-blue-700",
  "Pendiente": "bg-yellow-100 text-yellow-700",
}

export default function OrdersList() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-5">Mis Pedidos</h2>

            <div className="flex flex-col gap-4">
                {orders.map((order) => (
                <div key={order.id} className="flex items-center justify-between border border-stone-100 rounded-xl p-4">
                    <div>
                        <p className="text-sm font-semibold text-stone-800">Pedido #{order.id}</p>
                        <p className="text-xs text-stone-400 mt-1">{order.date} · {order.items} {order.items === 1 ? "item" : "items"}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[order.status]}`}>
                            {order.status}
                        </span>
                        <p className="text-sm font-bold text-stone-800">{order.total}</p>
                    </div>
                </div>
                ))}
            </div>

            <Link
                href="/profile/orders"
                className="block text-center text-sm text-stone-500 hover:text-stone-800 transition mt-5"
            >
                Ver todos los pedidos
            </Link>
        </div>
    )
}