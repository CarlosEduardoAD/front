import { getUser } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
    const { username, avatarUrl } = getUser();

    return (
        <div className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
                <Image src={avatarUrl} width={120} height={40} alt="chega" className="h-10 w-10 rounded-full" />
            </div>
            <p className='text-sm leading-snug hover:text-gray-500 transition-colors'>
                Seja bem vindo {' '} {username}
                <a href='api/auth/logout' className="block text-red-400 hover:text-red-300">
                    Sair
                </a>
            </p>

        </div>)
}