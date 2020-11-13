import {StyleSheet,Text,View,TouchableOpacity, Alert,TextInput} from 'react-native';


export default class extends SignUpLoginScreen React.Component{

    constructor(){
        super()
        this.state ={
            emailId:'',
            password :''
        }
        
    }
    userSignUp =(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(username,passwor)
        .then(()=>{
            return Alert.alert ('User Added!')
        })
    }
userLogin = (username,password)=>{
            .then((response)=>{
        return Alert.alert('User Logged In!!')
    })
}
<Text style = {{color:'ff5722',fontSize :18 ,fontWeight :'bold', marginLeft:55 }}> UserName</Text>

<View style = {{alignItems = 'center'}}>
<TextInput
style = {styles.loginBox}
keyboardType = 'email-address'
onChangeText = {(text)=>{
    this.setState({
        username :text 
    })
}}/>

</View>

<View style = {{alignItems:'center'}}>
    <TouchableOpacity
    style={[styles.button,{marginBottom:10}]}
    onPress = {()=>{this.userLogin(this.state.username,this.state.password)}}>
          <Text style = {{color:'#ff5722',fontSize = '18',fontWeight = 'bold'}}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    styles={styles.button}
    onPress = {()=>{this.userSignUp(this.state.username,this.state.password)}}>
        <Text style = {{color:'#ff5722',fontSize = '18',fontWeight = 'bold'}}>Sign Up</Text>
    </TouchableOpacity>
</View>
}

