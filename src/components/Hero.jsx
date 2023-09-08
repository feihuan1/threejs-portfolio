import {motion} from 'framer-motion';

import { ComputersCanvas } from './canvas';
import { styles } from '../styles';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#915eff]' />
        <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Feihuan</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I love web development, 3D visuals, user <br className='sm:block hidden' /> interfaces and game development
          </p>
        </div>
      </div>
        <ComputersCanvas />

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-self-center items-start p-2 select-none'>
              <motion.dev 
              animate={{
                y:[0,24,0]
              }} 
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }} 
              className='w-3 h-3 rounded-full bg-secondary mb-1 '
               />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero