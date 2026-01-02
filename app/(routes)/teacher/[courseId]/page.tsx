import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/prisma'
import { HeaderCourse } from './components';

export default async function CoursePage({
    params
}: {
    params: Promise<{ courseId: string }>
}) {

    const { courseId } = await params;
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

    const course = await prisma.course.findUnique({
        where: {
            id: courseId,
            userId
        },
        include: {
            chapters: {
                orderBy: {
                    position: 'asc'
                }
            }
        }
    })

    if (!course) {
        return (
            <div className='px-6'>
                <div className='w-full bg-white my-2 p-3 rounded-md'>
                    <p>El curso no existe.</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='m-6'>
               <HeaderCourse idCourse={course.id} isPublished={course.isPublished} />
            </div>
        </>
    )
}