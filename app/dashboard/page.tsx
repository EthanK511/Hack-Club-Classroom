'use client'

import { useState } from 'react'
import Link from 'next/link'
import DarkModeToggle from '@/components/DarkModeToggle'

interface Class {
  id: string
  name: string
  section: string
  subject: string
  room: string
  teacher: string
  color: string
}

export default function DashboardPage() {
  const [classes, setClasses] = useState<Class[]>([])
  const [showJoinModal, setShowJoinModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [classCode, setClassCode] = useState('')
  const [newClassName, setNewClassName] = useState('')
  const [newClassSection, setNewClassSection] = useState('')
  const [newClassSubject, setNewClassSubject] = useState('')
  const [newClassRoom, setNewClassRoom] = useState('')

  const handleCreateClass = () => {
    if (newClassName && newClassSection) {
      const colors = ['bg-hack-red', 'bg-hack-blue', 'bg-hack-green', 'bg-hack-yellow']
      // Use class count to cycle through colors predictably
      const colorIndex = classes.length % colors.length
      const assignedColor = colors[colorIndex]
      
      const newClass: Class = {
        id: Date.now().toString(),
        name: newClassName,
        section: newClassSection,
        subject: newClassSubject || 'General',
        room: newClassRoom || 'Online',
        teacher: 'You',
        color: assignedColor
      }
      
      setClasses([...classes, newClass])
      setShowCreateModal(false)
      setNewClassName('')
      setNewClassSection('')
      setNewClassSubject('')
      setNewClassRoom('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-3xl font-black bg-gradient-to-r from-hack-red to-pink-600 bg-clip-text text-transparent hover:from-pink-600 hover:to-hack-red transition-all">
                🎓 Hack Club Classroom
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/dashboard" className="text-gray-900 dark:text-white hover:text-hack-red transition-colors font-bold text-lg">
                  Classes
                </Link>
                <Link href="/dashboard/calendar" className="text-gray-600 dark:text-gray-400 hover:text-hack-red transition-colors text-lg">
                  Calendar
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <DarkModeToggle />
              <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-2xl">
                🔔
              </button>
              <div className="w-12 h-12 bg-gradient-to-br from-hack-red to-pink-600 rounded-full flex items-center justify-center text-white font-black cursor-pointer hover:shadow-lg transition-all text-lg">
                JD
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-2">
              My Classes
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {classes.length} {classes.length === 1 ? 'class' : 'classes'}
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowJoinModal(true)}
              className="bg-white dark:bg-gray-800 border-3 border-gray-900 dark:border-hack-red text-gray-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 hover:border-hack-red transition-all shadow-lg"
            >
              + Join Class
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-gradient-to-r from-hack-red to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all shadow-lg"
            >
              + Create Class
            </button>
          </div>
        </div>

        {/* Classes Grid */}
        {classes.length === 0 ? (
          <div className="text-center py-32">
            <div className="text-8xl mb-8">🎓</div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">No classes yet</h2>
            <p className="text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Join a class with a code from your teacher or create your own class to get started!
            </p>
            <button
              onClick={() => setShowJoinModal(true)}
              className="bg-gradient-to-r from-hack-red to-pink-600 text-white px-12 py-5 rounded-full font-black text-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
            >
              Join Your First Class →
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((cls) => (
              <Link key={cls.id} href={`/class/${cls.id}`}>
                <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-transparent cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cls.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className={`relative h-40 bg-gradient-to-br ${cls.color} p-8 text-white`}>
                    <h3 className="text-3xl font-black mb-2">{cls.name}</h3>
                    <p className="text-white/90 text-lg font-medium">{cls.section}</p>
                  </div>
                  <div className="relative p-8">
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-700 dark:text-gray-300 text-lg">
                        <span className="text-2xl mr-3">📚</span>
                        <span className="font-medium">{cls.subject}</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-300 text-lg">
                        <span className="text-2xl mr-3">👤</span>
                        <span className="font-medium">{cls.teacher}</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-300 text-lg">
                        <span className="text-2xl mr-3">🚪</span>
                        <span className="font-medium">{cls.room}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Join Class Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 max-w-md w-full shadow-2xl border-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Join a Class</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Ask your teacher for the class code
            </p>
            <input
              type="text"
              value={classCode}
              onChange={(e) => setClassCode(e.target.value)}
              placeholder="e.g., abc123"
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:border-hack-red focus:ring-4 focus:ring-hack-red/20 focus:outline-none mb-8 transition-all"
            />
            <div className="flex space-x-4">
              <button
                onClick={() => setShowJoinModal(false)}
                className="flex-1 px-6 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all text-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle join class
                  setShowJoinModal(false)
                  setClassCode('')
                }}
                className="flex-1 bg-gradient-to-r from-hack-red to-pink-600 text-white px-6 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all shadow-lg text-lg"
              >
                Join Class
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Class Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 max-w-md w-full shadow-2xl border-2 border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-y-auto">
            <h2 className="text-3xl font-black mb-8 text-gray-900 dark:text-white">Create a Class</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-base font-bold text-gray-900 dark:text-white mb-3">
                  Class Name *
                </label>
                <input
                  type="text"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  placeholder="e.g., Web Development"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:border-hack-red focus:ring-4 focus:ring-hack-red/20 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-base font-bold text-gray-900 dark:text-white mb-3">
                  Section *
                </label>
                <input
                  type="text"
                  value={newClassSection}
                  onChange={(e) => setNewClassSection(e.target.value)}
                  placeholder="e.g., Section A"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:border-hack-red focus:ring-4 focus:ring-hack-red/20 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-base font-bold text-gray-900 dark:text-white mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  value={newClassSubject}
                  onChange={(e) => setNewClassSubject(e.target.value)}
                  placeholder="e.g., Computer Science"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:border-hack-red focus:ring-4 focus:ring-hack-red/20 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-base font-bold text-gray-900 dark:text-white mb-3">
                  Room
                </label>
                <input
                  type="text"
                  value={newClassRoom}
                  onChange={(e) => setNewClassRoom(e.target.value)}
                  placeholder="e.g., Room 101"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-2xl focus:border-hack-red focus:ring-4 focus:ring-hack-red/20 focus:outline-none transition-all"
                />
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-6 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all text-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateClass}
                disabled={!newClassName || !newClassSection}
                className={`flex-1 px-6 py-4 rounded-full font-bold transition-all shadow-lg text-lg ${
                  newClassName && newClassSection
                    ? 'bg-gradient-to-r from-hack-red to-pink-600 text-white hover:shadow-xl hover:scale-105'
                    : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Create Class
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

