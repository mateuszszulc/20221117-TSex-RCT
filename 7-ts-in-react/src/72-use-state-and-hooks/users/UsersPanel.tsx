import { SearchBox } from '../shared/SearchBox'
import { useUsers } from '../useUsers'
import { UsersPanelCard } from './UsersPanelCard'

export function UsersPanel() {

    const { users, setFilterWord } = useUsers()

    const hanldeSearchInput = (text: string) => {
        setFilterWord(text)
    }

    return (
        <section className="columns is-multiline">
            <div className="column is-12">
                <SearchBox placeholder="Search user name..." onSearch={hanldeSearchInput} />
            </div>
            {
                users.map(user =>
                    <div className="column is-3-widescreen is-4-desktop is-6-tablet is-12-mobile" key={user.id} >
                        <UsersPanelCard user={user} />
                    </div>
                )
            }
        </section>
    )
}
