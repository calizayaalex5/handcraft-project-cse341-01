import { User, Mail, MapPin } from "lucide-react"

export default function ProfileInfo() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">

        <div className="flex items-center gap-5 mb-6">
            <div className="w-20 h-20 bg-stone-200 rounded-full flex items-center justify-center">
                <User size={32} className="text-stone-400" />
            </div>
            <div>
                <h2 className="text-xl font-bold text-stone-800">Juan Pérez</h2>
                <p className="text-sm text-stone-400">Comprador</p>
            </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-stone-600">
            <div className="flex items-center gap-3">
                <Mail size={16} className="text-stone-400" />
                <span>juan@email.com</span>
            </div>
            <div className="flex items-center gap-3">
                <MapPin size={16} className="text-stone-400" />
                <span>Ciudad, País</span>
            </div>
        </div>

        <button className="mt-6 w-full border border-stone-200 text-stone-700 text-sm py-3 rounded-full hover:bg-stone-50 transition">
            Editar perfil
        </button>

        </div>
    )
}