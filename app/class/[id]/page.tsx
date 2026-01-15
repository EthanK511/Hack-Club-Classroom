'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type TabType = 'stream' | 'classwork' | 'people'

interface Assignment {
  id: string
  title: string
  description: string
  dueDate: string
  points: number
  type: 'assignment' | 'material'
}

interface Announcement {
  id: string
  author: string
  content: string
  timestamp: string
}

interface Student {
  id: string
  name: string
  email: string
  avatar: string
}

export default function ClassPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState<TabType>('stream')
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false)
  const [showAssignmentModal, setShowAssignmentModal] = useState(false)
  const [announcementText, setAnnouncementText] = useState('')

  // Mock data
  const classInfo = {
    name: 'Web Development',
    section: 'Section A',
    subject: 'Computer Science',
    room: 'Room 101',
    teacher: 'Ms. Johnson',
    color: 'bg-hack-red',
    code: 'abc123'
  }

  const announcements: Announcement[] = [
    {
      id: '1',
      author: 'Ms. Johnson',
      content: 'Welcome to Web Development! Looking forward to an exciting semester with all of you. 🚀',
      timestamp: '2 days ago'
    },
    {
      id: '2',
      author: 'Ms. Johnson',
      content: 'Reminder: Assignment 1 is due this Friday. Don\'t forget to test your code before submitting!',
      timestamp: '1 day ago'
    }
  ]

  const assignments: Assignment[] = [
    {
      id: '1',
      title: 'Build a Personal Portfolio',
      description: 'Create a responsive portfolio website using HTML, CSS, and JavaScript',
      dueDate: 'Jan 20, 11:59 PM',
      points: 100,
      type: 'assignment'
    },
    {
      id: '2',
      title: 'HTML & CSS Basics',
      description: 'Study materials for HTML and CSS fundamentals',
      dueDate: 'No due date',
      points: 0,
      type: 'material'
    },
    {
      id: '3',
      title: 'JavaScript Quiz',
      description: 'Test your knowledge of JavaScript basics',
      dueDate: 'Jan 25, 11:59 PM',
      points: 50,
      type: 'assignment'
    }
  ]

  const students: Student[] = [
    { id: '1', name: 'Alice Chen', email: 'alice@example.com', avatar: 'AC' },
    { id: '2', name: 'Bob Smith', email: 'bob@example.com', avatar: 'BS' },
    { id: '3', name: 'Carol Davis', email: 'carol@example.com', avatar: 'CD' },
    { id: '4', name: 'David Lee', email: 'david@example.com', avatar: 'DL' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-hack-dark border-b-4 border-hack-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/dashboard" className="text-2xl font-bold text-white">
                🎓 Hack Club Classroom
              </Link>
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

      {/* Class Header */}
      <div className={`${classInfo.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/dashboard" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to Classes
          </Link>
          <h1 className="text-4xl font-bold mb-2">{classInfo.name}</h1>
          <p className="text-xl text-white/90">{classInfo.section}</p>
          <div className="mt-4 flex items-center space-x-6 text-white/90">
            <span>👤 {classInfo.teacher}</span>
            <span>🚪 {classInfo.room}</span>
            <span>🔑 Code: {classInfo.code}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('stream')}
              className={`py-4 px-2 border-b-4 font-bold transition-colors ${
                activeTab === 'stream'
                  ? 'border-hack-red text-hack-red'
                  : 'border-transparent text-gray-600 hover:text-hack-red'
              }`}
            >
              Stream
            </button>
            <button
              onClick={() => setActiveTab('classwork')}
              className={`py-4 px-2 border-b-4 font-bold transition-colors ${
                activeTab === 'classwork'
                  ? 'border-hack-red text-hack-red'
                  : 'border-transparent text-gray-600 hover:text-hack-red'
              }`}
            >
              Classwork
            </button>
            <button
              onClick={() => setActiveTab('people')}
              className={`py-4 px-2 border-b-4 font-bold transition-colors ${
                activeTab === 'people'
                  ? 'border-hack-red text-hack-red'
                  : 'border-transparent text-gray-600 hover:text-hack-red'
              }`}
            >
              People
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stream Tab */}
        {activeTab === 'stream' && (
          <div className="space-y-6">
            {/* Announcement Input */}
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200">
              <button
                onClick={() => setShowAnnouncementModal(true)}
                className="w-full text-left px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-hack-red transition-colors text-gray-500"
              >
                Share something with your class...
              </button>
            </div>

            {/* Announcements */}
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hack-blue rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    MJ
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-hack-dark">{announcement.author}</h3>
                        <p className="text-sm text-gray-500">{announcement.timestamp}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-700">{announcement.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Classwork Tab */}
        {activeTab === 'classwork' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-hack-dark">Assignments</h2>
              <button
                onClick={() => setShowAssignmentModal(true)}
                className="bg-hack-red text-white px-6 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors"
              >
                + Create
              </button>
            </div>

            {assignments.map((assignment) => (
              <Link key={assignment.id} href={`/class/${params.id}/assignment/${assignment.id}`}>
                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200 hover:border-hack-red transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                        assignment.type === 'assignment' ? 'bg-hack-red/10' : 'bg-hack-blue/10'
                      }`}>
                        {assignment.type === 'assignment' ? '📝' : '📚'}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-hack-dark">{assignment.title}</h3>
                        <p className="text-gray-600 mt-1">{assignment.description}</p>
                        <div className="flex items-center space-x-4 mt-3 text-sm">
                          <span className="text-gray-500">Due: {assignment.dueDate}</span>
                          {assignment.points > 0 && (
                            <span className="text-gray-500">{assignment.points} points</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* People Tab */}
        {activeTab === 'people' && (
          <div className="space-y-6">
            {/* Teacher Section */}
            <div>
              <h2 className="text-2xl font-bold text-hack-dark mb-4">Teacher</h2>
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-hack-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                    MJ
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-hack-dark">{classInfo.teacher}</h3>
                    <p className="text-gray-600">teacher@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Students Section */}
            <div>
              <h2 className="text-2xl font-bold text-hack-dark mb-4">Students ({students.length})</h2>
              <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 divide-y-2 divide-gray-200">
                {students.map((student) => (
                  <div key={student.id} className="p-4 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-hack-blue rounded-full flex items-center justify-center text-white font-bold">
                      {student.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-hack-dark">{student.name}</h3>
                      <p className="text-gray-600 text-sm">{student.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Announcement Modal */}
      {showAnnouncementModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full border-4 border-hack-dark">
            <h2 className="text-2xl font-bold mb-6 text-hack-dark">Post Announcement</h2>
            <textarea
              value={announcementText}
              onChange={(e) => setAnnouncementText(e.target.value)}
              placeholder="Share something with your class..."
              rows={6}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none mb-6"
            />
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setShowAnnouncementModal(false)
                  setAnnouncementText('')
                }}
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle post announcement
                  setShowAnnouncementModal(false)
                  setAnnouncementText('')
                }}
                className="flex-1 bg-hack-red text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Assignment Modal */}
      {showAssignmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full border-4 border-hack-dark max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 text-hack-dark">Create Assignment</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-hack-dark mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Assignment title"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-hack-dark mb-2">Instructions</label>
                <textarea
                  placeholder="Describe the assignment..."
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-hack-dark mb-2">Points</label>
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-hack-dark mb-2">Due Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setShowAssignmentModal(false)}
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle create assignment
                  setShowAssignmentModal(false)
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
