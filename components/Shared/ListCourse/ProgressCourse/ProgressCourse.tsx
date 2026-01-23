"use server"

import { currentUser } from "@clerk/nextjs/server";
import { ProgressCourseProps } from "./ProgressCourse.type"

export async function ProgressCourse(props: ProgressCourseProps) {

    const { courseId, totalChapters, price } = props;
    const user = await currentUser();

    if (!user) {
        return (
            <>
                <p className="text-xs mt-2">Not signed in</p>
            </>
        )
    }

    return (
        <>
            xd
        </>
    )
}