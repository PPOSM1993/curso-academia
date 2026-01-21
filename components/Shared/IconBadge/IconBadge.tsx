import { Icon } from "lucide-react";
import { IconBadgeProps } from "./IconBadge.types";


export function IconBadge(props: IconBadgeProps) {
    const { icon: Icon, text } = props;
    return (
        <>
        <div className="flex items-center gap-2 text-xs">
            <div className="w-6 h-6 items-center justify-center bg-violet-400 rounded-full">
                <Icon className="w-6 h-4 text-white mt-1" />
            </div>
            <span className="text-slate-500">{text}</span>
        </div>
        </>
    )
}