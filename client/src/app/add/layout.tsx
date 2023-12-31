import { Button } from '@/lib/ui/button'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Add Word - Ich lerne Deutsch',
  description: 'Generated by German Learner Developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="relative">
      <Button
        className="absolute lg:top-8 lg:left-8 top-4 left-4"
        variant="outline"
        size="icon"
      >
        <Link href="/">
          <ArrowLeft />
        </Link>
      </Button>
      {children}
    </section>
  )
}
