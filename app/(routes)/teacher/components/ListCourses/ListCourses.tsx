import { CourseCard } from "./CourseCard";
import { ListCoursesProps } from "./ListCourses.types"


export function ListCourses(props: ListCoursesProps) {
    const { courses } = props;

    if (courses.length === 0) {
        return <div className="m-8">No hay cursos</div>;
    }

    return (
        <>
            <div className="flex flex-col my-4 mx-6 border rounded-lg bg-white p-4 gap-10">
                {courses.map((course) => (
                    <div key={course.id} className="flex flex-col gap-4">
                        <CourseCard course={course} />

                        <div className="border-t border-gray-200 w-full mt-4"></div>
                    </div>
                ))}
            </div>
        </>
    )
}