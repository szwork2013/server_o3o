import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import getRoutes from '../routes'

export class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store} key="provider">
                <ReduxRouter routes={getRoutes(store)}/>
            </Provider>
        )
    }
}

export class RootWithDevTools extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store} key="provider">
                <ReduxRouter routes={getRoutes(store)}/>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

