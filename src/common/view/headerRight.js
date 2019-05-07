import React from 'react'
import { Avatar } from 'antd';
import img from './Q.png'
class headerRight extends React.Component{

render(){
    return(
        <>
            <Avatar size="large" icon="user" src= {img} />
            
        </>
    )
}
}
export default headerRight