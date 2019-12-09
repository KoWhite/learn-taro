import Taro from '@tarojs/taro';
import Event from './event';
import { func } from 'prop-types';
const foodKey = 'taro_meituan'
let myEvent = new Event()

export function getFoodCount (food) {
    let store = Taro.getStorageSync(foodKey)
    if (store && store[food.id]) {
        // 查找
        return store[food.id].num;
    } else {
        return 0;
    }
}

export function setFoodCount (food, num, type, callback) {
    if (food) {
        let store = Taro.getStorageSync(foodKey)
        if (!store) store = {};
        if (type === 'cut') {
            // 减菜逻辑
            if (num == 1) {
                if(store[food.id]) {
                    delete store[food.id];
                }
            } else {
                if (store[food.id]) {
                    store[food.id].num --;
                }
            }
        }
        if (type === 'add') {
            // 加菜逻辑
            if (store[food.id]) {
                store[food.id].num ++;
            } else {
                store[food.id] = {num: 1, ...food};
            }
        }
        Taro.setStorageSync(foodKey, store);
        callback && callback();
    }
}

export function getEvent () {
    return myEvent
}

// 获取所有的菜品数量和价格
export function getAllFoodInfo () {
    let allPrice = 0;
    let allNum = 0;
    let store = Taro.getStorageSync(foodKey);
    if(store) {
        Object.keys(store).map((key) => {
            if (store[key]) {
                allPrice += store[key].price * store[key].num;
                allNum += store[key].num;
            }
        })
    }
    return {allPrice, allNum}
}