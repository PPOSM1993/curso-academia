"use client";
import { ListCheck, PlusCircle } from "lucide-react";
import TitleBlock from "../TitleBlock/TitleBlock";
import { ChapterBlockProps } from "./ChapterBlock.types";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormChapterName from "./FormChapterName";

export default function ChapterBlock(props: ChapterBlockProps) {

    const { chapters, idCourse } = props
    const [chapterList, setChapterList] = useState(chapters ?? [])
    const [showInputChapter, setShowInputChapter] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)


    return (
        <>
            <div className='p-6 bg-white rounded-md h-fit relative'>
                <TitleBlock title='Capítulos del curso' icon={ListCheck} />
                <div className='flex gap-2 items-center justify-between mb-3'>
                    <p>Capítulos completos</p>
                    <Button
                        variant="default"
                        size='sm'
                        className='bg-green-600 hover:bg-green-600 text-white bg:hover:text-white'
                        onClick={() => setShowInputChapter(true)}
                    >
                        <PlusCircle className='w-4 h-4' />
                        Crear capítulo
                    </Button>
                </div>

                {showInputChapter && (
                    <FormChapterName
                        setShowInputChapter={setShowInputChapter}
                        idCourse={idCourse}
                    />
                )}


            </div>
        </>
    )
}