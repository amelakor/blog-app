import Image from 'next/image'
import Hero from 'public/hero.png'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.description}>Turning your idea into Reality</p>
        <button className={styles.button}>Get Started</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Hero" className={styles.img}/>
      </div>
    </div>
  )
}
