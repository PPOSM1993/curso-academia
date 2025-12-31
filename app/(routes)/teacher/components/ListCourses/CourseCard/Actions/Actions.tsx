import { Button } from "@/components/ui/button";
import { ActionsProps } from "./Actions.type"
import { Edit, Trash } from "lucide-react";

export default function Actions(props: ActionsProps) {
    const { courseId } = props;
    return (
        <>
            <div className='flex flex-col gap-2 items-center w-full lg:max-w-42'>

                <Button
                    variant='outline'
                    className='w-full bg-yellow-500 text-white'
                >
                    Editar <Edit className='w-4 h-4' />
                </Button>

                <Button
                    variant='outline'
                    className='w-full bg-red-500 text-white'
                >
                    Eliminar <Trash className='w-4 h-4' />
                </Button>
            </div>
        </>
    )
}