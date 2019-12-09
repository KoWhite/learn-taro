import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './bottom.less'
import { getAllFoodInfo, getEvent } from '../../utils/common'
let events = getEvent();

class Bottom extends Component {
    constructor () {
        super(...arguments)
        this.state={
            num: 0,
            sendPrice: 3,
            supportTakeBySelf: false,
            sendMustPrice: 20,
            allPrice: 0
        };
    }

    componentDidMount () {
        // 要获取整体的存储的菜品数据进行计算
        // 获取计算好的 设置给state
        let {allPrice, allNum} = getAllFoodInfo();
        this.setState({
            num: allNum,
            allPrice: allPrice
        })
        events.on('addCut', ()=> {
            let {allPrice, allNum} = getAllFoodInfo();
            this.setState({
                num: allNum,
                allPrice: allPrice
            })
        })
    }

    render() {
        let { num, supportTakeBySelf, sendPrice, sendMustPrice, allPrice } = this.state;
        return (<View className="bottom">
            <View className="bottom_body">
                {num ? <Text className="num">{num}</Text> : null }
                <Image className="store_img" src={num ? require('../../assets/img/foodstore.png') : require('../../assets/img/emptystore.png')} />
                <View className="info">
                    {allPrice ? <Text className="price">{'$' + allPrice}</Text> : 
                    <Text>{sendPrice ? `另需配送费$${sendPrice} | `: ""}</Text>}
                    <Text>{supportTakeBySelf ? "支持自取" : "不支持自取"}</Text>
                </View>
                <View className="submit">{allPrice >= sendMustPrice ? <Text className="goPay">去结算</Text> : <Text>{sendMustPrice ? `满$${sendMustPrice}起送`: ""}</Text>}</View>
            </View>
        </View>)
    }
}

export default Bottom