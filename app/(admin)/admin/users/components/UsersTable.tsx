"use client"

import { Trash2, Shield, ShieldOff } from "lucide-react"

const users = [
    { id: 1, name: "Juan Pérez",   email: "juan@email.com",  role: "Comprador", orders: 3,  status: "Activo" },
    { id: 2, name: "María López",  email: "maria@email.com", role: "Vendedor",  orders: 0,  status: "Activo" },
    { id: 3, name: "Carlos Ruiz",  email: "carlos@email.com",role: "Comprador", orders: 7,  status: "Activo" },
    { id: 4, name: "Ana García",   email: "ana@email.com",   role: "Vendedor",  orders: 0,  status: "Suspendido" },
    { id: 5, name: "Luis Torres",  email: "luis@email.com",  role: "Comprador", orders: 1,  status: "Activo" },
    { id: 6, name: "Sofia Méndez", email: "sofia@email.com", role: "Admin",     orders: 0,  status: "Activo" },
]

const roleColor: Record<string, string> = {
    "Admin":     "bg-purple-100 text-purple-700",
    "Vendedor":  "bg-blue-100 text-blue-700",
    "Comprador": "bg-stone-100 text-stone-700",
}

const statusColor: Record<string, string> = {
    "Activo":     "bg-green-100 text-green-700",
    "Suspendido": "bg-red-100 text-red-700",
}

export default function UsersTable() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-stone-800">Todos los usuarios</h2>
                <p className="text-sm text-stone-400">{users.length} usuarios registrados</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-stone-100">
                            <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Usuario</th>
                            <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Rol</th>
                            <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Pedidos</th>
                            <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Estado</th>
                            <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                        <tr key={user.id} className="border-b border-stone-50 hover:bg-stone-50 transition">
                            <td className="py-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-stone-200 rounded-full flex items-center justify-center text-xs font-bold text-stone-600">
                                        {user.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-stone-800">{user.name}</p>
                                        <p className="text-xs text-stone-400">{user.email}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3">
                                <span className={`text-xs px-3 py-1 rounded-full font-medium ${roleColor[user.role]}`}>
                                    {user.role}
                                </span>
                            </td>
                            <td className="py-3 text-stone-500">{user.orders}</td>
                            <td className="py-3">
                                <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[user.status]}`}>
                                    {user.status}
                                </span>
                            </td>
                            <td className="py-3">
                                <div className="flex items-center gap-2">
                                    <button className="p-1.5 border border-stone-200 rounded-lg hover:bg-stone-50 transition" title="Cambiar rol">
                                        {user.role === "Admin" ? (
                                            <ShieldOff size={14} className="text-stone-400" />
                                        ) : (
                                            <Shield size={14} className="text-stone-400" />
                                        )}
                                    </button>
                                    <button className="p-1.5 border border-stone-200 rounded-lg hover:bg-red-50 hover:border-red-200 transition" title="Eliminar">
                                        <Trash2 size={14} className="text-stone-400 hover:text-red-400" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}