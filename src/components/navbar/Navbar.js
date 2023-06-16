import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href="/">Home</Link>
        <div>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/portfolio">Portfolio</Link>
        </div>
    </div>
  )
}

export default Navbar