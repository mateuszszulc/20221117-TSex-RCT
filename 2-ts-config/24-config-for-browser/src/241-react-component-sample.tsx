import React from 'react'

type PropTypes = { name: string }

export function ReactComponentSample({name}: PropTypes) {
    return (
        <div>I am sample of: {name} </div>
    )
}
