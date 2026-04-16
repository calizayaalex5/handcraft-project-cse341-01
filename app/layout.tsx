import "./globals.css"
import { AuthProvider } from "./context/AuthContext"
import { Toaster } from "react-hot-toast"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        default: "Handcraft Haven",
        template: "%s | Handcraft Haven",
    },
    description: "Marketplace de productos artesanales únicos. Conectando artesanos talentosos con personas que aprecian lo hecho a mano.",
    keywords: ["artesanías", "handmade", "marketplace", "artesanos", "productos únicos"],
    authors: [{ name: "Handcraft Haven" }],
    openGraph: {
        title: "Handcraft Haven",
        description: "Marketplace de productos artesanales únicos.",
        url: "https://handcraft-ten.vercel.app",
        siteName: "Handcraft Haven",
        locale: "es_ES",
        type: "website",
    },
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body>
                <AuthProvider>
                    {children}
                    <Toaster
                        position="bottom-right"
                        toastOptions={{
                            duration: 3000,
                            style: {
                                background: "#292524",
                                color: "#fff",
                                borderRadius: "12px",
                                fontSize: "14px",
                            },
                            success: {
                                iconTheme: {
                                primary: "#22c55e",
                                secondary: "#fff",
                                },
                            },
                            error: {
                                iconTheme: {
                                primary: "#ef4444",
                                secondary: "#fff",
                                },
                            },
                        }}
                    />
                </AuthProvider>
            </body>
        </html>
    )
}