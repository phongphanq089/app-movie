import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/globals.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Header from '@/components/shared/header/Header'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import Footer from '@/components/shared/footer/Footer'
import LoaderTop from '@/components/shared/LoaderTop'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ibm-plex-serif',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={roboto.className} suppressHydrationWarning>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='min-h-screen'>{children}</main>
          <Footer />
        </ThemeProvider>
        <LoaderTop />
      </body>
    </html>
  )
}
