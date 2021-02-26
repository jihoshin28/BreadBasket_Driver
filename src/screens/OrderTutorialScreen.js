import React from 'react'
import {Text, View, ScrollView, StyleSheet} from 'react-native'
import Header from '../header/Header'

const OrderTutorialScreen = props => {
    return(
        <View>
            <Header icon = "arrow-left-thick" navigation={this.props.navigation}  title = {"Order Tutorial"}/>
            <ScrollView>
                <Text style = {styles.header}>
                    Order Tutorial Screen
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 30
    }
})

export default OrderTutorialScreen