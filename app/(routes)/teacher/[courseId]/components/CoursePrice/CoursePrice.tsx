"use client";
import { useState } from "react";
import { CoursePriceProps } from "./CoursePrice.types";
import TitleBlock from "../TitleBlock/TitleBlock";
import { DollarSign, Plus } from "lucide-react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'

import axios from "axios";
import { toast } from "sonner";
import { Button } from '@/components/ui/button'

export default function CoursePrice(props: CoursePriceProps) {
    const { idCourse, priceCourse } = props
    const [price, setPrice] = useState<number | string | undefined>(
        priceCourse || 'Gratis'
    )

    const onChangePrice = async () => {
        try {
            const priceToSend = price === 'Gratis' ? null : parseFloat(price as string)
            axios.patch(`/api/course/${idCourse}`, {
                price: priceToSend
            })
            toast.success('Precio del curso actualizado')
        } catch (error) {
            toast.error('Error al guardar el precio del curso')
            console.error(error)
        }
    }

    return (
        <>
            <div className='p-6 bg-white rounded-md h-fit'>
                <TitleBlock title='Precio del curso' icon={DollarSign} />

                <Select onValueChange={setPrice} defaultValue={price?.toString()}>
                    <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Precio del curso' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Precio del curso</SelectLabel>
                            <SelectItem value='Gratis'>Gratis</SelectItem>
                            <SelectItem value='19'>$19.000 CLP</SelectItem>
                            <SelectItem value='20'>$20.000 CLP</SelectItem>
                            <SelectItem value='21'>$21.000 CLP</SelectItem>
                            <SelectItem value='22'>$22.000 CLP</SelectItem>
                            <SelectItem value='23'>$23.000 CLP</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Button
                    className='mt-3 w-full bg-green-600 hover:bg-green-600 text-white'
                    onClick={onChangePrice}
                    disabled={!price}
                >
                    Guardar Precio <Plus className='w-4 h-4 ml-1' />
                </Button>
            </div>
        </>
    )
}