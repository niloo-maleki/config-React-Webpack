import { motion } from 'framer-motion';
import TechCard from './components/TechCard';
import { techItems } from './components/techItems';

const App = () => {
  const animationVariants = {
    hidden: { opacity: 0, translateY: 50 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <div className='flex flex-col gap-2 items-center justify-center min-h-screen bg-gradient-to-r from-[#FF8C9E] to-[#FFDA76] p-6'>
      <motion.h1
        className='text-4xl md:text-5xl font-semibold mb-8 bg-clip-text'
        variants={animationVariants}
        initial='hidden'
        animate='visible'
        transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        whileHover={{
          scale: 1.05,
          backgroundImage: 'linear-gradient(to right, #304463, #FF4E88, #FFC7ED)', // گرادیانت برای حالت hover
          textShadow: '0px 4px 10px rgba(0, 119, 182, 0.5)', // سایه برای تاثیر بیشتر
          transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
        }}
      >
        Technologies Used in This Project
      </motion.h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {techItems.map((item, index) => (
          <motion.div
            key={index}
            variants={animationVariants}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <TechCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;
