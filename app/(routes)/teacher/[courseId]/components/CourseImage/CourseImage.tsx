"use client"

import React, { useState } from 'react'
import TitleBlock from '../TitleBlock/TitleBlock'
import { FileImage, Pencil } from 'lucide-react'
import { CourseImageProps } from './CourseImage.types'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function CourseImage(props: CourseImageProps) {

    const { idCourse, imageCourse } = props;
    const [isEditing, setIsEditing] = React.useState(false);

    const [image, setImage] = useState(imageCourse)
    return (
        <div className='p-4 rounded-lg bg-white h-fit'>
            <TitleBlock title='Imagen del curso' icon={FileImage} />

            <div className='w-full bg-gray-300 rounded-md h-[250px]'>
                <Image
                    src={image || '/default-course-image.webp'}
                    alt='Imagen del curso'
                    width={500}
                    height={250}
                    className='rounded-md w-full h-full object-cover'
                />


            </div>
            <Button
                className='w-full mt-4 bg-black hover:bg-black text-white hover:text-white'
                variant='outline'
                size='sm'
                onClick={() => setIsEditing(!isEditing)}
            >
                <Pencil className='w-4 h-4 mr-1' />
                Editar imagen
            </Button>
        </div>
    )
}
