"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  address?: string
  city?: string
  region?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (userData: SignupData) => Promise<boolean>
  logout: () => void
  updateProfile: (userData: Partial<User>) => Promise<boolean>
  isAuthenticated: boolean
}

interface SignupData {
  email: string
  password: string
  firstName: string
  lastName: string
  phone: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem("elotene_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate login - in production, this would call an API
    const storedUsers = localStorage.getItem("elotene_users")
    const users = storedUsers ? JSON.parse(storedUsers) : []

    const foundUser = users.find((u: any) => u.email === email && u.password === password)

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem("elotene_user", JSON.stringify(userWithoutPassword))
      return true
    }

    return false
  }

  const signup = async (userData: SignupData): Promise<boolean> => {
    // Simulate signup - in production, this would call an API
    const storedUsers = localStorage.getItem("elotene_users")
    const users = storedUsers ? JSON.parse(storedUsers) : []

    // Check if email already exists
    if (users.some((u: any) => u.email === userData.email)) {
      return false
    }

    const newUser = {
      id: Date.now().toString(),
      ...userData,
    }

    users.push(newUser)
    localStorage.setItem("elotene_users", JSON.stringify(users))

    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem("elotene_user", JSON.stringify(userWithoutPassword))

    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("elotene_user")
  }

  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    if (!user) return false

    const updatedUser = { ...user, ...userData }
    setUser(updatedUser)
    localStorage.setItem("elotene_user", JSON.stringify(updatedUser))

    // Update in users list
    const storedUsers = localStorage.getItem("elotene_users")
    const users = storedUsers ? JSON.parse(storedUsers) : []
    const userIndex = users.findIndex((u: any) => u.id === user.id)

    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...userData }
      localStorage.setItem("elotene_users", JSON.stringify(users))
    }

    return true
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        updateProfile,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
