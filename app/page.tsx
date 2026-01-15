'use client'

import Link from 'next/link'
import DarkModeToggle from '@/components/DarkModeToggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="bg-hack-dark dark:bg-black border-b-4 border-hack-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-white">
                🎓 Hack Club Classroom
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <DarkModeToggle />
              <Link href="/login" className="text-white hover:text-hack-red transition-colors">
                Login
              </Link>
              <Link href="/signup" className="bg-hack-red text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition-all shadow-md hover:shadow-lg">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-hack-red via-red-500 to-hack-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learn Together, Build Together
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              A collaborative classroom platform built by hackers, for hackers
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/signup?role=teacher" className="bg-white text-hack-red px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                I'm a Teacher
              </Link>
              <Link href="/signup?role=student" className="bg-hack-dark text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                I'm a Student
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-hack-dark dark:text-white">
          Everything You Need to Teach & Learn
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="📚"
            title="Classes"
            description="Create and manage classes with ease. Organize your students and content in one place."
          />
          <FeatureCard
            icon="📝"
            title="Assignments"
            description="Create assignments, set deadlines, and track student progress in real-time."
          />
          <FeatureCard
            icon="💬"
            title="Announcements"
            description="Keep everyone in the loop with class announcements and updates."
          />
          <FeatureCard
            icon="📊"
            title="Grades"
            description="Grade assignments and provide feedback to help students improve."
          />
          <FeatureCard
            icon="🎯"
            title="Easy Submissions"
            description="Students can submit work directly through the platform with just a few clicks."
          />
          <FeatureCard
            icon="🔔"
            title="Notifications"
            description="Stay updated with real-time notifications for assignments, grades, and announcements."
          />
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-hack-dark dark:bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <StepCard
              number="1"
              title="Sign Up"
              description="Create your account as a teacher or student in seconds."
            />
            <StepCard
              number="2"
              title="Join or Create"
              description="Teachers create classes, students join with a class code."
            />
            <StepCard
              number="3"
              title="Start Learning"
              description="Share assignments, collaborate, and track progress together."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-hack-blue to-hack-green py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of teachers and students already using Hack Club Classroom
          </p>
          <Link href="/signup" className="inline-block bg-white text-hack-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Create Your Free Account
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-hack-dark dark:bg-black border-t-4 border-hack-red py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <p className="text-lg mb-4">
              Built with ❤️ by the Hack Club community
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://hackclub.com" className="text-hack-red hover:text-red-400 transition-colors">
                Hack Club
              </a>
              <a href="https://hackclub.com/brand" className="text-hack-red hover:text-red-400 transition-colors">
                Brand
              </a>
              <a href="/about" className="text-white hover:text-hack-red transition-colors">
                About
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 border-4 border-hack-dark dark:border-hack-red rounded-2xl p-6 hover:shadow-2xl transition-all transform hover:scale-105">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-hack-dark dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-hack-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
        {number}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
