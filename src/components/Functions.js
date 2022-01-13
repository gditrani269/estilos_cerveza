import React from 'react'
import ProtTypes from 'prop-types'
import Button from './Button'

const Functions =({onContentClear, inText}) => (
    <section className="functions">
        <Button type="button-long-text" text={inText} clickHandler={onContentClear}/>
    </section>
)

Functions.protTypes = {
    onContentClear: ProtTypes.func.isRequired,
}

export default Functions