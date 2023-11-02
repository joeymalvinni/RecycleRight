import { Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const open = Open_Sans({ subsets: ['latin'] })

export const metadata = {
    title: 'RecycleRight',
    description: 'Inspiring eco-consciousness in students through waste classification and educational resources',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${open.className} overflow-hidden pt-24`}>
        <Header></Header>
        {children}
        </body>
    </html>
  )
}
