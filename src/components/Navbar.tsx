'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">UTA Solution</h1>
      <div className="space-x-4">
        <Link href="/">Trang chủ</Link>
        <Link href="/about">Giới thiệu</Link>
        <Link href="/services">Dịch vụ</Link>
        <Link href="/contact">Liên hệ</Link>
      </div>
    </nav>
  );
}
