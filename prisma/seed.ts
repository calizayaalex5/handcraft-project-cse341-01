import { PrismaClient } from "@prisma/client"
import { readFileSync } from "fs"
import bcrypt from "bcryptjs"

const envContent = readFileSync(".env.local", "utf-8")
const match = envContent.match(/DATABASE_URL="([^"]+)"/)
const DATABASE_URL = match?.[1] ?? ""

process.env.DATABASE_URL = DATABASE_URL

const prisma = new PrismaClient()

async function main() {
  const joyeria = await prisma.category.upsert({
    where: { slug: "joyeria" },
    update: {},
    create: { name: "Joyería", slug: "joyeria" },
  })

  const decoracion = await prisma.category.upsert({
    where: { slug: "decoracion" },
    update: {},
    create: { name: "Decoración Hogar", slug: "decoracion" },
  })

  const ropa = await prisma.category.upsert({
    where: { slug: "ropa" },
    update: {},
    create: { name: "Ropa", slug: "ropa" },
  })

  console.log("✅ Categorías creadas")

  await prisma.product.createMany({
    skipDuplicates: true,
    data: [
      { name: "Collar Artesanal",     description: "Hermoso collar hecho a mano",        price: 24.99, stock: 15, categoryId: joyeria.id },
      { name: "Aretes de Plata",      description: "Aretes elaborados en plata pura",    price: 18.99, stock: 22, categoryId: joyeria.id },
      { name: "Pulsera de Cuero",     description: "Pulsera artesanal de cuero",         price: 15.99, stock: 10, categoryId: joyeria.id },
      { name: "Jarrón de Barro",      description: "Jarrón tradicional de barro",        price: 39.99, stock: 8,  categoryId: decoracion.id },
      { name: "Cojín Bordado",        description: "Cojín con bordados artesanales",     price: 29.99, stock: 5,  categoryId: decoracion.id },
      { name: "Macetero de Cerámica", description: "Macetero hecho en cerámica",         price: 44.99, stock: 12, categoryId: decoracion.id },
      { name: "Bolso Tejido",         description: "Bolso tejido a mano",                price: 54.99, stock: 0,  categoryId: ropa.id },
      { name: "Vestido Artesanal",    description: "Vestido con bordados tradicionales",  price: 74.99, stock: 0,  categoryId: ropa.id },
    ],
  })

  console.log("✅ Productos creados")
  
   const hashedPassword = await bcrypt.hash("admin123", 10)

  await prisma.user.upsert({
    where: { email: "admin@handcraft.com" },
    update: { password: hashedPassword },
    create: {
      name: "Admin",
      email: "admin@handcraft.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  })

  console.log("✅ Usuario admin creado")
  console.log("🌱 Seed completado")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())