'use client';
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const logoutHandler = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <div className={styles.container}>
        <Link href="/">Home</Link>
          <div className={styles.links}>
            <Link className={styles.link}  href="/blog">Blog</Link>
            <Link className={styles.link}  href="/about">About</Link>
            <Link className={styles.link}  href="/contact">Contact</Link>
            <Link className={styles.link}  href="/portfolio">Portfolio</Link>
            <button className={styles.logout} onClick={logoutHandler}>Logout</button>
          </div>
    </div>
  )
}

export default Navbar