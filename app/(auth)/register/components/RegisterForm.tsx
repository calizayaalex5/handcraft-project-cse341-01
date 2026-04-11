"use client"
import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/app/context/AuthContext"

export default function RegisterForm() {
    const { register } = useAuth()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState("BUYER")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setError("")

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden")
            return
        }

        setLoading(true)
        try {
            await register(name, email, password, role)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm w-full max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-stone-800 mb-2">Crear cuenta</h1>
            <p className="text-stone-400 text-sm mb-8">Únete a Handcraft Haven</p>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-4">
                    {error}
                </div>
            )}

            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Nombre</label>
                        <input
                        type="text"
                        placeholder="Juan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Apellido</label>
                        <input
                            type="text"
                            placeholder="Pérez"
                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-stone-500 uppercase tracking-widest">Email</label>
                    <input
                        type="email"
                        placeholder="juan@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-stone-500 uppercase tracking-widest">Contraseña</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-stone-500 uppercase tracking-widest">Confirmar contraseña</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-stone-500 uppercase tracking-widest">Tipo de cuenta</label>
                    <select 
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300 bg-white"
                    >
                        <option value="BUYER">Comprador</option>
                        <option value="SELLER">Vendedor / Artesano</option>
                    </select>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-stone-800 text-white text-sm py-3 rounded-full hover:bg-stone-700 transition mt-2 disabled:opacity-50"
                >
                    {loading ? "Creando cuenta..." : "Crear cuenta"}
                </button>

                <p className="text-center text-sm text-stone-400">
                ¿Ya tienes cuenta?{" "}
                <Link href="/login" className="text-stone-800 font-semibold hover:underline">
                    Inicia sesión
                </Link>
                </p>
            </div>
        </div>
    )
}