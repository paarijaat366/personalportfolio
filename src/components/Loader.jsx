import React from 'react'
import gsap from 'gsap'
import { useRef, useEffect } from 'react';





const Loader = ({onFinish}) => {

  const loaderRef=useRef(null);
  const barFillRef = useRef(null);
  
  useEffect(() => {
    if(!loaderRef.current || !barFillRef.current)
      return;

    const ctx =gsap.context(() => {
      gsap.set(barFillRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });
      gsap.set(loaderRef.current, {
        opacity:1,
      });
      const tl=gsap.timeline({
        onComplete:() => {
          setTimeout(onFinish, 100);
        },
      });
      tl.to(barFillRef.current, {
        scaleX: 1,
        duration: 2.2,
        ease: "Power1.out",
      });
      tl.to(loaderRef.current, {
        opacity:0,
        duration: 0.8,
        ease: "power1.out"
      });
    });
    return () => ctx.revert();
  }, [onFinish]);
  return (
    <div ref={loaderRef}
    className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div>
        <img src="/icon.jpeg" alt="" className='w-50 h-50 ml-10'/>
        <div 
        className="w-64 h-1 bg-white/20 overflow-hidden" id='bar-container'>
          <div ref={barFillRef} 
          className="h-full bg-blue-500" id='fill'></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
