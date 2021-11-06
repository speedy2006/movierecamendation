import * as React from 'react';
import { View,Text, Alert } from 'react-native';
import axios from 'axios';
export default class App extends React.Component {
componentDidMount(){
  this.getmoviedata()
} 
constructor(){
  super()
this.state={
  movie_data:[]
  }
}
  getmoviedata=()=>{
    axios
    .get("http://127.0.0.1:5000//moviesData")
    .then(response=>{
       
  console.log(response.data.data[0]) 
      this.setState({movie_data:response.data.data}) 
      
    })
    .catch(error=>{
      Alert.alert(error.message)
    })
  }
  render() {
    return (
      <View>
        <Text>movie recomendation App</Text>
        <View>
          {this.state.movie_data.map(item => {
            return (
           <view>
           <Text>{item[0]+","+item[1]+","+item[2]+","+item[3]+","+item[4]+","+item[5]+","+item[6]}</Text>
           </view>   
            );
          })}
        </View>  
      </View>
      
    );
  }
}
