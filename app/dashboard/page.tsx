'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Class {
  id: string
  name: string
  section: string
  subject: string
  room: string
  teacher: string
  color: string
}

// Mock data
const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Web Development',
    section: 'Section A',
    subject: 'Computer Science',
    room: 'Room 101',
    teacher: 'Ms. Johnson',
    color: 'bg-hack-red'
  },
  {
    id: '2',
    name: 'Python Programming',
    section: 'Section B',
    subject: 'Programming',
    room: 'Room 203',
    teacher: 'Mr. Smith',
    color: 'bg-hack-blue'
  },
  {
    id: '3',
    name: 'Mobile App Development',
    section: 'Section C',
    subject: 'Computer Science',
    room: 'Room 305',
    teacher: 'Dr. Lee',
    color: 'bg-hack-green'
  }
]

export default function DashboardPage() {
  const [classes, setClasses] = useState<Class[]>(mockClasses)
  const [showJoinModal, setShowJoinModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [classCode, setClassCode] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-hack-dark border-b-4 border-hack-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-white">
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
              <button className="text-white hover:text-hack-red transition-colors">
                🔔
              </button>
              <div className="w-10 h-10 bg-hack-red rounded-full flex items-center justify-center text-white font-bold">
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
          <h1 className="text-3xl font-bold text-hack-dark">My Classes</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowJoinModal(true)}
              className="bg-white border-2 border-hack-red text-hack-red px-6 py-2 rounded-lg font-bold hover:bg-hack-red hover:text-white transition-colors"
            >
              + Join Class
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-hack-red text-white px-6 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors"
            >
              + Create Class
            </button>
          </div>
        </div>

        {/* Classes Grid */}
        {classes.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 mb-4">No classes yet</p>
            <p className="text-gray-400 mb-8">Join a class or create your own to get started!</p>
            <button
              onClick={() => setShowJoinModal(true)}
              className="bg-hack-red text-white px-8 py-3 rounded-lg font-bold hover:bg-red-600 transition-colors"
            >
              Join Your First Class
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <Link key={cls.id} href={`/class/${cls.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-hack-red cursor-pointer">
                  <div className={`${cls.color} h-32 p-6 text-white`}>
                    <h3 className="text-2xl font-bold mb-2">{cls.name}</h3>
                    <p className="text-white/90">{cls.section}</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <span className="font-bold mr-2">📚</span>
                        <span>{cls.subject}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="font-bold mr-2">👤</span>
                        <span>{cls.teacher}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
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
          <div className="bg-white rounded-2xl p-8 max-w-md w-full border-4 border-hack-dark">
            <h2 className="text-2xl font-bold mb-4 text-hack-dark">Join a Class</h2>
            <p className="text-gray-600 mb-6">
              Ask your teacher for the class code and enter it below
            </p>
            <input
              type="text"
              value={classCode}
              onChange={(e) => setClassCode(e.target.value)}
              placeholder="Enter class code"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none mb-6"
            />
            <div className="flex space-x-4">
              <button
                onClick={() => setShowJoinModal(false)}
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle join class
                  setShowJoinModal(false)
                  setClassCode('')
                }}
                className="flex-1 bg-hack-red text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors"
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
          <div className="bg-white rounded-2xl p-8 max-w-md w-full border-4 border-hack-dark">
            <h2 className="text-2xl font-bold mb-6 text-hack-dark">Create a Class</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-hack-dark mb-2">
                  Class Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Web Development"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-hack-dark mb-2">
                  Section
                </label>
                <input
                  type="text"
                  placeholder="e.g., Section A"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-hack-dark mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g., Computer Science"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-hack-dark mb-2">
                  Room
                </label>
                <input
                  type="text"
                  placeholder="e.g., Room 101"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none"
                />
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle create class
                  setShowCreateModal(false)
                }}
                className="flex-1 bg-hack-red text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors"
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
