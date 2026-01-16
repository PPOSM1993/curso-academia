"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cog, Trash } from "lucide-react"
import { useRouter } from "next/navigation";
import { ChapterFormProps } from "./ChapterForm.type";
import { ChapterTitleForm, TitleBlock } from "../../components";
import { toast } from "sonner";
import axios from "axios";
import ChapterVideoForm from "./ChapterVideoForm/ChapterVideoForm";

export default function ChapterForm(props: ChapterFormProps) {
    const { chapter, courseId } = props;

    const router = useRouter();

    if (!chapter) {
        return null
    };

    const onPublish = async (state: boolean) => {
        try {
            axios.patch(`/api/course/${courseId}/chapter/${chapter.id}`, {
                isPublished: state
            })
            toast.success(state ? "Capítulo publicado" : "Capítulo ocultado");

            router.refresh();
        } catch (error) {
            console.log("Error publishing chapter:", error);
            toast.error("Error al publicar el capítulo");
        }
    }

    const removeChapter = async () => {
        axios.delete(`/api/course/${courseId}/chapter/${chapter.id}`);
        toast.success("Capítulo eliminado correctamente");

        router.push(`/teacher/${courseId}`);
    }

    return (
        <>
            <div className="">

                <div className="p-6 bg-white rounded-md">
                    <Button className="mb-4" variant="outline" onClick={() => router.push(`/teacher/${courseId}`)}>
                        <ArrowLeft className="" />
                        Volver a la Edicion del Curso
                    </Button>
                </div>

                <div className="p-6 mt-6 bg-white rounded-md flex justify-between items-center">
                    <TitleBlock title="Edición de Capítulo" icon={Cog} />

                    <div className="gap-2 flex items-center">
                        {chapter?.isPublished ? (
                            <Button variant="outline" onClick={() => onPublish(false)}>Ocultar</Button>
                        ) : (
                            <Button onClick={() => onPublish(true)}>Publicar</Button>
                        )}

                        <Button className="bg-red-600 hover:bg-red-600" variant="destructive" 
                        onClick={() => removeChapter()}>
                            <Trash />
                        </Button>
                    </div>
                </div>
                <ChapterTitleForm chapter={chapter} courseId={courseId} />
                <ChapterVideoForm courseId={courseId} chapterId={chapter.id} videoUrl={chapter.videoUrl} />

            </div>
        </>
    )
}