import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import { ChapterForm } from "../components";

export default async function ChapterPage({
    params,
}: {
    params: Promise<{ courseId: string, chapterId: string }>
}) {

    const { courseId, chapterId } = await params;
    const { userId } = await auth();

    if (!userId) {
        return (
            <div className='px-6'>
                <div className='w-full bg-white my-2 p-3 rounded-md'>
                    <p>No tienes permisos para ver este curso.</p>
                </div>
            </div>
        )
    }

    const chapter = await prisma.chapter.findUnique({
        where: {
            id: chapterId,
            courseId: courseId
        },
    })

    if (!chapter) {
        return (
            <>
                <p>Capítulo no encontrado</p>
            </>
        )
    }

    console.log(chapter);

    return (
        <>
            <div className="m-6">
                <ChapterForm chapter={chapter} courseId={courseId} />
            </div>
        </>
    )
}