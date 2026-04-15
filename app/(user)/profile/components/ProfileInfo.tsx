"use client"
import { useState } from "react"
import { User, Mail, Lock, Shield } from "lucide-react"
import { useAuth } from "@/app/context/AuthContext"
import ImageUpload from "@/app/components/ImageUpload"
import Image from "next/image"

type UserType = {
    id: string
    name: string
    email: string
    role: string
    token: string
    image?: string
}

export default function ProfileInfo({ user }: { user: UserType }) {
    const { updateUserData } = useAuth()

    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [activeTab, setActiveTab] = useState<"info" | "password" | "role">("info")

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [image, setImage] = useState(user.image ?? "")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState(user.role)
    const [error, setError] = useState("")

    const handleSave = async () => {
        console.log("imagen al guardar:", image)
        setError("")
        setLoading(true)

        try {
            let body: any = {}

            if (activeTab === "info") {
                body = { name, email, phone, address, city, country, image }
        } else if (activeTab === "password") {
            if (newPassword !== confirmPassword) {
                setError("Las contraseñas no coinciden")
                setLoading(false)
                return
            }
            if (newPassword.length < 6) {
                setError("La contraseña debe tener al menos 6 caracteres")
                setLoading(false)
                return
            }
            body = { password: newPassword }
        } else if (activeTab === "role") {
            body = { role }
        }

        const res = await fetch(`/api/users/${user.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify(body),
        })

        if (res.ok) {
            if (activeTab === "info") updateUserData({ name, email, image })
            if (activeTab === "role") updateUserData({ role })

            setSuccess(true)
            setTimeout(() => {
            setShowModal(false)
            setSuccess(false)
            }, 1500)
        }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">

            <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 bg-stone-200 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                {user.image ? (
                    <Image
                    src={user.image}
                    alt={user.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                    />
                ) : (
                    <User size={32} className="text-stone-400" />
                )}
                </div>
                <div>
                <h2 className="text-xl font-bold text-stone-800">{user.name}</h2>
                <p className="text-sm text-stone-400 capitalize">{user.role.toLowerCase()}</p>
                </div>
            </div>

            <div className="flex flex-col gap-3 text-sm text-stone-600">
                <div className="flex items-center gap-3">
                <Mail size={16} className="text-stone-400" />
                <span>{user.email}</span>
                </div>
            </div>

            <button
                onClick={() => setShowModal(true)}
                className="mt-6 w-full border border-stone-200 text-stone-700 text-sm py-3 rounded-full hover:bg-stone-50 transition"
            >
                Editar perfil
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl max-h-[90vh] overflow-y-auto">

                        <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-stone-800">Editar perfil</h2>
                        <button onClick={() => setShowModal(false)} className="text-stone-400 hover:text-stone-600">✕</button>
                        </div>

                        <div className="flex gap-2 mb-6">
                        {[
                            { key: "info", label: "Información" },
                            { key: "password", label: "Contraseña" },
                            { key: "role", label: "Rol" },
                        ].map((tab) => (
                            <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key as any)}
                            className={`flex-1 text-xs py-2 rounded-full transition ${
                                activeTab === tab.key
                                ? "bg-stone-800 text-white"
                                : "border border-stone-200 text-stone-500 hover:bg-stone-50"
                            }`}
                            >
                            {tab.label}
                            </button>
                        ))}
                        </div>

                        {success ? (
                        <p className="text-green-600 text-center font-medium py-8">¡Perfil actualizado! ✅</p>
                        ) : (
                            <div className="flex flex-col gap-4">

                                {activeTab === "info" && (
                                <>
                                    <div className="flex flex-col gap-1">
                                    <label className="text-xs text-stone-500 uppercase tracking-widest">Foto de perfil</label>
                                    <ImageUpload
                                        onUpload={(url) => setImage(url)}
                                        currentImage={image}
                                        label="Subir foto de perfil"
                                    />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-stone-500 uppercase tracking-widest">Nombre</label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-stone-500 uppercase tracking-widest">Teléfono</label>
                                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
                                        placeholder="+1 234 567 890"
                                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300" />
                                    </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-stone-500 uppercase tracking-widest">Email</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-stone-500 uppercase tracking-widest">Dirección</label>
                                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}
                                            placeholder="Calle 123"
                                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300" />
                                        </div>
                                    <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-stone-500 uppercase tracking-widest">Ciudad</label>
                                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
                                        placeholder="Ciudad"
                                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300" />
                                    </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-xs text-stone-500 uppercase tracking-widest">País</label>
                                            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}
                                            placeholder="País"
                                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300" />
                                        </div>
                                    </div>
                                </>
                                )}

                                {activeTab === "password" && (
                                <>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-stone-500 uppercase tracking-widest">Nueva contraseña</label>
                                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-stone-500 uppercase tracking-widest">Confirmar contraseña</label>
                                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300" />
                                    </div>
                                </>
                                )}

                                {activeTab === "role" && (
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-stone-500 uppercase tracking-widest">Tipo de cuenta</label>
                                        <select value={role} onChange={(e) => setRole(e.target.value)}
                                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300 bg-white">
                                            <option value="BUYER">Comprador</option>
                                            <option value="SELLER">Vendedor / Artesano</option>
                                            <option value="ADMIN">Admin</option>
                                        </select>
                                    </div>
                                )}

                                {error && <p className="text-red-500 text-xs">{error}</p>}

                                <div className="flex gap-3 mt-2">
                                    <button onClick={() => setShowModal(false)}
                                        className="flex-1 border border-stone-200 text-stone-700 text-sm py-3 rounded-full hover:bg-stone-50 transition">
                                        Cancelar
                                    </button>
                                    <button onClick={handleSave} disabled={loading}
                                        className="flex-1 bg-stone-800 text-white text-sm py-3 rounded-full hover:bg-stone-700 transition disabled:opacity-50">
                                        {loading ? "Guardando..." : "Guardar"}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}