import Image from "next/image"
import Compiler from "@/components/Compiler"
import Navbar from "@/components/Navbar"
import { Answer } from "@/components/Answer"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Compiler />
    </div>
  )
}
