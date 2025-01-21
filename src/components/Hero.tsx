import React from 'react';
import styles from "../styles/Hero.module.css";


const Hero: React.FC = () => {
  return (
    <section className={styles.heroSec}>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2'>hiiiiii</div>
          <div className='w-full md:w-1/2'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
