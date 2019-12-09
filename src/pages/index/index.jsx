import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

import Head from '../../component/head/Head';
import Food from '../../component/food/Food';
import Bottom from '../../component/bottom/Bottom';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  

  render () {
    return (
      <View className='index'>
        <Head />
        <Food />
        <Bottom />
      </View>
    )
  }
}
