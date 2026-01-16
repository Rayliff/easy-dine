"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
    { name: 'Menu', path: '/Menu' },
    { name: 'Booking', path: '/Booking' },
    { name: 'MyBooking', path: '/MyBooking' },
  ];

  return (
     <nav className="w-full bg-white shadow p-4 flex gap-6">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`${
            pathname === item.path ? "font-semibold text-blue-600" : "text-gray-600"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar