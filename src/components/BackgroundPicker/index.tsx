'use client'

import { useCallback, useState } from "react"

export default function BackgroundPicker() {
    const [color, setColor] = useState<string>("")

    const options = [{
        name: "Amarelo",
        colorId: '#372560'
    },
    {
        name: "Roxo",
        colorId: '#57e295'
    },
    {
        name: "Azul",
        colorId: '#1684e8'
    }]

    const changeColor = useCallback((color : string) => {
        setColor(color)
    }, [])

    return (<>
        <div className="flex"></div>
        <div className={`absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full ${color ? ` bg-[${color}] ` : ' bg-purple-700 '} opacity-50 blur-full`} /></>)
}