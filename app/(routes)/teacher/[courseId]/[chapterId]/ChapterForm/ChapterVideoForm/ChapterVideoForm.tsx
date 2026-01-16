
"use client";
import { Pencil, Video } from "lucide-react";
import { TitleBlock } from "../../../components";
import { ChapterVideoForProps } from "./ChapterVideoForm.type";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { UploadButton } from '@/utils/uploadthing'

export default function ChapterVideoForm(props: ChapterVideoForProps) {
    const { chapterId, courseId, videoUrl } = props;
    const [onEditVideo, setOnEditVideo] = useState(false);

    const onSubmit = async (url: string) => {
        console.log("URL", url);
    }

    return (
        <>
            <div className="mt-6 p-6 bg-white rounded-md">
                <TitleBlock title="Añade o Modifica el Video" icon={Video} />

                {videoUrl ? (
                    <video src={videoUrl} controls className="rounded-md" />
                ) : (
                    <p>No hay video</p>
                )}

                <div className="mt-4 p-2 rounded-md border">
                    <Button
                        variant="secondary"
                        onClick={() => setOnEditVideo(true)}
                    >
                        {onEditVideo ? "Arrastra o Selecciona el Video" : "Editar Video"}
                        <Pencil className="w-4 h-4" />
                    </Button>

                    {onEditVideo && (
                        <UploadButton
                            endpoint="chapterVideo"
                            className="w-full bg-slate-300 rounded-md p-2 mt-2"
                            onClientUploadComplete={(files) => {
                                const videoUrl = files[0].url;
                                console.log("VIDEO URL:", videoUrl);

                                if (!videoUrl) {
                                    console.error("No se generó la URL del video");
                                    return;
                                }

                                onSubmit(videoUrl);
                                alert("Video subido correctamente");
                            }}
                        />

                    )}
                </div>
            </div>
        </>
    )
}