import Form from "@/components/Form";
import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory() {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <Link href='/' className="flex items-center gap-1 text-sm text-gray-100 hover:text-gray-50" >
                <ChevronLeft className="h-4 w-4" />
                Voltar a Timeline
            </Link>
            <Form/>
        </div>)
} 