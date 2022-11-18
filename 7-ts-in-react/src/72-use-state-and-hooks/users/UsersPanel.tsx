import { useEffect, useState } from 'react';
import { usersService } from '../services/users.service';
import { SearchBox } from '../shared/SearchBox'
import { UsersPanelCard } from './UsersPanelCard'

export function UsersPanel() {

    // here get properly: usersService.getAll()
    const [users, setUsers] = useState([])
    const [filterWord, setFilterWord] = useState('')

    useEffect(() => {
        usersService.getAll().then((values: any) => {
            setUsers(values)
        })
    }, [])

    const hanldeSearchInput = (text: string) => {
        setFilterWord(text)
    }

    // @ts-ignore
    const computedUser = users.filter((u: any) => u.name.toLowerCase().includes(filterWord))

    return (
        <section className="columns is-multiline">
            <div className="column is-12">
                <SearchBox placeholder="Search user name..." onSearch={hanldeSearchInput} />
            </div>
            {
                computedUser.map((user: any) =>
                    <div className="column is-3-widescreen is-4-desktop is-6-tablet is-12-mobile" key={user.id} >
                        <UsersPanelCard user={user} />
                    </div>
                )
            }
        </section>
    )
}
