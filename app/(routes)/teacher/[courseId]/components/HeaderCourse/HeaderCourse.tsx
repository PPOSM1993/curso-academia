import { Button } from "@/components/ui/button";
import { HeaderCourseProps } from "./HeaderCourse.types";
import { MoveLeft } from "lucide-react";

export default function HeaderCourse(props: HeaderCourseProps) {
    return (
        <>
            <div className="mb-4">
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <Button>
                        <MoveLeft className='' /> Volver a todos los cursos

                    </Button>
                </div>
            </div>
        </>
    )
}