"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
    const router = useRouter()

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm w-full max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-stone-800 mb-2">Crear cuenta</h1>
            <p className="text-stone-400 text-sm mb-8">Únete a Handcraft Haven</p>

            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Nombre</label>
                        <input
                        type="text"
                        placeholder="Juan"
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

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-stone-500 uppercase tracking-widest">Confirmar contraseña</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-stone-500 uppercase tracking-widest">Tipo de cuenta</label>
                    <select className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300 bg-white">
                        <option value="buyer">Comprador</option>
                        <option value="seller">Vendedor / Artesano</option>
                    </select>
                </div>

                <button
                    onClick={() => router.push("/login")}
                    className="w-full bg-stone-800 text-white text-sm py-3 rounded-full hover:bg-stone-700 transition mt-2"
                >
                    Crear cuenta
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