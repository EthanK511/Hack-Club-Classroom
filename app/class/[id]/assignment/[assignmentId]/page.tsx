'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Submission {
  id: string
  student: string
  submittedAt: string
  status: 'submitted' | 'graded' | 'late'
  grade?: number
}

export default function AssignmentPage() {
  const params = useParams()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [comment, setComment] = useState('')
  const [isTeacher] = useState(false) // Toggle for demo

  // Mock data
  const assignment = {
    id: params.assignmentId,
    title: 'Build a Personal Portfolio',
    description: 'Create a responsive portfolio website using HTML, CSS, and JavaScript. Your portfolio should include:\n\n• An about section\n• A projects section showcasing at least 3 projects\n• A contact form\n• Responsive design that works on mobile and desktop\n\nBonus points for creative design and smooth animations!',
    dueDate: 'January 20, 2026 at 11:59 PM',
    points: 100,
    attachments: ['portfolio-rubric.pdf', 'example-portfolio.zip']
  }

  const submissions: Submission[] = [
    { id: '1', student: 'Alice Chen', submittedAt: '2 hours ago', status: 'submitted' },
    { id: '2', student: 'Bob Smith', submittedAt: '1 day ago', status: 'graded', grade: 95 },
    { id: '3', student: 'Carol Davis', submittedAt: '3 days ago', status: 'graded', grade: 88 },
  ]

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    // Handle submission
    alert('Assignment submitted successfully!')
    setSelectedFile(null)
    setComment('')
  }

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href={`/class/${params.id}`} className="text-hack-red hover:text-red-600 font-bold mb-6 inline-block">
          ← Back to Class
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Assignment Details */}
            <div className="bg-white rounded-lg shadow-md p-8 border-2 border-gray-200">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-hack-dark mb-2">{assignment.title}</h1>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span>📅 Due: {assignment.dueDate}</span>
                    <span>⭐ {assignment.points} points</span>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-bold text-hack-dark mb-3">Instructions</h3>
                <div className="text-gray-700 whitespace-pre-line">{assignment.description}</div>
              </div>

              {assignment.attachments.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-hack-dark mb-3">Attachments</h3>
                  <div className="space-y-2">
                    {assignment.attachments.map((file, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border-2 border-gray-200">
                        <span className="text-2xl">📎</span>
                        <span className="text-hack-dark font-medium">{file}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Teacher View - Submissions */}
            {isTeacher && (
              <div className="bg-white rounded-lg shadow-md p-8 border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-hack-dark mb-6">Student Submissions</h2>
                <div className="space-y-4">
                  {submissions.map((submission) => (
                    <div key={submission.id} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-hack-red transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-hack-blue rounded-full flex items-center justify-center text-white font-bold">
                          {submission.student.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-bold text-hack-dark">{submission.student}</h3>
                          <p className="text-sm text-gray-600">Submitted {submission.submittedAt}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {submission.status === 'graded' && submission.grade !== undefined && (
                          <span className="text-hack-green font-bold">{submission.grade}/{assignment.points}</span>
                        )}
                        <button className="bg-hack-red text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Student Submission */}
          {!isTeacher && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200 sticky top-8">
                <h2 className="text-xl font-bold text-hack-dark mb-6">Your Work</h2>

                <div className="space-y-6">
                  {/* Status */}
                  <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-yellow-800">
                      <span className="text-2xl">⏰</span>
                      <span className="font-bold">Not submitted</span>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-bold text-hack-dark mb-3">
                      Add Attachment
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-hack-red transition-colors cursor-pointer">
                      <input
                        type="file"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <div className="text-4xl mb-2">📁</div>
                        <p className="text-gray-600 font-medium">
                          {selectedFile ? selectedFile.name : 'Click to upload file'}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          or drag and drop
                        </p>
                      </label>
                    </div>
                  </div>

                  {/* Private Comment */}
                  <div>
                    <label className="block text-sm font-bold text-hack-dark mb-3">
                      Private Comment (Optional)
                    </label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Add a comment for your teacher..."
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hack-red focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedFile}
                    className={`w-full py-3 rounded-lg font-bold transition-colors ${
                      selectedFile
                        ? 'bg-hack-red text-white hover:bg-red-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Turn In
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
