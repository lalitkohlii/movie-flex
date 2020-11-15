import { atom } from 'recoil';
import { getGeners } from '../utilities/MainUtility';

export const searchString = atom({
  key: 'searchString',
  default: ''
})

export const trendingPageNo = atom({
    key: 'trendingPageNo',
    default: 1
})

export const searchPageNo = atom({
    key: 'searchPageNo',
    default: 1
})

export const trendingTotalPageNo = atom({
    key: 'searchPageNo',
    default: 1
})

export const windowSize = atom({
    key: 'windowSize',
    default: ''
})  

export const numberSize = atom({
    key: 'numberSize',
    default: 1
})

export const tvGeners = atom({
    key: 'tvGeners',
    default: []
})

export const movieGeners = atom({
    key: 'movieGeners',
    default: []
})

export const pageHeader = atom({
    key: 'pageHeader',
    default: 'Top Trending'
})