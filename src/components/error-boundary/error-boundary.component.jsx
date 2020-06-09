import React, { Component } from 'react'
import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText
} from './error-boundary.styles'

export default class ErrorBoundary extends Component {
    state = {
        error: undefined,
    }

    static getDerivedStateFromError(error) {
        return { error }
    }

    componentDidCatch(error) {
        console.log(error)
    }

    render() {
        if (this.state.error) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={'https://i.imgur.com/yW2W9SC.png'} />
                    <ErrorImageText>404: Page Crashed</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children
    }
}
