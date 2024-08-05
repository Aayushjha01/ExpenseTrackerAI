"use client";
import React from 'react';
import { useUser } from '@clerk/nextjs';

console.log(useUser); // Add this line to check if useUser is defined

function Dashboard() {
  const { user } = useUser();
  console.log(user,'hlo');

  return (
    <div className='p-8'>
      <h2 className='font-bold text-4xl'>Hi, {user?.fullName}</h2>
    </div>
  );
}

export default Dashboard;
