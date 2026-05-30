// Hero sekce
'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Webové aplikace
      </motion.h1>
  )
} 