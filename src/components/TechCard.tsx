import { motion } from 'framer-motion';

const TechCard = ({
  logo,
  title,
  description,
  link,
}: {
  logo: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <motion.div
      className='flex flex-col items-center p-6 bg-white text-center rounded-lg shadow-md transform transition-transform hover:scale-105'
      whileHover={{
        scale: 1.1,
        rotate: [0, 10, -10, 0],
        backgroundColor: '#FFF8DB',
        boxShadow: '0 12px 25px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      }}
      whileTap={{
        scale: 0.95,
        rotate: -45,
        borderRadius: '50%',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
      }}
      style={{ width: '250px', height: '300px' }}
    >
      <img src={logo} alt={`${title} Logo`} className='w-16 h-16 mb-4' />
      <h2 className='text-xl font-semibold mb-2 text-gray-800'>{title}</h2>
      <p className='text-gray-600'>{description}</p>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='text-pink-500 hover:text-pink-700 mt-4'
      >
        Learn More
      </a>
    </motion.div>
  );
};

export default TechCard;
