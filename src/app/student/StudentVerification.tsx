'use client'

import { useState } from 'react'
import { Search, ShieldCheck, Download, Eye, AlertCircle } from 'lucide-react'

// Mock Data
const MOCK_STUDENT = {
  id: '300014',
  name: 'Jayhan Gurung',
  course: 'Basic Spoken English',
  status: 'Verified',
  hasCertificate: true,
}

export function StudentVerification() {
  const [studentId, setStudentId] = useState('')
  const [searched, setSearched] = useState(false)
  const [result, setResult] = useState<typeof MOCK_STUDENT | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!studentId.trim()) return

    setSearched(true)
    if (studentId.trim() === MOCK_STUDENT.id) {
      setResult(MOCK_STUDENT)
    } else {
      setResult(null)
    }
  }

  return (
    <div className="w-full">
      {/* Search Form */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-ts-indigo/5 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-extrabold text-ts-navy mb-2">Verify Student</h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your Student ID below to verify your details and access your certificate.
        </p>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter Student ID (e.g., 300014)"
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-ts-offwhite border border-transparent text-ts-navy placeholder:text-gray-400 text-sm focus:outline-none focus:border-ts-indigo focus:bg-white transition-colors"
            />
          </div>
          <button
            type="submit"
            className="h-12 px-8 rounded-xl bg-[#0038b8] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#002d94] transition-colors shadow-lg shadow-[#0038b8]/20 whitespace-nowrap"
          >
            Verify
          </button>
        </form>
      </div>

      {/* Results */}
      {searched && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {result ? (
            <div className="bg-white rounded-2xl border border-green-100 shadow-xl shadow-green-900/5 overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100 p-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-green-900 text-lg">Student Information Card</h3>
                  <p className="text-green-700 text-sm">Record verified successfully</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Student ID</p>
                    <p className="font-bold text-ts-navy">{result.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Student Name</p>
                    <p className="font-bold text-ts-navy">{result.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Course</p>
                    <p className="font-bold text-ts-navy">{result.course}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Status</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {result.status}
                    </span>
                  </div>
                </div>

                {result.hasCertificate && (
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-bold text-ts-navy mb-4 flex items-center gap-2">
                      Certificate Available
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      <button 
                        onClick={() => alert('View Certificate functionality coming soon!')}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border-2 border-[#0038b8] text-[#0038b8] font-bold text-sm hover:bg-blue-50 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View Certificate
                      </button>
                      <button 
                        onClick={() => alert('Download Certificate functionality coming soon!')}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#0038b8] text-white font-bold text-sm hover:bg-[#002d94] transition-colors shadow-lg shadow-[#0038b8]/20"
                      >
                        <Download className="w-4 h-4" />
                        Download Certificate
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center flex flex-col items-center">
              <AlertCircle className="w-12 h-12 text-red-400 mb-3" />
              <h3 className="font-bold text-red-900 text-lg mb-1">Student Not Found</h3>
              <p className="text-red-700 text-sm max-w-sm">
                We couldn't find a student record matching ID "{studentId}". Please check the ID and try again.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
