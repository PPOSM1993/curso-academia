"use server"

import { currentUser } from "@clerk/nextjs/server";
import { ProgressCourseProps } from "./ProgressCourse.type"
import { getUserProgressCourse } from "@/actions/getUserProgressCourse";
import { Progress } from "@/components/ui/progress";

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

    const progressCourse = await getUserProgressCourse(user.id, courseId);

    console.log("progressCourse", progressCourse);

    return (
        <>
            <div className="mt-4">
                <div className="bg-violet-100 rounded-full w-full px-4">
                    <Progress value={50} className="[&>*]:bg-violet-300" />
                    <p className="text-xs mt-1">{progressCourse}% Completado</p>
                </div>
                {totalChapters > 0 && progressCourse > 0 ? (
                    <>
                        <div>
                            <Progress value={50} className="[&>*]:bg-violet-300" />
                            <p className="text-xs mt-1">{progressCourse}% Completado</p>
                        </div>
                    </>
                ) : (
                    <>
                    <h4>${price} CLP</h4>
                    </>
                )}
            </div>
        </>
    )
}