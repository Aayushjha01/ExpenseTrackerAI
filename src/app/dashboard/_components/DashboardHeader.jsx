import { UserButton, useClerk } from '@clerk/nextjs'
import React from 'react'

function DashboardHeader() {
  const { signOut } = useClerk()

  const handleSignOut = async () => {
    await signOut()
    window.location.href = '/'
  }
// yaha problem
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div>
          {/* Add your content here */}
        </div>
        <div>
            <UserButton onSignOut={handleSignOut} />
        </div>
    </div>
  )
}

export default DashboardHeader
