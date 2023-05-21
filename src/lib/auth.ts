import { cookies } from 'next/headers'
import decode from 'jwt-decode'

interface User {
    sub: string
    username: string
    avatarUrl: string
}

export function getUser(): User {
    const token = cookies().get('token')?.value

    if (!token) {
        throw new Error('Unauth')
    }

    const user: User = decode(token)

    return user
}