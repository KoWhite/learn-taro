import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './foodlist.less'
import AddCut from '../addcut/AddCut'

class FoodList extends Component {
    constructor () {
        super(...arguments)
        this.state={};
    }

    render() {
        let { selectCata, currentList } = this.props;
        return (<View className="food_list">
            <Text className="food_title">{selectCata ? selectCata.name : ""}</Text>
            <View className="foodlist_forlist">
                {
                    currentList.map((item) => {
                    return (<View key={item.id} className="foodlist_item">
                        <Image className="foodlist_item_img" src={item.img == 2 ? require('../../assets/img/2.jpg') : require('../../assets/img/1.jpg')} />
                        <View className="foodlist_item_info">
                            <Text>{item.title}</Text>
                            <Text>月售：{item.sole}</Text>
                            <Text className="price">＄{item.price}</Text>
                            <AddCut food={item} />
                        </View>
                    </View>)})
                }
            </View>
        </View>)
    }
}

export default FoodList