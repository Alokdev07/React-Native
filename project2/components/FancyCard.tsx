import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style = {styles.headingText}>FancyCard</Text>
      <View style = {styles.container}>
      <View style = {[styles.card,styles.cardElevated]}>
        <Image source={{
            uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLNyPaeZfV64DtRnuHhNplu6MxUfYGq5MHg&s'
        }
        } style = {styles.cardImage} resizeMode='cover' />
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Puri jagannath temple</Text>
            <Text style = {styles.cardLabel}>Puri,Odisha,india</Text>
            <Text style = {styles.cardDescription}>This is the beautiful temple placed in puri everybody in their life time must visit once</Text>
            <Text style = {styles.cardFooter}>Amazing place</Text>
        </View>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        color : 'white',
        padding : 7
      },
      container : {
        height : 500,
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
      },
      card : {
        height : 450,
        width : 450,
        borderRadius : 5,
        marginHorizontal : 16,
        marginVertical : 12,
      },
      cardElevated : {
           backgroundColor : '#FFFFFF',
           elevation : 3,
           shadowOffset : {
            height : 5,
            width : 5
           }
      },
      cardImage: {
        height: '60%',    
        width: '100%',     
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5 
      },      
      cardBody : {
        margin : 5,
        padding : 5
      },
      cardTitle : {
        fontSize : 24,
        fontWeight : '700',
        fontFamily : 'sans-serif',
        margin : 4
      },
      cardLabel : {
        fontSize : 18,
        marginHorizontal : 5
      },
      cardDescription : {
        marginHorizontal : 12,
        marginVertical : 12,
        fontSize : 15,
        fontWeight : '900'
      },
      cardFooter : {
        textAlign : 'center'
      }
})