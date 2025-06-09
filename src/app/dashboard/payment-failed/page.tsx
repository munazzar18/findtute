import React from 'react'
import Link from 'next/link'
const PaymentFailedPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-md hover:shadow-xl">
        {/* Success Icon */}
        <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-red-200 rounded-full">
          <svg
            className="w-12 h-12 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="15"
              y1="9"
              x2="9"
              y2="15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="9"
              y1="9"
              x2="15"
              y2="15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Main Content */}
        <h1 className="mb-6 text-4xl font-extrabold text-red-600">
          Payment Failed!
        </h1>

        <p className="mb-8 text-xl text-gray-700">Something went wrong!</p>

        <div className="p-6 mb-8 rounded-lg bg-red-100">
          <p className="text-lg font-medium text-blue-700">
            <span className="mr-4">
              {' '}
              Please try again -{' '}
              <Link className="underline" href="/dashboard/payment-request">
                click here{' '}
              </Link>{' '}
            </span>
          </p>
        </div>

        {/* Contact Information */}
        <div className="pt-8 mt-8 border-t border-gray-100">
          <p className="text-lg text-gray-700">
            Have questions? Contact us at:
          </p>
          <Link
            href="mailto:info@findtute.com"
            className="inline-block mt-2 text-xl font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
          >
            info@findtute.com
          </Link>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12">
          <Link
            href="/dashboard"
            className="inline-block px-5 py-3 text-lg font-semibold text-white transition-colors duration-200 bg-red-400 rounded-sm hover:bg-red-600"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentFailedPage
