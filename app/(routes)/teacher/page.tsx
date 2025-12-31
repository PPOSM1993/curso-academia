import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import Header from './components/Header/Header';
import prisma from '@/lib/prisma';
import { ListCourses } from './components/ListCourses/ListCourses';

export default async function TeacherPage() {
    const user = await currentUser();
    console.log(user);

    if (!user) {
        return <p>Not signed in</p>
    }

    const courses = await prisma.course.findMany({
        where: {
            userId: user.id,
        },
        include: {
            chapters: true,
        },
    })
    console.log(courses);

    return (
        <>
            <div>
                <Header/>
                <ListCourses courses={courses}/>
            </div>
        </>
    )
}
