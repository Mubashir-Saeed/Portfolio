
"use client";
import { motion } from 'framer-motion';
const Dividor = () => {
  return (
    <motion.div className="bg-gray-200 my-16 h-12 w-1 rounded-full hidden sm:block"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.12 }}
    ></motion.div>
  )
}

export default Dividor