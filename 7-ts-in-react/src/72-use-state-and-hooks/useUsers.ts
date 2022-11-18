import { useState, useEffect } from "react"
import { User } from "./users/User"
import { usersService } from "./users/users.service"

export function useUsers() {
    const [users, setUsers] = useState<User[]>([])
    const [filterWord, setFilterWord] = useState('')

    useEffect(() => {
        console.log('Backend call..')
        usersService.getAll().then((values: User[]) => {
            const computedUsers: User[] = values.filter(u => u.name.toLowerCase().includes(filterWord))
            setUsers(computedUsers)
        })
    }, [filterWord])

    return { users, setFilterWord }
}