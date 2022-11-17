import * as React from 'react'

type InputFormProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    // See the error, comment above and remove "//" below :
    // onInput?: (event: React.KeyboardEvent<HTMLDivElement>) => void,
    onClick: (event: React.MouseEvent<HTMLFormElement>) => void
}

function InputForm({ onChange, onInput, onClick }: InputFormProps) {
    return <form onClick={onClick}>
        <input name="name" onInput={onInput} onChange={onChange} />
        { /* ----------------------------------------------------  */ }
        <input name="lastName"  onInput={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}/>
    </form>
}

const useMe = <InputForm
    onChange={(ev) => {
        console.log(ev.target.value)
    }}
    onInput={(ev) => {
        console.log(ev.target.value)
    }}
    onClick={(ev)=> {
        if(ev.target instanceof HTMLFormElement) {
            console.log(new FormData(ev.target))
        }
    }}
    />


export {}
