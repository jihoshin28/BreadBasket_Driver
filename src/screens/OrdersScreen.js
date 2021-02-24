import React from 'react'
import Header from "../navigation/Header"
import OrderBox from '../components/OrderBox'
import { connect } from 'react-redux'
import {getActiveOrders} from '../actions'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class OrdersScreen extends React.Component {

    componentDidMount(){
        this.props.getActiveOrders()
    }

    renderOrderBoxes = () => {
        return this.props.activeOrders.map(order => {
            let attributes = order['attributes']
            let tip = attributes.tip
            let payment = attributes.payment
            let total = `$${(tip + payment).toFixed(2)}`
            return <OrderBox navigation = {this.props.navigation} total = {total}/>
        })
    }

    render(){
        return(
            <View>
                <Header navigation={this.props.navigation} title = {"Active Orders"}/>
                {this.renderOrderBoxes()}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
})

let mapStateToProps = (state) => {
    return({
        activeOrders: state.orders.active_orders
    })
}
export default connect(mapStateToProps, {getActiveOrders})(OrdersScreen)