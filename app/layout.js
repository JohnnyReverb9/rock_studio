import './../styles/globals.css'

export const metadata = {
  title: 'Rock Studio Nsl',
  description: 'Современная студия звукозаписи — услуги, галерея, контакты',
  icons: {
    icon: '/logo.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      	<body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}