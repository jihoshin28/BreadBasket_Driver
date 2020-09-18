import React from 'react'
import {Appbar} from 'react-native-paper'
import Menu from '../components/MenuComp'

const Header = () => {
    const [visible, setVisible] = React.useState(false);

    let goBack = () =>  console.log("Went back")
    let handleMenu = () => {
        if(!visible){
            setVisible(true)
        } else {
            setVisible(false)
        }
        console.log(visible)
    }
    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={handleMenu}>
                <Menu visible = {visible} onDismiss={() => setVisible(false)}></Menu>    
            </Appbar.Action>
            <Appbar.Content title = "Title"/>
            <Appbar.Action icon = "dots-vertical" onPress = {handleMenu}/>
        </Appbar.Header>
    )
}

export default Header