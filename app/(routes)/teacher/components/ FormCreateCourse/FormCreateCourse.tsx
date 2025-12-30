"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { formSchema } from "./FormCreateCourse.form"
import { toast } from "sonner"
import { Plus } from "lucide-react"

export function FormCreateCourse() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            courseName: '',
            slug: ''
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        try {

        } catch (error) {
            console.error(error)
            toast.error("Error al crear el curso")
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name='courseName'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre de el curso</FormLabel>
                                <FormControl>
                                    <Input placeholder='Ingrese el nombre del curso' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='slug'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Slug de el curso</FormLabel>
                                <FormControl>
                                    <Input placeholder='Ingrese el slug del curso' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit'>Crear curso <Plus/></Button>

                </form>
            </Form>
        </>
    )
}