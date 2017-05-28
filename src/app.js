import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBNLt0U_FV3V1YgDu_Ihq4zaxyAXvWC9LI',
            authDomain: 'authentication-64c6e.firebaseapp.com',
            databaseURL: 'https://authentication-64c6e.firebaseio.com',
            projectId: 'authentication-64c6e',
            storageBucket: 'authentication-64c6e.appspot.com',
            messagingSenderId: '160498570398'
        })
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        )
    }
}

export default App