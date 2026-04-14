"use client"
import { Trash2, Shield, ShieldOff } from "lucide-react"
import { useAuth } from "@/app/context/AuthContext"
import { useState } from "react"

type User = {
    id: string
    name: string
    email: string
    role: string
    _count: { orders: number }
}

const roleColor: Record<string, string> = {
    ADMIN:  "bg-purple-100 text-purple-700",
    SELLER: "bg-blue-100 text-blue-700",
    BUYER:  "bg-stone-100 text-stone-700",
}

const roleLabel: Record<string, string> = {
    ADMIN:  "Admin",
    SELLER: "Vendedor",
    BUYER:  "Comprador",
}

export default function UsersTable({ initialUsers }: { initialUsers: User[] }) {
    const { user } = useAuth()
    const [users, setUsers] = useState<User[]>(initialUsers)

    const handleRoleChange = async (userId: string, currentRole: string) => {
        // Ciclo de roles: BUYER → SELLER → ADMIN → BUYER
        const nextRole: Record<string, string> = {
            BUYER:  "SELLER",
            SELLER: "ADMIN",
            ADMIN:  "BUYER",
        }
        const newRole = nextRole[currentRole]

        const res = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user!.token}`,
        },
        body: JSON.stringify({ role: newRole }),
        })

        if (res.ok) {
        setUsers(users.map((u) =>
            u.id === userId ? { ...u, role: newRole } : u
        ))
        }
    }

    const handleDelete = async (userId: string) => {
        if (!confirm("¿Estás seguro de eliminar este usuario?")) return

        const res = await fetch(`/api/users/${userId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${user!.token}` },
        })

        if (res.ok) {
            setUsers(users.filter((u) => u.id !== userId))
        }
    }

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
                        <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u) => (
                        <tr key={u.id} className="border-b border-stone-50 hover:bg-stone-50 transition">
                            <td className="py-3">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-stone-200 rounded-full flex items-center justify-center text-xs font-bold text-stone-600">
                                {u.name.charAt(0)}
                                </div>
                                <div>
                                <p className="font-medium text-stone-800">{u.name}</p>
                                <p className="text-xs text-stone-400">{u.email}</p>
                                </div>
                            </div>
                            </td>
                            <td className="py-3">
                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${roleColor[u.role]}`}>
                                {roleLabel[u.role]}
                            </span>
                            </td>
                            <td className="py-3 text-stone-500">{u._count.orders}</td>
                            <td className="py-3">
                            <div className="flex items-center gap-2">
                                <button
                                onClick={() => handleRoleChange(u.id, u.role)}
                                className="p-1.5 border border-stone-200 rounded-lg hover:bg-stone-50 transition"
                                title={`Cambiar rol (actual: ${roleLabel[u.role]})`}
                                >
                                {u.role === "ADMIN" ? (
                                    <ShieldOff size={14} className="text-stone-400" />
                                ) : (
                                    <Shield size={14} className="text-stone-400" />
                                )}
                                </button>
                                <button
                                onClick={() => handleDelete(u.id)}
                                className="p-1.5 border border-stone-200 rounded-lg hover:bg-red-50 hover:border-red-200 transition"
                                title="Eliminar usuario"
                                >
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