import React, { useState } from 'react'
import Loader from './components/Loader';
import Hero from './components/Hero';
import { BentoGrid } from './components/ui/BentoGrid';
import Projects from './components/Projects';
import Grid from './components/grid';
import Contact from './components/Contact';

const App = () => {
  const [isLoading, setisLoading] = useState(true);
  return (
    <div className='bg-background min-h-screen flex flex-col'>
    {isLoading && (<Loader onFinish={() => 
      setisLoading(false)} />
    )}
    {!isLoading && (
      <main className='flex-1'>
        <Hero />
        <Grid />
        <Projects />
        <Contact />
      </main>
    )}
    </div>
  )
}

export default App
