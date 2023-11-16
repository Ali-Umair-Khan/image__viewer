import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Profile from '../components/photo03.jsx'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile/>
    </main>
  )
}
