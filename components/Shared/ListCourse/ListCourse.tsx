import Link from "next/link";
import { ListCourseProps } from "./ListCourse.type";
import Image from "next/image";

export default function ListCourse(props: ListCourseProps) {
    const { title, courses } = props;
    return (
        <>
            <div>
                <div className="my-4 mx-6 border rounded-lg bg-white p-6">
                    <h2 className="text-2xl font-normal">{title}</h2>
                </div>
            </div>
        </>
    )
}

