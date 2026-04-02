import { motion } from "framer-motion";

export const About = () => {
  return (
    <div>

      {/* 🔥 Heading Animation */}
      <motion.h1
        className="m-4 text-white text-center text-xl sm:text-4xl w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ABOUT OUR <span className="text-green-500">COMPANY</span>
      </motion.h1>

      {/* 🔥 Paragraph Animation */}
      <motion.p
        className="text-white text-center text-xl sm:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        We help people find their dream homes with{" "}
        <span className="text-green-500">trust and transparency</span>
      </motion.p>

      {/* 🔥 Cards Container (stagger animation) */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >

        {/* 🔥 Card 1 */}
        <motion.div
          className="text-white border-4 border-green-500 p-6 rounded-lg"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.1 }}
        >
          <h4 className="text-2xl text-center sm:text-4xl">5000+</h4>
          <p>Properties Sold</p>
        </motion.div>

        {/* 🔥 Card 2 */}
        <motion.div
          className="text-white border-4 border-green-500 rounded-lg p-6"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.1 }}
        >
          <h4 className="text-center text-2xl sm:text-4xl">15+</h4>
          <p>Years Experience</p>
        </motion.div>

        {/* 🔥 Card 3 */}
        <motion.div
          className="text-white border-4 border-green-500 rounded-lg p-6"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.1 }}
        >
          <h4 className="text-center text-2xl sm:text-4xl">50+</h4>
          <p>Expert Agents</p>
        </motion.div>

      </motion.div>

    </div>
  );
};