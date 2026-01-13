"use client"
import { Button } from "@/components/ui/button";
import { HeaderCourseProps } from "./HeaderCourse.types";
import { Eye, EyeOff, MoveLeft, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function HeaderCourse(props: HeaderCourseProps) {
    const router = useRouter()
    const { idCourse, isPublished } = props
    const [isLoading, setIsLoading] = useState(false)

    const onPublish = async (state: boolean) => {
        setIsLoading(true)
        try {
            axios.patch(`/api/course/${idCourse}`, {
                isPublished: state
            })
            toast.success(state ? 'Curso publicado' : 'Curso despublicado')
            router.refresh()

        } catch (error) {
            console.error(error)
            toast.error('Error al publicar el curso')
        }
        setIsLoading(false)
    }

    const removeCourse = async () => {
        try {
            await axios.delete(`/api/course/${idCourse}`)
            toast.success('Curso eliminado')
            router.push('/teacher')
        } catch (error) {
            console.error(error)
            toast.error('Error al eliminar el curso')
        }
    }

    return (
        <>
            <div className="mb-4">
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <Button onClick={() => router.push('/teacher')}>
                        <MoveLeft className='' /> Volver a todos los cursos
                    </Button>
<br />


                    <div className='gap-2 flex items-center'>
                        {isPublished ? (
                            <Button
                                variant='outline'
                                disabled={isLoading}
                                onClick={() => onPublish(false)}
                            >
                                No publicar
                                <EyeOff />
                            </Button>
                        ) : (
                            <Button
                                disabled={isLoading}
                                onClick={() => onPublish(true)}
                            >
                                Publicar
                                <Eye />
                            </Button>
                        )}
                        <Button
                            variant='destructive'
                            onClick={removeCourse}
                        >
                            <Trash />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}