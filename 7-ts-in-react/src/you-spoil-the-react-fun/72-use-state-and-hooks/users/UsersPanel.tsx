import { useEffect, useState } from 'react'
import { usersService } from '../services/users.service'
import { SearchBox } from '../shared/SearchBox'
import { UsersPanelCard } from './UsersPanelCard'

export function UsersPanel() {

    const [users, setUsers] = useState([]);
    const [nameFilter, setNameFilter] = useState('');

    useEffect(() => {
        // here get properly: usersService.getAll()
        usersService.getAll().then((users: any) => {
            setUsers(users)
        })
    }, [])

    const handleSearch = (text: string) => setNameFilter(text)
    const computedUsers = users.filter((u: any) => u.name.toLowerCase().includes(nameFilter))

    return (
        <section className="columns is-multiline">
            <div className="column is-12">
                <SearchBox  placeholder="Search user name..." onSearch={handleSearch} />
            </div>
            {
                computedUsers.map((user: any) =>
                    <div className="column is-3-widescreen is-4-desktop is-6-tablet is-12-mobile"  key={user.id} >
                        <UsersPanelCard user={user} />
                    </div>
                )
            }
        </section>
    )
}
