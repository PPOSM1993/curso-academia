"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function ExploreCourse() {
  const router = useRouter()

  return (
    <div className="my-4 mx-6 border rounded-none bg-white gap-4">
      <div className="flex items-center justify-between gap-8 p-6 w-full">

        {/* TEXTO */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="text-4xl font-semibold">
            Explora todos los Cursos
          </h1>

          <p className="text-balance max-w-2xl">
            Empieza a aprender a programar desde cero con estos cursos.
            No necesitas experiencia ni conocimientos previos,
            no necesitas un ordenador de última tecnología.
            Solo necesitas muchas ganas y un buen café.
          </p>

          <Button
            className="w-fit flex gap-2"
            onClick={() => router.push("/courses")}
          >
            Explora todos los Cursos
            <Search className="w-5 h-5" />
          </Button>
        </div>

        {/* IMAGEN */}
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <Image
            src="/explore2.svg"
            alt="Todos los Cursos"
            width={340}
            height={240}
            className="object-contain"
          />
        </div>

      </div>
    </div>
  )
}
