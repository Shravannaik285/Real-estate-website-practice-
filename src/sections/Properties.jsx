import { motion } from "framer-motion";

export const Properties = () => {
  // Animation variants for cleaner code
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Delay between each card appearing
      }
    }
  };

  return (
    <div className="overflow-hidden">
      <motion.h1 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-white text-center font-semibold m-6 text-2xl sm:text-4xl md:mx-auto"
      >
        FIND IT LOVE IT <span className="text-red-600">OWN IT</span>
      </motion.h1>

      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-white text-center p-4 text-xl font-semibold sm:text-2xl md:mx-auto"
      >
        Discover your perfect home with us. Browse our curated selection of properties, 
        each verified for quality and trust.
      </motion.p>

      <motion.h3 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-white text-center font-semibold m-4 text-xl sm:text-2xl md:mx-auto"
      >
        Wake Up In a Home You Love.
      </motion.h3>

      {/* Property Cards Container */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-x-8 p-4"
      >
        {[
          { src: "/Projects/property1.png", text: "Beautiful apartment in the heart of the city🏠" },
          { src: "/Projects/property2.png", text: "Luxurious villa with stunning views🏠" },
          { src: "/Projects/property3.png", text: "Cozy cottage in the countryside🏠" },
        ].map((item, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="border-2 border-gray-600 rounded-lg p-4 m-4 w-fit bg-gray-900/20"
          >
            <img 
              src={item.src} 
              alt="" 
              className="w-80 h-50 rounded-lg"
            />
            <br />
            <p className="text-white text-center font-semibold">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
