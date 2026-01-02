"use client"
import { Button } from "@/components/ui/button";
import { HeaderCourseProps } from "./HeaderCourse.types";
import { Eye, EyeOff, MoveLeft, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeaderCourse(props: HeaderCourseProps) {
    const { idCourse, idPublished } = props;
    const { isLoading, setIsLoading } = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="mb-4">
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <Button onClick={() => router.push('/teacher')}>
                        <MoveLeft className='' /> Volver a todos los cursos
                    </Button>

                    <div className='gap-2 flex items-center'>
                        {idPublished ? (
                            <Button
                                variant='outline'
                                disabled={isLoading}
                            >
                                No publicar
                                <EyeOff />
                            </Button>
                        ) : (
                            <Button
                                disabled={isLoading}
                            >
                                Publicar
                                <Eye />
                            </Button>
                        )}
                        <Button
                            variant='destructive'
                        >
                            <Trash />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}