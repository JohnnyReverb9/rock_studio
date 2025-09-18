"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function StudioPage({ params }) {
  const { studio } = params

  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <header className="flex justify-between items-center p-6 shadow bg-white">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple text-transparent bg-clip-text"
        >
          Rock-Studio Nsl
        </Link>
        <nav className="flex gap-6 text-gray-700">
          <a href="#services" className="hover:text-brand-green transition">Услуги</a>
          <a href="#gallery" className="hover:text-brand-blue transition">Галерея</a>
          <a href="#contacts" className="hover:text-brand-purple transition">Контакты</a>
        </nav>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-white to-gray-50"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple text-transparent bg-clip-text leading-tight pb-1">
          Студия {studio}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-700">
          Современная студия звукозаписи. Качество и комфорт.
        </p>
      </motion.section>

      <section id="services" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-200">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-brand-green via-brand-teal to-brand-purple text-transparent bg-clip-text">
          Услуги
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl shadow bg-white hover:shadow-xl transition">Запись вокала</div>
          <div className="p-6 rounded-2xl shadow bg-white hover:shadow-xl transition">Сведение и мастеринг</div>
          <div className="p-6 rounded-2xl shadow bg-white hover:shadow-xl transition">Аренда студии</div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-[url('/background_blur.jpg')] bg-cover bg-center bg-fixed relative">
        <style jsx>{`
          #gallery::before,
          #gallery::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            height: 100px;
            pointer-events: none;
          }
          #gallery::before {
            top: 0;
            background: linear-gradient(to bottom, #e5e7eb, transparent);
          }
          #gallery::after {
            bottom: 0;
            background: linear-gradient(to top, #e5e7eb, transparent);
          }
        `}</style>
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple text-transparent bg-clip-text">
          Галерея
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow hover:scale-105 hover:shadow-lg transition">
            <Image src="/room_1.jpg" alt="Студия 1" width={600} height={400} className="object-cover w-full h-48" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow hover:scale-105 hover:shadow-lg transition">
            <Image src="/room_2.jpg" alt="Студия 2" width={600} height={400} className="object-cover w-full h-48" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow hover:scale-105 hover:shadow-lg transition">
            <Image src="/room_3.jpg" alt="Студия 3" width={600} height={400} className="object-cover w-full h-48" />
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-gradient-to-b text-center from-gray-200 to-gray-80">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-brand-green via-brand-teal to-brand-purple text-transparent bg-clip-text">
          Контакты
        </h2>
        <div className="mb-6">📞 +7 (999) 123-45-67</div>
        <div className="mb-6">✉️ info@studio.ru</div>

        <div className="flex justify-center gap-6 mb-12 text-gray-700">
          <a href="https://vk.com" target="_blank" rel="noopener" className="hover:text-brand-green transition">VK</a>
          <a href="https://t.me" target="_blank" rel="noopener" className="hover:text-brand-blue transition">Telegram</a>
          <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-brand-purple transition">Instagram</a>
        </div>

        <button className="px-8 py-3 rounded-xl text-white font-bold bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple hover:opacity-90 transition">
          Забронировать
        </button>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500 bg-gradient-to-b from-gray-80 to-white">
        © 2025 Rock-Studio Nsl
      </footer>
    </div>
  )
}