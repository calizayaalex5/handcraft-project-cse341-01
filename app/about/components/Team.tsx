import Image from "next/image"

const team = [
    { name: "Ana García",  role: "Frontend", image: "/images/team/ana-garcia.webp" },
    { name: "Luis Pérez",  role: "Backend", image: "/images/team/luis-perez.webp" },
    { name: "María López", role: "UI/UX", image: "/images/team/maria-lopez.webp" },
    { name: "Carlos Ruiz", role: "Database", image: "/images/team/carlos-ruiz.webp" },
]

export default function Team() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-stone-800 mb-12">Nuestro Equipo</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="flex flex-col items-center gap-3">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md">
                            <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            />
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