"use client"
import Image from "next/image"
import Particle from "@/components/particle"
import Hello from "@/components/Hello"
import Ps from "@/components/Ps"
import { Answer } from "@/components/Answer"
import Navbar from "@/components/Navbar"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Particle />
      <Hello />
      <Ps />
      <Answer />
    </div>
  )
}
