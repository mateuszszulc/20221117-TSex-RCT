
type OnSearchCallback = (text: string) => void

type SearchBoxProps = {placeholder?: string, onSearch: OnSearchCallback}

// Dummy component (Reusable Component)
export function SearchBox({placeholder = 'Search for...', onSearch }: SearchBoxProps) {
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
