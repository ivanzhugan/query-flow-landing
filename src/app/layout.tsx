import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://query-flow-landing-get7.vercel.app'),
  title: 'QueryFlow - Stop Writing SQL, Start Asking Questions',
  description: 'Stop googling syntax. Stop debugging JOINs. Just ask what you need in plain English and get perfect SQL in seconds.',
  keywords: ['SQL', 'database', 'query', 'AI', 'data analysis', 'analytics'],
  authors: [{ name: 'QueryFlow Team' }],
  openGraph: {
    title: 'QueryFlow - Stop Writing SQL, Start Asking Questions',
    description: 'Transform natural language into perfect SQL queries instantly. Join 500+ data analysts who are already 10x more productive.',
    type: 'website',
    url: 'https://query-flow-landing-get7.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QueryFlow - Stop Writing SQL, Start Asking Questions',
    description: 'Transform natural language into perfect SQL queries instantly.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Animated Background */}
        <div className="bg-animation">
          <div className="gradient-orb orb1"></div>
          <div className="gradient-orb orb2"></div>
          <div className="gradient-orb orb3"></div>
        </div>
        {children}
      </body>
    </html>
  )
}