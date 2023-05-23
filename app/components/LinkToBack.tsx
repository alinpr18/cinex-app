'use client'

import { useRouter } from 'next/navigation'

export const LinkToBack = ({ ...props }): JSX.Element => {
  const router = useRouter()
  return (
    <button onClick={() => router.back()} {...props}>⬅️</button>
  )
}
