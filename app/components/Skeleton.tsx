export function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
            <div className="w-full h-56 bg-stone-200" />
            <div className="p-4 flex flex-col gap-3">
                <div className="h-3 bg-stone-200 rounded w-1/3" />
                <div className="h-4 bg-stone-200 rounded w-2/3" />
                <div className="flex justify-between items-center">
                    <div className="h-4 bg-stone-200 rounded w-1/4" />
                    <div className="h-7 bg-stone-200 rounded-full w-20" />
                </div>
            </div>
        </div>
    )
}

export function ProductGridSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
        ))}
        </div>
    )
}

export function ProfileSkeleton() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
            <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 bg-stone-200 rounded-full" />
                <div className="flex flex-col gap-2">
                    <div className="h-5 bg-stone-200 rounded w-32" />
                    <div className="h-3 bg-stone-200 rounded w-20" />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="h-3 bg-stone-200 rounded w-48" />
            </div>
            <div className="h-10 bg-stone-200 rounded-full mt-6" />
        </div>
    )
}

export function OrderCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
            <div className="flex justify-between mb-4">
                <div className="flex flex-col gap-2">
                    <div className="h-4 bg-stone-200 rounded w-24" />
                    <div className="h-3 bg-stone-200 rounded w-32" />
                </div>
                <div className="h-6 bg-stone-200 rounded-full w-20" />
            </div>
            <div className="flex flex-col gap-3 border-t border-stone-100 pt-4">
                {[1, 2].map((i) => (
                <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-stone-200 rounded-xl" />
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="h-3 bg-stone-200 rounded w-3/4" />
                        <div className="h-3 bg-stone-200 rounded w-1/4" />
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}