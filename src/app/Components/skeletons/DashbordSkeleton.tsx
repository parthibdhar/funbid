'use client'
import React from 'react'
import SeasonalSkeleton from './SeasonalSkeleton'
import TrendingSkeleton from './TrendingSkeleton'
import CatagoriesSkeleton from './CatagoriesSkeleton'
import Layout from "../../Layout/Layout/Layout";

const DashbordSkeleton = () => {
  return (
    <Layout>
    <div className="container mx-auto min-h-screen px-2 my-6">
    <SeasonalSkeleton/>
    <TrendingSkeleton/>
    <CatagoriesSkeleton/>
    {/* <p> {profile?.email} {profile?.createdAt} {profile?.name} {profile?.phone} {profile?.role} {profile?.balance}   </p> */}
    </div>
    </Layout>
  )
}

export default DashbordSkeleton