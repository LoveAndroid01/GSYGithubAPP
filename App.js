/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {configureStore} from './app/store';
import getRouter from './app/router';
import {Provider} from 'react-redux';
import store from './app/store/'

export default class App extends Component<{}> {

    constructor() {
        super();
        this.state = {
            store: store
        }
    }

    render() {
        return (
            <Provider store={this.state.store}>
                {getRouter()}
            </Provider>
        );
    }
}
