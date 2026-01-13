"use client";
import { GripVertical, ListCheck, Pencil, PlusCircle } from "lucide-react";
import TitleBlock from "../TitleBlock/TitleBlock";
import { ChapterBlockProps } from "./ChapterBlock.types";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import FormChapterName from "./FormChapterName";
import axios from 'axios'

import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult
} from '@hello-pangea/dnd'

import { toast } from 'sonner'
import { useRouter } from "next/navigation";

export default function ChapterBlock(props: ChapterBlockProps) {

    const { chapters, idCourse } = props
    const [chapterList, setChapterList] = useState(chapters ?? [])
    const [showInputChapter, setShowInputChapter] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)
    const router = useRouter()

    const onDragEnd = (result: DropResult) => {

    }

  const onEditChapter = (chapterId: string) => {
    router.push(`/teacher/${idCourse}/${chapterId}`)
  }



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

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="chapters">
                        {provided => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className='flex flex-col gap-2'>
                                {chapterList?.map((chapter, index) => (
                                    <Draggable
                                        key={chapter.id}
                                        draggableId={chapter.id}
                                        index={index}
                                    >
                                        {provided => (
                                            <div
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}
                                                className='flex gap-2 items-center bg-slate-100 rounded-md py-2 px-4 text-sm justify-between'>
                                                <div className='flex items-center gap-2'>
                                                    <GripVertical className='w-4 h-4 text-gray-500' />
                                                    <p>{chapter.title}</p>
                                                </div>
                                                <div className='flex gap-2 items-center px-2 py-1'>
                                                    {chapter.isPublished ? (
                                                        <p className='px-2 py-1 text-emerald-600'>
                                                            Publicado
                                                        </p>
                                                    ) : (
                                                        <p className='px-2 py-1 text-gray-700'>
                                                            No publicado
                                                        </p>
                                                    )}
                                                    <div className='cursor-pointer'
                                                        onClick={() => onEditChapter(chapter.id)}>
                                                        <Pencil className='w-4 h-4 text-gray-500' />

                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                </DragDropContext>


            </div>
        </>
    )
}