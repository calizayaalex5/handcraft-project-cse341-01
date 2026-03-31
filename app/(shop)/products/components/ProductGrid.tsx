import ProductCard from "./ProductCard"

const products = [
    { id: 1,  name: "Collar Artesanal",    price: "$24.99", category: "Joyería" },
    { id: 2,  name: "Jarrón de Barro",     price: "$39.99", category: "Decoración" },
    { id: 3,  name: "Bolso Tejido",        price: "$54.99", category: "Ropa" },
    { id: 4,  name: "Aretes de Plata",     price: "$18.99", category: "Joyería" },
    { id: 5,  name: "Cojín Bordado",       price: "$29.99", category: "Decoración" },
    { id: 6,  name: "Pulsera de Cuero",    price: "$15.99", category: "Joyería" },
    { id: 7,  name: "Vestido Artesanal",   price: "$74.99", category: "Ropa" },
    { id: 8,  name: "Macetero de Cerámica",price: "$44.99", category: "Decoración" },
]

export default function ProductGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}