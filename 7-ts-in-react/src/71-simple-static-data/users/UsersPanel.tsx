import { UsersPanelCard } from './UsersPanelCard'

export function UsersPanel({users}: any) {
    return (
        <section className="columns is-multiline">
            {
                users.map((user: any) =>
                    <div className="column is-3-widescreen is-4-desktop is-6-tablet is-12-mobile" key={user.id} >
                        <UsersPanelCard user={user} />
                    </div>
                )
            }
        </section>
    )
}
