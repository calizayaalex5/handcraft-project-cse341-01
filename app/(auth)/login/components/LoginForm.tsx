"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginForm() {
    const router = useRouter()

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm w-full max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-stone-800 mb-2">Bienvenido</h1>
            <p className="text-stone-400 text-sm mb-8">Inicia sesión en tu cuenta</p>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-stone-500 uppercase tracking-widest">Email</label>
                    <input
                        type="email"
                        placeholder="juan@email.com"
                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-stone-500 uppercase tracking-widest">Contraseña</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                    />
                </div>

                <button
                    onClick={() => router.push("/profile")}
                    className="w-full bg-stone-800 text-white text-sm py-3 rounded-full hover:bg-stone-700 transition mt-2"
                >
                    Iniciar sesión
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