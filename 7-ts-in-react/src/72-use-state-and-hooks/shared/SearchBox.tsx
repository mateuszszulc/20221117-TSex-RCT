
export function SearchBox({placeholder = 'Search for...', onSearch = (text: any) => {}}) {
    return (
        <div className="field">
            <p className="control has-icons-left">
                <input
                    className="input"
                    type="text"
                    placeholder={placeholder}
                    onChange={(ev) => onSearch(ev.target.value.toLowerCase())}
                />
                <span className="icon is-small is-left">
                  🔎
                </span>
            </p>
        </div>
    )
}
