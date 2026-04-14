import { User, Mail, MapPin } from "lucide-react"

type UserType = {
    id: string
    name: string
    email: string
    role: string
}

export default function ProfileInfo({ user }: { user: UserType }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 bg-stone-200 rounded-full flex items-center justify-center">
                    <User size={32} className="text-stone-400" />
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

            <button className="mt-6 w-full border border-stone-200 text-stone-700 text-sm py-3 rounded-full hover:bg-stone-50 transition">
                Editar perfil
            </button>
        </div>
    )
}