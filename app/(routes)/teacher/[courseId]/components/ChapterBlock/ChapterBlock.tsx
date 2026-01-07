"use client";
import { ListCheck, PlusCircle } from "lucide-react";
import TitleBlock from "../TitleBlock/TitleBlock";
import { ChapterBlockProps } from "./ChapterBlock.types";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChapterBlock(props: ChapterBlockProps) {

    const { chapters, idCourse } = props
    const router = useRouter()
    const [chapterList, setChapterList] = useState(chapters || [])
    const [showInputChapter, setShowInputChapter] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)

    return (
        <>
            <div className='p-6 bg-white rounded-md h-fit relative'>
                <TitleBlock title='Capítulos del curso' icon={ListCheck} />
                <div className='flex gap-2 items-center justify-between mb-3'>
                    <p>Capítulos completos</p>
                    <Button
                        variant='outline'
                        size='sm'
                        className='bg-green-600 hover:bg-green-600 text-white bg:hover:text-white'
                    >
                        <PlusCircle className='w-4 h-4' />
                        Crear capítulo
                    </Button>
                </div>

                {showInputChapter && <p>Form chapter name ...</p>}

            </div>
        </>
    )
}