"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import Image from "next/image"
import { Home, Shield, ShoppingCart, LogIn } from "lucide-react"

export default function SignInPage() {
  const [username, setUsername] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { signIn } = useAuth()
  const router = useRouter()
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showRedirectMessage, setShowRedirectMessage] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) return

    setIsSubmitting(true)
    try {
      await signIn(username)
      router.push("/")
    } catch (error) {
      console.error("Sign in failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSignInClick = () => {
    setShowSuccessMessage(true)
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000) // Hide message after 3 seconds
  }

  const handleNavClick = () => {
    setShowRedirectMessage(true)
    setTimeout(() => {
      setShowRedirectMessage(false)
    }, 3000) // Hide message after 3 seconds
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col">
      {/* Header */}
      <header className="bg-[#1B1B1F] text-[#A1A1AA] py-[7.5px] px-4 mb-[15px]">
        <div className="w-[80%] mx-auto flex items-center justify-between">
          <div className="flex items-center justify-center flex-1">
            <Image
              src="/sn-logo.png"
              alt="Spirit - Servidor de Minecraft's Logo"
              width={61}
              height={75}
              className="mx-auto max-h-[5rem] py-2 object-contain"
            />
          </div>
          <button
            onClick={handleSignInClick}
            className="flex items-center gap-2 px-[7.5px] py-2 bg-[#27272A] text-[#A1A1AA] hover:bg-gray-600 hover:text-white transition-colors font-semibold text-[15px] tracking-wide uppercase"
          >
            <span>SIGN IN</span>
            <LogIn size={16} />
          </button>
        </div>
      </header>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          Login bem sucedido!
        </div>
      )}

      {/* Redirect Message */}
      {showRedirectMessage && (
        <div className="fixed top-16 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg z-50">
          Redirecionando...
        </div>
      )}

      {/* Navigation */}
      <nav>
        <div className="w-[79%] mx-auto flex items-center justify-start border border-gray-700 bg-[#18181B]">
          <ul className="inline-flex flex-wrap items-center h-full gap-5 tracking-wide">
            <li>
              <button
                onClick={handleNavClick}
                className="flex items-center gap-2 px-6 py-4 text-[#A1A1AA] hover:text-white hover:bg-gray-800 transition-colors text-[15px] font-bold"
              >
                <Home size={16} />
                <span>HOME</span>
              </button>
            </li>
            <li>
              <button
                onClick={handleNavClick}
                className="flex items-center gap-2 px-6 py-4 text-[#A1A1AA] hover:text-white hover:bg-gray-800 transition-colors text-[15px] font-bold"
              >
                <Shield size={16} />
                <span>SURVIVAL</span>
              </button>
            </li>
            <li>
              <button
                onClick={handleNavClick}
                className="flex items-center gap-2 px-6 py-4 text-[#A1A1AA] hover:text-white hover:bg-gray-800 transition-colors text-[15px] font-bold"
              >
                <ShoppingCart size={16} />
                <span>LOJA DE CASH</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[20vh] px-4 flex-1">
        <div className="w-[80%]">
          <div className="bg-[#18181B] border border-gray-700 rounded-lg px-16 py-8 mt-6">
            <h1 className="text-3xl font-bold text-center text-gray-300 mb-8">ENTER YOUR USERNAME</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full px-6 py-4 bg-[#09090B] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={!username.trim() || isSubmitting}
                  className="px-8 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded transition-colors"
                >
                  {isSubmitting ? "LOADING..." : "CONTINUE"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-3 px-4 mt-auto">
        <div className="w-[80%] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/footer-logo.svg" alt="Spirit Network Logo" width={60} height={60} className="object-contain" />
          </div>

          {/* Center Text */}
          <div className="flex-1 px-8 text-center text-sm text-gray-300">
            <p className="mb-2">
              All products are sold by PlayNetwork, our authorized reseller and official Merchant of Record. They handle
              all sales, payments, and order fulfillment.
            </p>
            <p>© Spirit Network 2025. Todos os Direitos Reservados.</p>
          </div>

          {/* Right Links */}
          <div className="flex-shrink-0">
            <div className="text-right text-sm">
              <p className="font-semibold mb-2">Sobre Nós</p>
              <div className="space-y-1 text-blue-400">
                <p className="hover:text-blue-300 cursor-pointer">Política de Privacidade</p>
                <p className="hover:text-blue-300 cursor-pointer">Termos de Serviço</p>
                <p className="hover:text-blue-300 cursor-pointer">Ajuda</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
