import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Top from './Top';
import Activity from './Activity';
import './head.less';

class Head extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            "store": {
                title: "川湘居",
                notice: "欢迎光临川湘居，这里没有更辣只有最辣！",
                tags: ["\"味道赞\"", "\"主食\"", "\"辣到舌头发麻\""]
            }
        }
    }

    render () {
        const { store } = this.state
        
        return (<View className="head">
            <Top />
            <Image className="back" src={require('../../assets/img/back.jpg')} />
            <View className="store">
                <Image className="store_img" src={require('../../assets/img/store.jpg')} />
                <View className="store_text">
                    <Text>{store.title}</Text>
                    <Text className="notice">{store.notice}</Text>
                    <View>
                        {
                            store.tags.map((item, index) => <Text className="tags_text" key={index}>{item}</Text>)
                        }
                    </View>
                </View>
            </View>
            <Activity />
        </View>)
    }
}

export default Head