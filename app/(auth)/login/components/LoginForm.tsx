"use client"
import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/app/context/AuthContext"

export default function LoginForm() {
    const { login } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
    setError("")
    setLoading(true)
    try {
        await login(email, password)
    } catch (err: any) {
        setError(err.message)
    } finally {
        setLoading(false)
        }
    }

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm w-full max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-stone-800 mb-2">Bienvenido</h1>
            <p className="text-stone-400 text-sm mb-8">Inicia sesión en tu cuenta</p>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-4">
                    {error}
                </div>
            )}

            <div className="flex flex-col gap-4">
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

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-stone-800 text-white text-sm py-3 rounded-full hover:bg-stone-700 transition mt-2 disabled:opacity-50"
                >
                    {loading ? "Iniciando sesión..." : "Iniciar sesión"}
                </button>

                <p className="text-center text-sm text-stone-400">
                    ¿No tienes cuenta?{" "}
                    <Link href="/register" className="text-stone-800 font-semibold hover:underline">
                        Regístrate
                    </Link>
                </p>
            </div>
        </div>
    )
}