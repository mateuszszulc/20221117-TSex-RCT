import { useEffect, useState } from 'react';
import { usersService } from './users.service';
import { SearchBox } from '../shared/SearchBox'
import { User } from './User';
import { UsersPanelCard } from './UsersPanelCard'

export function UsersPanel() {

    // here get properly: usersService.getAll()
    const [users, setUsers] = useState<User[]>([])
    const [filterWord, setFilterWord] = useState('')

    useEffect(() => {
        usersService.getAll().then((values: User[]) => {
            setUsers(values)
        })
    }, [])

    const hanldeSearchInput = (text: string) => {
        setFilterWord(text)
    }

    const computedUsers = users.filter(u => u.name.toLowerCase().includes(filterWord))

    return (
        <section className="columns is-multiline">
            <div className="column is-12">
                <SearchBox placeholder="Search user name..." onSearch={hanldeSearchInput} />
            </div>
            {
                computedUsers.map(user =>
                    <div className="column is-3-widescreen is-4-desktop is-6-tablet is-12-mobile" key={user.id} >
                        <UsersPanelCard user={user} />
                    </div>
                )
            }
        </section>
    )
}
