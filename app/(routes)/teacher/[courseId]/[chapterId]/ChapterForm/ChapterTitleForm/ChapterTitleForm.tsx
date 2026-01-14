"use client"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ChapterTitleFormProps } from "./ChapterTitleForm.type";

const formSchema = z.object({
    username: z.string().max(50),
})

export default function ChapterTitleForm(props: ChapterTitleFormProps) {
    const { chapter, courseId } = props;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        }
    })

    return (
        <>
            <div className="p-6 rounded-md bg-white mt-6">
                Chapter Title Form
            </div>
        </>
    )
}