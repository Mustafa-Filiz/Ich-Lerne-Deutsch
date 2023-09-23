import { Button } from '@/lib/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <Button>
        <Link href="/add">Add</Link>
      </Button>
      <Button>
        <Link href="/random">Training Random Words</Link>
      </Button>
    </main>
  )
}
