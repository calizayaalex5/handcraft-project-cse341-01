"use client"
import Image from "next/image"

export default function ProductImages({ image, name }: { image?: string; name?: string }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="relative w-full h-96 bg-stone-200 rounded-2xl overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={name ?? "Producto artesanal"}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400 text-sm">
                        Sin imagen
                    </div>
                )}
            </div>

            <div className="flex gap-3">
                {[1, 2, 3].map((i) => (
                <div key={i} className="relative w-20 h-20 bg-stone-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-stone-400 transition">
                    {image && (
                    <Image
                        src={image}
                        alt={`${name} ${i}`}
                        fill
                        className="object-cover"
                    />
                    )}
                </div>
                ))}
            </div>
        </div>
    )
}