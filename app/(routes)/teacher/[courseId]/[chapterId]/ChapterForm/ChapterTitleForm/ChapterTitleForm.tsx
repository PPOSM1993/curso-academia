"use client"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ChapterTitleFormProps } from "./ChapterTitleForm.type";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { formSchema } from "./ChapterTitleForm.form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";



export default function ChapterTitleForm(props: ChapterTitleFormProps) {
    const { chapter, courseId } = props;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: chapter.title || "",
            description: chapter.description || "",
            isFree: chapter.isFree || false,
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Submit chapter title form:", values);
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
                    </form>
                    <Button type="submit" className="bg-green-600 hover:bg-green-600 mt-6">Guardar Titulo del Capítulo <Plus /></Button>
                </Form>
            </div>
        </>
    )
}