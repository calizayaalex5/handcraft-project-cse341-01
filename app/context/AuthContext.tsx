"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type User = {
    id: string
    name: string
    email: string
    role: string
    token: string
}

type AuthContextType = {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    register: (name: string, email: string, password: string, role: string) => Promise<void>
    logout: () => void
    updateUserData: (data: Partial<User>) => void
    loading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    // Cargar usuario del localStorage al iniciar
    useEffect(() => {
        const stored = localStorage.getItem("user")
        if (stored) {
            setUser(JSON.parse(stored))
        }
        setLoading(false)
    }, [])

    const login = async (email: string, password: string) => {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })

    const data = await res.json()

    if (!res.ok) throw new Error(data.error)

    localStorage.setItem("user", JSON.stringify(data))
    setUser(data)

        // Redirigir según rol
        if (data.role === "ADMIN") {
            router.push("/admin")
        } else {
            router.push("/")
        }
    }

    const register = async (name: string, email: string, password: string, role: string) => {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, role }),
        })

        const data = await res.json()

        if (!res.ok) throw new Error(data.error)

        localStorage.setItem("user", JSON.stringify(data))
        setUser(data)
        router.push("/")
    }

    const logout = () => {
        localStorage.removeItem("user")
            setUser(null)
        router.push("/login")
    }

    const updateUserData = (data: Partial<User>) => {
        if (!user) return
        const updated = { ...user, ...data }
        localStorage.setItem("user", JSON.stringify(updated))
        setUser(updated)
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout, updateUserData, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider")
    return context
}