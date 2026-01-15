'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

function SignupForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [role, setRole] = useState<'teacher' | 'student'>('student')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const roleParam = searchParams.get('role')
    if (roleParam === 'teacher' || roleParam === 'student') {
      setRole(roleParam)
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password !== confirmPassword) {
      setError('Passwords do not match!')
      return
    }
    // For demo purposes, redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-hack-blue via-purple-500 to-hack-green flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-white hover:text-gray-100 transition-colors mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">
            Join Hack Club! 🚀
          </h1>
          <p className="text-white/90">
            Create your account and start learning
          </p>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-hack-dark">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-hack-red rounded-lg">
              <p className="text-hack-red font-bold">{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-bold text-hack-dark mb-3">
                I am a...
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole('teacher')}
                  className={`py-3 px-4 rounded-lg font-bold transition-all ${
                    role === 'teacher'
                      ? 'bg-hack-red text-white border-2 border-hack-red'
                      : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:border-hack-red'
                  }`}
                >
                  👨‍🏫 Teacher
                </button>
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`py-3 px-4 rounded-lg font-bold transition-all ${
                    role === 'student'
                      ? 'bg-hack-red text-white border-2 border-hack-red'
                      : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:border-hack-red'
                  }`}
                >
                  🎓 Student
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-bold text-hack-dark mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none transition-colors"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-hack-dark mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none transition-colors"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-hack-dark mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none transition-colors"
                placeholder="••••••••"
                required
                minLength={8}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-hack-dark mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none transition-colors"
                placeholder="••••••••"
                required
                minLength={8}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-hack-red text-white py-3 rounded-lg font-bold text-lg hover:bg-red-600 transition-colors"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-700">
              Already have an account?{' '}
              <Link href="/login" className="text-hack-red hover:text-red-600 font-bold">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SignupPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-hack-blue via-purple-500 to-hack-green flex items-center justify-center">
        <div className="text-white text-2xl font-bold">Loading...</div>
      </div>
    }>
      <SignupForm />
    </Suspense>
  )
}
