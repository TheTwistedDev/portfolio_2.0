import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Abdullah-Al-Suwaidi | Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Home />
        <About />
        <Skills/>
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default index
