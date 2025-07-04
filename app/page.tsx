"use client"

import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const { user, signOut, isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Image src="/sn-logo.png" alt="SN Logo" width={120} height={120} className="mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Welcome to SN Network</h1>
        </div>

        {isAuthenticated ? (
          <div className="max-w-md mx-auto bg-[#2a2a2a] border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Welcome back, {user?.username}!</h2>
            <p className="text-gray-300 mb-6">You are successfully signed in.</p>
            <button
              onClick={signOut}
              className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-[#2a2a2a] border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Get Started</h2>
            <p className="text-gray-300 mb-6">Sign in to access all features of SN Network.</p>
            <Link
              href="/auth/sign-in"
              className="block w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-center rounded transition-colors"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
