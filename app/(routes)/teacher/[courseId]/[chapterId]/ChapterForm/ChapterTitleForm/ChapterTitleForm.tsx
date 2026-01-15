"use client"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ChapterTitleFormProps } from "./ChapterTitleForm.type";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { formSchema } from "./ChapterTitleForm.form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { EditorDescription } from "@/components/Shared";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function ChapterTitleForm(props: ChapterTitleFormProps) {
    const { chapter, courseId } = props;
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: chapter.title || "",
            description: chapter.description || "",
            isFree: chapter.isFree || false,
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/course/${courseId}/chapter/${chapter.id}`, {
                title: values.title,
                description: values.description,
                isFree: values.isFree,
            });
            toast.success("Capítulo actualizado correctamente");
            router.refresh();

        } catch (error) {
            console.log("Error al guardar el título del capítulo:", error);
            toast.error("Error al guardar el título del capítulo");
        }
    }

    return (
        <>
            <div className="p-6 rounded-md bg-white mt-6">
                <Form {...form}>
                    <form action="" className='space-y-4 grid-cols-1 md:grid-cols-2 gap-4' onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Titulo Capitulo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ingrese el titulo del Capítulo" {...field} />
                                    </FormControl>

                                    <FormDescription>
                                        Esto es lo que el usuario verá como título del Capítulo.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Descripcion Capitulo</FormLabel>
                                    <FormControl>
                                        <EditorDescription {...field} />
                                    </FormControl>
                                    <FormDescription className="mt-6 py-6">
                                        Descripcion del Capítulo
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                        </FormField>
                        <FormField
                            control={form.control}
                            name="isFree"
                            render={(field) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border border-muted">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>

                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Capitulo Publico
                                        </FormLabel>
                                        <br />
                                        <FormDescription>
                                            Si quieres que este capitulo sea visible para todos los usuarios.
                                        </FormDescription>
                                    </div>

                                </FormItem>
                            )}

                        />
                        <br />
                        <Button type="submit" className="bg-green-600 hover:bg-green-600 mt-6">Guardar Titulo del Capítulo <Plus /></Button>

                    </form>
                </Form>
            </div>
        </>
    )
}