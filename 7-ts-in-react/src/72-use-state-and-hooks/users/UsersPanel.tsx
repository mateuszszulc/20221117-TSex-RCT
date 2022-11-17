import { SearchBox } from '../shared/SearchBox'
import { UsersPanelCard } from './UsersPanelCard'

export function UsersPanel() {

    // here get properly: usersService.getAll()
    const users: any[] = [];

    return (
        <section className="columns is-multiline">
            <div className="column is-12">
                <SearchBox  placeholder="Search user name..." />
            </div>
            {
                users.map((user: any) =>
                    <div className="column is-3-widescreen is-4-desktop is-6-tablet is-12-mobile"  key={user.id} >
                        <UsersPanelCard user={user} />
                    </div>
                )
            }
        </section>
    )
}
