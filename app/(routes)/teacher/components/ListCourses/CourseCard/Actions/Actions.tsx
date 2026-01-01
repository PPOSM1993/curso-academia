'use client'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'sonner'
import { Edit, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { ActionsProps } from './Actions.type'

export default function Actions(props: ActionsProps) {
    const { courseId } = props;

    const router = useRouter();

    const onEdit = () => {
        router.push(`/teacher/${courseId}`)
    }

    console.log(courseId);


    const deleteCourse = async () => {
        try {
            await axios.delete(`/api/course/${courseId}`)
            toast.success('Curso eliminado')
            router.refresh()
        } catch (error) {
            console.error(error)
            toast.error('Error al eliminar el curso')
        }
    }
    return (
        <>
            <div className='flex flex-col gap-2 items-center w-full lg:max-w-42'>

                <Button
                    variant='outline'
                    className='w-full bg-yellow-500 hover:bg-yellow-600 text-white hover:text-white'
                    onClick={onEdit}
                >
                    Editar <Edit className='w-4 h-4' />
                </Button>

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button
                            variant='outline'
                            className='w-full bg-red-500 hover:bg-red-600 text-white hover:text-white'
                        >
                            Eliminar <Trash className='w-4 h-4' />
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Estás seguro?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Esto borrará permanentemente tu curso y no podrá ser recuperado.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="bg-blue-600 hover:bg-blue-700 text-white hover:text-white">Cancelar</AlertDialogCancel>
                            <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={deleteCourse}>
                                Eliminar
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </>
    )
}