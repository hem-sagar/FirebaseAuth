import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {

    const Navigation = useNavigation()
    const handleSignOut = () => {
        auth
            .signOut()
            .then(()=>{
                Navigation.replace("Login")
            })
            .catch(error=>alert(error.message))
    }

    return (
        <View style={styles.conatiner}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome to Home Screen</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignOut}
                    style={[styles.button]}
                >
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
)
}

export default HomeScreen

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#A896B1"
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width:"100%",
        alignItems:"center",
      },
    welcomeContainer:{
        width:'88%',
        alignItems:"center",
    },
    welcomeText:{
        color:"#fff",
        fontSize:30,
        
    },
    buttonContainer:{
        width:'40%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    },
    button:{
        backgroundColor:'#B08BB3',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        borderColor:"#fff",
        borderWidth:2
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
})
