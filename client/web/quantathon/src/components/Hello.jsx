import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Hello = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const opacity = 1 - scrollY / 1000 // Adjust 300 based on your scroll range

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: opacity, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl text-center font-bold text-sky-800"
      >
        Hello, we are team Heisenberg,{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ delay: 1, duration: 3 }}
          className="text-purple-500"
        >
          let's dive into our project
        </motion.span>
      </motion.h1>
    </div>
  )
}

export default Hello
