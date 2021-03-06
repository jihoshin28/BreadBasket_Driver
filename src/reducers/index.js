// import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import storesReducer from './storesReducer'
import itemsReducer from './itemsReducer'
import ordersReducer from './ordersReducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['items', 'stores']
}

const reducer = combineReducers({
    stores: storesReducer,
    items: itemsReducer,
    orders: ordersReducer
})

export default persistReducer(persistConfig, reducer)