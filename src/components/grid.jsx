import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { title } from 'motion/react-client'
import { index } from '../../data'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid className='flex-2 mt-50 fadeInUp-animation'>
        {
        index.map((item) => (
          <BentoGridItem
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          className={item.className} 
          img= {item.img}
          titleClassName={item.titleClassName}
          imgClassName ={item.imgClassName}
          spareImg={item.spareImg}
          />
          
        ))}
      </BentoGrid>
    </section>
  )
  
}

export default Grid
