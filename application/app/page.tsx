// application/page.tsx
'use client'

import Link from 'next/link'

export default function Home() {
    return (
        <main style={{ padding: '2rem' }}>
            <h1>メニュー</h1>
            <ul>
                <li>
                    <Link href="/todo">✅ Todoリスト</Link>
                </li>
            </ul>
        </main>
    )
}