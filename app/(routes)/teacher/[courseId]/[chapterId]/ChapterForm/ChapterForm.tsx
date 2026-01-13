"use client"

import { Chapter } from "@/app/generated/prisma/browser"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ChapterForm(props: Chapter) {
    const { chapter, courseId } = props
    return (
        <>
            <div>
                <div className="p-6">
                    <Button>
                        <ArrowLeft className=""/>
                        Volver a la Edicion del Curso
                    </Button>
                </div>
            </div>
        </>
    )
}