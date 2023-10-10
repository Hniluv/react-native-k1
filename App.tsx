import React from 'react';  
import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity,} from 'react-native';  
  
  
const App = ()=>{ 
  return (  
    
        <View style={styles.container}>
          <StatusBar backgroundColor={"#ffffff"}barStyle={'dark-content'}></StatusBar>          
          <View >                                                   
            <Text style={styles.title}>Sign up</Text>         
          </View> 
          <View style={styles.word1}>
            <Text>Sign up with one of the following</Text>
          </View> 
          <View style={styles.logo}>
            <TouchableOpacity>
              <View style={styles.vienGG}>
                <Image source={{
                  uri:'data:image/png;base64,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'
                  }}
                  style={styles.logoGG}                            
                />    
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
             <View style={styles.vienFB}>
                <Image source={{
                  uri:'data:image/png;base64,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'
                  }}
                  style={styles.loggoFB}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.thongtin}>
            <View>
              <Text style={styles.email}>Email*</Text>
              <TextInput style={styles.inputEmail}  placeholder='Enter your email'/>                                        
              <Text style={styles.password}>Password*</Text>
              <TextInput style={styles.inputPassword} placeholder='Creat your password'/>                            
            </View>
            <Text style={{marginTop:15}}>Must be at least 8 characters.</Text>
          </View> 
          <TouchableOpacity style={styles.CrAccButton}>
            <Text style={styles.CrAccText}>Create Account</Text>
          </TouchableOpacity>  
          <View style={styles.TextBottom}>
            <Text>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.Text2}>Log in</Text>
            </TouchableOpacity>     
          </View>                 
        </View>         
  )  
}  
const styles = StyleSheet.create({  
  container:{
     backgroundColor:"#ffffff",   
  },
  title:{
    fontWeight:'bold',
    fontSize:35,
    marginVertical:30,  
    alignSelf:'center',  
    color:'#030303'
  },
  word1:{
    fontSize:10,
    marginTop:10,
    marginHorizontal:25
  },
  logo:{    
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop:20,   
  },
  vienGG:{
    width:150,
    height:60,
    borderWidth:1,
    borderColor:'c2c1d3',
    borderRadius:15,
   
  },
  vienFB:{
    width:150,
    height:60,
    borderWidth:1,
    borderColor:'#c2c1d3',
    borderRadius:15   

  },
  logoGG:{
    width:30,
    height:30,
    marginHorizontal:60,
    marginVertical:15
  },
  loggoFB:{
    width:30,
    height:30,
    marginHorizontal:60,
    marginVertical:15
  },
  thongtin:{
    fontWeight:'bold',
    color:'#030303',
    fontSize:17,
    marginHorizontal:25,
    marginVertical:40
  },
  email:{
    fontWeight:'bold',
    color:'#030303',
    fontSize:17,
  },
  password:{
    fontWeight:'bold',
    color:'#030303',
    fontSize:17,
    marginTop:10
  },
  inputEmail:{
    borderWidth:1,
    borderColor:'#c2c1d3',
    borderRadius:10,
    marginTop:10,
  },
  inputPassword:{
    borderWidth:1,
    borderColor:'#c2c1d3',
    borderRadius:10,
    marginTop:10
  },
  CrAccButton:{
    width:360,
    height:55,
    borderWidth:1,
    borderColor:'#c2c1d3',
    borderRadius:10,
    alignSelf:'center',
    backgroundColor:'#6070ef',
       
  },
  CrAccText:{
    fontSize:20,
    alignSelf:'center',
    marginVertical:12,
    color:'#ffffff'
  },
  TextBottom:{
    flexDirection:'row',
    alignSelf:'center',
    marginVertical:30,
  },
  Text2:{
    fontWeight:'bold',
    color:'#030303',
    marginLeft:3
  },
})
 export default App;