import React, { Component } from 'react'
import { View } from 'react-native'
import { store } from './core/redux/store'
import { Provider } from 'react-redux';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }} />
      </Provider>
    )
  }
}