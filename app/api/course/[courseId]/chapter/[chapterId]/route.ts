import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ courseId: string, chapterId: string }> }
) {
    try {
        const { userId } = await auth();
        const { courseId, chapterId } = await params;
        const values = await req.json();

        if (!userId) {
            return new NextResponse("No tienes permisos para editar este capítulo", { status: 401 });
        }

        const course = await prisma.chapter.update({
            where: {
                id: chapterId,
                courseId: courseId
            },
            data: {
                ...values,
            }
        });
        return NextResponse.json(course);
        console.log(course);

    } catch (error) {
        console.log("[COURSE_CHAPTER_UPDATE_ERROR]", error);
        return new NextResponse("Error al actualizar el capítulo", { status: 500 });
    }
}