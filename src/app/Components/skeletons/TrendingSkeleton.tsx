'use client'
import React from 'react'

const TrendingSkeleton = () => {
  return (
    <div className="my-16">
    {/* Skeleton for Titles */}
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-gray-400 animate-pulse rounded-full"></div>
      <div className="h-8 w-48 bg-gray-400 animate-pulse rounded"></div>
    </div>

    {/* Skeleton Grid for Products */}
    <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-10">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-lg animate-pulse">
          <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
          <div className="h-6 bg-gray-00 rounded mb-2"></div>
          <div className="h-6 bg-gray-00 rounded mb-2"></div>
          <div className="h-6 bg-gray-00 rounded mb-2"></div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TrendingSkeleton