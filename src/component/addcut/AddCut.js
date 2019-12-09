import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import './addcut.less'
import { getFoodCount, setFoodCount, getEvent } from '../../utils/common'
let myEvent = getEvent();

class AddCut extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            num: 0
        };
    }

    componentDidMount() {
        this.setState({num: getFoodCount(this.props.food)})
        myEvent.on('changeCata', () => {
            this.setState({num: getFoodCount(this.props.food)})
        })
    }
    
    cutFood () {
       if (this.props.food) {
            if (this.state.num > 0) {
                setFoodCount(this.props.food, this.state.num, 'cut', () => {
                    this.setState({num: getFoodCount(this.props.food)})
                    myEvent.emit('addCut')
                }) 
            } else {
                // 异常
            }
       }
    }

    addFood () {
        setFoodCount(this.props.food, this.state.num, 'add', () => {
            this.setState({num: getFoodCount(this.props.food)}) 
            myEvent.emit('addCut')
        })
    }

    render () {
        let { num } = this.state;
        let hideClass = num > 0 ? "" : " hide";
        return (<View className="add_cut">
            <Image onClick={this.cutFood.bind(this)} className={"opeate_img" + hideClass} src={require('../../assets/img/cut.png')} />
            <Text className={"food_num" + hideClass}>{num}</Text>
            <Image onClick={this.addFood.bind(this)} className="opeate_img" src={require('../../assets/img/add.png')} />
        </View>)
    }
}

export default AddCut;