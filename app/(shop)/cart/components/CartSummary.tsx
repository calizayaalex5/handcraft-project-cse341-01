import Link from "next/link"

export default function CartSummary({ total }: { total: number }) {
    return (
        <div className="bg-stone-50 rounded-2xl p-6 sticky top-24">
            <h2 className="text-lg font-bold text-stone-800 mb-6">Resumen</h2>

            <div className="flex flex-col gap-3 text-sm text-stone-600 mb-6">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Envío</span>
                    <span className="text-green-600">Gratis</span>
                </div>
                <div className="flex justify-between border-t border-stone-200 pt-3 font-bold text-stone-800">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            <Link
                href="/checkout"
                className="block w-full bg-stone-800 text-white text-sm text-center py-3 rounded-full hover:bg-stone-700 transition"
            >
                Proceder al pago
            </Link>

            <Link
                href="/products"
                className="block w-full text-center text-sm text-stone-500 hover:text-stone-800 transition mt-3"
            >
                Seguir comprando
            </Link>
        </div>
    )
}