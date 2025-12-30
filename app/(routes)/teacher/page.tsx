import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import Header from './components/Header/Header';

export default async function TeacherPage() {
    const user = await currentUser();
    console.log(user);


    if (!user) {
        return <p>Not signed in</p>
    }

    return (
        <>
            <div>
                <Header/>
            </div>
        </>
    )
}
