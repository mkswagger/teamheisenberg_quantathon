"use client"
import Image from "next/image"
import Particle from "@/components/particle"
import Hello from "@/components/Hello"
import Ps from "@/components/Ps"
export default function Home() {
  return (
    <div>
      <Particle />
      <Hello />
      <Ps />
    </div>
  )
}
