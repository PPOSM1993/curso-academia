"use client"
import dynamic from "next/dynamic";
import { useMemo } from "react";
import 'react-quill-new/dist/quill.snow.css';


export type EditorDescriptionProps = {
    value: string;
    onChange: (newValue: string) => void;
}

export const EditorDescription = (props: EditorDescriptionProps) => {
    const { value, onChange } = props;

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill-new'), { ssr: false }),
        []
    );



    return (
        <>
        </>
    )
}