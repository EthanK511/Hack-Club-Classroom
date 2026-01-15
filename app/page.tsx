'use client'

import Link from 'next/link'
import DarkModeToggle from '@/components/DarkModeToggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="text-3xl font-black bg-gradient-to-r from-hack-red to-pink-600 bg-clip-text text-transparent">
                🎓 Hack Club Classroom
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <DarkModeToggle />
              <Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-hack-red dark:hover:text-hack-red transition-colors font-semibold">
                Login
              </Link>
              <Link href="/signup" className="bg-gradient-to-r from-hack-red to-pink-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 shadow-lg">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hack-red/10 via-purple-500/10 to-hack-blue/10 dark:from-hack-red/5 dark:via-purple-500/5 dark:to-hack-blue/5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-hack-red to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ✨ Built by hackers, for hackers
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-hack-red to-purple-900 dark:from-white dark:via-hack-red dark:to-purple-400 bg-clip-text text-transparent">
                Learn Together,
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-900 via-hack-blue to-hack-green dark:from-purple-400 dark:via-hack-blue dark:to-hack-green bg-clip-text text-transparent">
                Build Together
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed font-medium">
              A powerful classroom platform that makes learning 
              <span className="text-hack-red font-bold"> fun</span>, 
              <span className="text-hack-blue font-bold"> collaborative</span>, and 
              <span className="text-hack-green font-bold"> effective</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/signup?role=teacher" className="group relative bg-gradient-to-r from-hack-red to-pink-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
                <span className="relative z-10">👨‍🏫 I'm a Teacher</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-hack-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link href="/signup?role=student" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-4 border-gray-900 dark:border-hack-red px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 hover:border-hack-red dark:hover:border-hack-green transition-all duration-300 shadow-lg">
                🎓 I'm a Student
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 font-medium">
            Powerful tools for teaching and learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="📚"
            color="from-hack-red to-pink-600"
            title="Classes"
            description="Create and organize classes with ease. Manage your students and content in one beautiful place."
          />
          <FeatureCard
            icon="📝"
            color="from-hack-blue to-blue-600"
            title="Assignments"
            description="Create engaging assignments with deadlines. Track student progress in real-time with instant updates."
          />
          <FeatureCard
            icon="💬"
            color="from-purple-600 to-pink-600"
            title="Announcements"
            description="Keep everyone in the loop with class announcements. Share updates instantly with your class."
          />
          <FeatureCard
            icon="📊"
            color="from-hack-green to-green-600"
            title="Grading"
            description="Grade assignments efficiently. Provide detailed feedback to help students improve and grow."
          />
          <FeatureCard
            icon="🎯"
            color="from-hack-yellow to-yellow-600"
            title="Submissions"
            description="Students submit work directly through the platform. Everything organized and accessible."
          />
          <FeatureCard
            icon="🔔"
            color="from-red-600 to-pink-600"
            title="Notifications"
            description="Never miss a deadline. Real-time notifications for assignments, grades, and announcements."
          />
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-hack-dark via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-hack-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(236,55,80,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(51,142,218,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              How It Works
            </h2>
            <p className="text-2xl text-gray-300 font-medium">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <StepCard
              number="1"
              title="Sign Up"
              description="Create your free account as a teacher or student. Takes less than 30 seconds to get started."
              color="from-hack-red to-pink-600"
            />
            <StepCard
              number="2"
              title="Join or Create"
              description="Teachers create classes instantly. Students join with a simple class code. No hassle."
              color="from-hack-blue to-blue-600"
            />
            <StepCard
              number="3"
              title="Start Learning"
              description="Share assignments, collaborate on projects, and track progress together. It's that easy!"
              color="from-hack-green to-green-600"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hack-blue via-purple-600 to-hack-green"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="max-w-5xl mx-auto text-center px-6 relative">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-2xl text-white/90 mb-12 font-medium">
            Join thousands of educators and students already using Hack Club Classroom
          </p>
          <Link href="/signup" className="inline-block bg-white text-gray-900 px-12 py-6 rounded-full font-black text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
            Get Started Free →
          </Link>
          <p className="mt-8 text-white/80 text-lg">
            No credit card required • Free forever • Takes 30 seconds
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-hack-dark dark:bg-black border-t-4 border-hack-red py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-2xl text-white mb-6 font-bold">
              Built with <span className="text-hack-red">❤️</span> by the Hack Club community
            </p>
            <div className="flex justify-center space-x-8 text-lg">
              <a href="https://hackclub.com" className="text-hack-red hover:text-red-400 transition-colors font-bold">
                Hack Club
              </a>
              <a href="https://hackclub.com/brand" className="text-hack-red hover:text-red-400 transition-colors font-bold">
                Brand
              </a>
              <a href="/about" className="text-white hover:text-hack-red transition-colors font-bold">
                About
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, color, title, description }: { icon: string; color: string; title: string; description: string }) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-transparent overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description, color }: { number: string; title: string; description: string; color: string }) {
  return (
    <div className="text-center group">
      <div className={`w-24 h-24 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white text-4xl font-black mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
        {number}
      </div>
      <h3 className="text-3xl font-black mb-6 text-white">{title}</h3>
      <p className="text-gray-300 text-xl leading-relaxed">{description}</p>
    </div>
  )
}

