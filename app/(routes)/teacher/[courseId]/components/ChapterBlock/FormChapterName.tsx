
'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { formSchema } from './FormChapterName.form'

import { FormChapterNameProps } from './FormChapterName.types'
import { Plus } from 'lucide-react'
export default function FormChapterName(props: FormChapterNameProps) {
    const { idCourse, setShowInputChapter } = props;
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post(`/api/course/${idCourse}/chapter`, {
                title: values.title
            })

            setShowInputChapter(false)
            toast.success('Capítulo creado')
            router.refresh()
        } catch (error) {
            console.error("AXIOS ERROR:", error)
            toast.error('Error al crear el capítulo')
        }
    }


    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 mb-4'>
                    <FormField
                        control={form.control}
                        name='title'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Ej: Introduccón a la programación.' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type='submit'
                        disabled={!form.formState.isValid}
                        className='bg-green-600 hover:bg-green-600 text-white bg:text-white'
                    >
                        Crear <Plus className='w-4 h-4 ml-1' />
                    </Button>
                </form>
            </Form>
        </>
    )
}