import Image from 'next/image'
import logo from '../../assets/logo.svg'
import Link from 'next/link'

export default function Hero() {
    return (<div className='space-y-5'>
        <Image src={logo} alt='b4' />
        <div className='max-w-[420px] space-y-1'>
            <h1 className='mt-5 text-5xl font-bold leading-tight text-gray-50'>Seu albúm virtual</h1>
            <p className='text-lg leading-relaxed'>Sempre bom ter um lugar para guardar o que você tem de melhor</p>
        </div>
        <Link href={'/memories/new'} className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black'>
            Cadastrar Lembrança
        </Link>
    </div>)
}