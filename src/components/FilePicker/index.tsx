'use client'

import { ChangeEvent, useState } from "react";

export default function FilePicker() {
    const [preview, setPreview] = useState<string | null>(null)

    async function onFileSelected(e: ChangeEvent<HTMLInputElement>) {
        const { files } = e.target

        if (!files) {
            return
        }

        const previewURL = URL.createObjectURL(files[0])
        setPreview(previewURL)
    }

    return (<>
        <input onChange={onFileSelected} type="file"
            name="coverUrl"
            id="media"
            accept="image/*"
            className="invisible h-0 w-0" />

        {preview && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview} alt='sua imagem' className="h-[280px] w-full aspect-video rounded-lg object-cover" />)}
    </>)
} 