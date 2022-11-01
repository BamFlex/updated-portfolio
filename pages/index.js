import Head from 'next/head'
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ace Digital Solutions</title>
        <meta name="description" content="Get the best website and digital services from Ace Digital Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar/>
        <Main/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  )
}
