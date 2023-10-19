import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'

import { ModalProvider } from '@/providers/modal-provider'
import { ToasterProvider } from '@/providers/toast-provider'

import './globals.css'
import { Providers } from '@/providers/NextUIProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'CMS & Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" >
        <body className={inter.className}>
          <ToasterProvider/>
          <ModalProvider/>
            <Providers>
              {children}
            </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
