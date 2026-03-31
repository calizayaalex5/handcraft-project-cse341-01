const team = [
    { name: "Ana García",  role: "Frontend" },
    { name: "Luis Pérez",  role: "Backend" },
    { name: "María López", role: "UI/UX" },
    { name: "Carlos Ruiz", role: "Database" },
]

export default function Team() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-stone-800 mb-12">Nuestro Equipo</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="flex flex-col items-center gap-3">
                        <div className="w-24 h-24 bg-stone-200 rounded-full flex items-center justify-center text-stone-400 text-xs">
                            Foto
                        </div>
                        <p className="text-sm font-semibold text-stone-800">{member.name}</p>
                        <p className="text-xs text-stone-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}