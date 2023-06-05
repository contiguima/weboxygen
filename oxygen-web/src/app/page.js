import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <h1>Bienvenido a Oxygen Token!</h1>
    </main>
  )
}
