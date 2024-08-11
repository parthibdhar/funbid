'use client'
import React from 'react'

const SeasonalSkeleton = () => {
  return (
    <div className="relative w-full mt-2 ">
        <div className="h-10 w-48 bg-gray-200 animate-pulse my-3 rounded"></div>
        <div className="w-full xl:h-96 bg-dry lg:h-64 h-48 flex items-center justify-center">
          {/* Skeleton structure */}
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
        </div>
      </div>
  )
}

export default SeasonalSkeleton