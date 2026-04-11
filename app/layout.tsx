import "./globals.css"
import { AuthProvider } from "./context/AuthContext"

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
                </AuthProvider>
            </body>
        </html>
    )
}