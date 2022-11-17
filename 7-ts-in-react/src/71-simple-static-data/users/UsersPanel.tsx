import { User } from './User'
import { UsersPanelCard } from './UsersPanelCard'

type UsersPanelProps = { users: User[], onSomeAction?: (name: string) => void }

export function UsersPanel({ users, onSomeAction }: UsersPanelProps) {
    return (
        <section className="columns is-multiline">
            {
                users.map((user: User) =>
                    <div className="column is-3-widescreen is-4-desktop is-6-tablet is-12-mobile" key={user.id} >
                        <UsersPanelCard user={user} />
                    </div>
                )
            }
        </section>
    )
}
