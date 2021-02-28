import React from 'react'
import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import { View, StyleSheet } from 'react-native'

class Map extends React.Component {

    constructor(props){
        super()
        this.state = {
            location: null,
            rounded: props.rounded? 10: 0 
        }
    }

    componentDidMount(){
        Geolocation.getCurrentPosition(
            position => {
                this.setState({location: position})
            },
            error => Alert.alert(error.message),
            {enableHighAccuracy:true, timeout: 20000, maximumAge: 1000}
        )
    }

    componentDidUpdate(prevState){
        if(prevState.location !== this.state.location){
            console.log(this.state.location.coords.latitude, this.state.location.coords.longitude)
        }
    }

    rounded =() => {
        if(this.props.rounded === true){
            return {
                ...StyleSheet.absoluteFillObject,
                borderRadius: 10
            }
        } else {
            return {...StyleSheet.absoluteFillObject}
        }
    }

    render(){
        return(
            <View style = {this.props.containerStyles}>
                <MapView
                    style = {this.rounded()}
                    initialRegion = {{
                        latitude : 37.785834,
                        longitude : -122.406417,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation = {true}
                    followsUserLocation = {true}
                />

            </View> 
        )
    }
}

export default Map