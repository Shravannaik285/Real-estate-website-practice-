import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
        >
            <br />
            <div className="text-white text-center justify-center font-extrabold text-2xl sm:text-4xl md:">CONTACT US</div>
            
            <p className="text-white text-center text-xl p-4 sm:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusantium dolore nihil earum dolores provident, atque eligendi quaerat ad numquam id officia voluptatem error eaque est asperiores architecto nemo harum.
            </p>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="justify-center items-center flex flex-col border-2 border-gray-500 rounded-lg p-2 m-6 sm:pl-2 pr-4 md:hover:transition-transform md:hover:scale-105 max-w-sm md:max-w-lg lg:max-w-xl mx-auto"
            >
                <h2 className="text-white font-semibold m-4 text-xl sm:text-2xl md:">SIGN UP FOR MORE</h2>
                
                <input type="text" placeholder="Enter your name" className="bg-gray-800 text-white placeholder:text-gray-500 border border-white-500 focus:outline-none focus:ring-2 focus:ring-green-500 p-2 m-2 rounded-3xl sm:text-lg pl-8 pr-12 md:" />
                <br />
                <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white placeholder:text-gray-500 border border-white-500 focus:outline-none focus:ring-2 focus:ring-green-500 p-2 m-2 rounded-3xl sm:text-lg pl-8 pr-12 md:" />
                <br />
                <input type="text" placeholder="Enter your message" className="bg-gray-800 text-white placeholder:text-gray-500 border border-white-500 focus:outline-none focus:ring-2 focus:ring-green-500 p-2 m-2 rounded-3xl sm:text-lg pl-8 pr-12 md:" />
                <br />

                <div>
                    <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        className="text-center align-center text-white border-4 p-4 m-2 rounded-lg text-xl sm:pl-12 pr-16 text-4xl align-center justify-center md:"
                    >
                        Sign up
                    </motion.button>
                    
                    <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        className="text-center align-center text-white border-4 p-4 m-2 rounded-lg text-xl sm:pl-12 pr-16 text-4xl align-center justify-center md: max-w-xl lg:"
                    >
                        Log in
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    )
}
