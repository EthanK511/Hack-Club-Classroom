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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="bg-hack-dark dark:bg-black border-b-4 border-hack-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-white hover:text-hack-red transition-colors">
                🎓 Hack Club Classroom
              </Link>
              <div className="flex space-x-4">
                <Link href="/dashboard" className="text-white hover:text-hack-red transition-colors font-bold">
                  Classes
                </Link>
                <Link href="/dashboard/calendar" className="text-gray-300 hover:text-hack-red transition-colors">
                  Calendar
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <DarkModeToggle />
              <button className="text-white hover:text-hack-red transition-colors text-xl">
                🔔
              </button>
              <div className="w-10 h-10 bg-hack-red rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:bg-red-600 transition-colors">
                JD
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-hack-dark dark:text-white">My Classes</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowJoinModal(true)}
              className="bg-white dark:bg-gray-800 border-2 border-hack-red text-hack-red dark:text-hack-red px-6 py-2 rounded-full font-bold hover:bg-hack-red hover:text-white dark:hover:bg-hack-red dark:hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              + Join Class
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-hack-red text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition-all shadow-md hover:shadow-lg"
            >
              + Create Class
            </button>
          </div>
        </div>

        {/* Classes Grid */}
        {classes.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🎓</div>
            <p className="text-2xl text-gray-500 dark:text-gray-400 mb-4">No classes yet</p>
            <p className="text-gray-400 dark:text-gray-500 mb-8">Join a class or create your own to get started!</p>
            <button
              onClick={() => setShowJoinModal(true)}
              className="bg-hack-red text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-all shadow-md hover:shadow-lg"
            >
              Join Your First Class
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <Link key={cls.id} href={`/class/${cls.id}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all border-2 border-gray-200 dark:border-gray-700 hover:border-hack-red dark:hover:border-hack-red cursor-pointer transform hover:scale-105">
                  <div className={`${cls.color} h-32 p-6 text-white`}>
                    <h3 className="text-2xl font-bold mb-2">{cls.name}</h3>
                    <p className="text-white/90">{cls.section}</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="font-bold mr-2">📚</span>
                        <span>{cls.subject}</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="font-bold mr-2">👤</span>
                        <span>{cls.teacher}</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="font-bold mr-2">🚪</span>
                        <span>{cls.room}</span>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md w-full border-4 border-hack-dark dark:border-hack-red shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-hack-dark dark:text-white">Join a Class</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ask your teacher for the class code and enter it below
            </p>
            <input
              type="text"
              value={classCode}
              onChange={(e) => setClassCode(e.target.value)}
              placeholder="Enter class code"
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-hack-red focus:outline-none mb-6"
            />
            <div className="flex space-x-4">
              <button
                onClick={() => setShowJoinModal(false)}
                className="flex-1 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle join class
                  setShowJoinModal(false)
                  setClassCode('')
                }}
                className="flex-1 bg-hack-red text-white px-4 py-2 rounded-full font-bold hover:bg-red-600 transition-colors shadow-md"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Class Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md w-full border-4 border-hack-dark dark:border-hack-red shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-hack-dark dark:text-white">Create a Class</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-hack-dark dark:text-white mb-2">
                  Class Name *
                </label>
                <input
                  type="text"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  placeholder="e.g., Web Development"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-hack-red focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-hack-dark dark:text-white mb-2">
                  Section *
                </label>
                <input
                  type="text"
                  value={newClassSection}
                  onChange={(e) => setNewClassSection(e.target.value)}
                  placeholder="e.g., Section A"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-hack-red focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-hack-dark dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={newClassSubject}
                  onChange={(e) => setNewClassSubject(e.target.value)}
                  placeholder="e.g., Computer Science"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-hack-red focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-hack-dark dark:text-white mb-2">
                  Room
                </label>
                <input
                  type="text"
                  value={newClassRoom}
                  onChange={(e) => setNewClassRoom(e.target.value)}
                  placeholder="e.g., Room 101"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-hack-red focus:outline-none"
                />
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateClass}
                disabled={!newClassName || !newClassSection}
                className={`flex-1 px-4 py-2 rounded-full font-bold transition-colors shadow-md ${
                  newClassName && newClassSection
                    ? 'bg-hack-red text-white hover:bg-red-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

