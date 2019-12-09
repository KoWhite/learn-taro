import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui';
import Cata from './Cata';
import FoodList from './FoodList';
import './food.less'

class Food extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0,
            tabList: [
                {title: "点菜"},
                {title: "评价(1231)"},
                {title: "商家"}
            ],
            foodList: [],
            currentList: [],
            selectCata: null
        };
    }

    changeTab (value) {
        this.setState({current: value})
    }

    changeCata (selectCata) {
        if (this.state.foodList.some(item => item.pid == selectCata.id)) {
            // 不用加载数据
            this.setState({currentList: this.state.foodList.filter(item => item.pid === selectCata.id)});  
        } else {
            // 需要加载数据
            this.setState({foodList: this.state.foodList.concat(this.getData(selectCata))}, () => {
                this.setState({currentList: this.state.foodList.filter(item => item.pid === selectCata.id)})
            })
        }
        this.setState({selectCata: selectCata})
    }

    getData (selectCata) {
        // 由于本地图片资源需要require才能使用，所以先直接传数字，然后在渲染端设置即可
        let count = Math.round(Math.random() * 2);
        return Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({
            price: Math.round(Math.random() * 20),
            sole: Math.round(Math.random() * 50),
            img: count,
            pid: selectCata.id,
            id: selectCata.id + "_" + k,
            title: "分类" + selectCata.id + "菜品" + (k + 1)
        }))
    }

    render() {
        let {current, tabList, currentList, selectCata} = this.state;
        return (<View>
            <AtTabs current={current} onClick={this.changeTab.bind(this)} tabList={tabList} >
                <AtTabsPane>
                    <View className="food_body">
                        <Cata onChangeCata={this.changeCata.bind(this)}/>
                        <FoodList selectCata={selectCata} currentList={currentList}/>
                    </View>
                </AtTabsPane>
                <AtTabsPane>评价</AtTabsPane>
                <AtTabsPane>商家</AtTabsPane>
            </AtTabs>
        </View>)
    }
}

export default Food