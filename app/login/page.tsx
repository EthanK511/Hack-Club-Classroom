'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For demo purposes, redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-hack-red via-red-500 to-hack-blue flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-white hover:text-gray-100 transition-colors mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome Back! 👋
          </h1>
          <p className="text-white/90">
            Log in to your Hack Club Classroom account
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border-4 border-hack-dark dark:border-hack-red">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-hack-dark dark:text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-hack-red focus:outline-none transition-colors"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-hack-dark dark:text-white mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-hack-red focus:outline-none transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-hack-red border-gray-300 rounded focus:ring-hack-red"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Remember me</span>
              </label>
              <a href="#" className="text-sm text-hack-red hover:text-red-600 font-bold">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-hack-red text-white py-3 rounded-full font-bold text-lg hover:bg-red-600 transition-all shadow-md hover:shadow-lg"
            >
              Log In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-700 dark:text-gray-300">
              Don't have an account?{' '}
              <Link href="/signup" className="text-hack-red hover:text-red-600 font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
