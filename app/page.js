"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-white text-gray-900">
      <header className="w-full flex justify-start items-center p-6 shadow bg-white fixed top-0 left-0">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple text-transparent bg-clip-text"
        >
          Rock-Studio Nsl
        </Link>
      </header>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold mb-12 text-center bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple text-transparent bg-clip-text leading-tight pb-2 mt-20"
      >
        Выберите студию
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link 
          href="/studio/studio_1" 
          className="p-8 rounded-2xl shadow bg-gradient-to-r from-brand-green via-brand-teal to-brand-purple text-white font-semibold text-center hover:scale-105 transition"
        >
          Студия 1
        </Link>
        <Link 
          href="/studio/studio_2" 
          className="p-8 rounded-2xl shadow bg-gradient-to-l from-brand-green via-brand-blue to-brand-purple text-white font-semibold text-center hover:scale-105 transition"
        >
          Студия 2
        </Link>
      </div>
    </main>
  )
}