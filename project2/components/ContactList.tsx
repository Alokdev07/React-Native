import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Profiler, use } from 'react'

export default function ContactList() {
    const contacts = [
        {
        uid : 1,
        name : 'Alok Bhuyan',
        status : 'Software Engineer',
        profilePic : 'https://yt3.googleusercontent.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            uid : 2,
            name : 'Akash sahoo',
            status : 'Software Engineer',
            profilePic : 'https://media.licdn.com/dms/image/v2/D4D03AQH8CXRHAKQd6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693777638244?e=2147483647&v=beta&t=cxdOsxsjBWd3eicb9qXbHav_8RN4horjNSi4g18M16g'
            },
            {
                uid : 3,
                name : 'jay prakash mohanty',
                status : 'Software Engineer',
                profilePic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJgF6NSyDhXHspzKqWQMf_LHxcuNAxRPlBA&s'
             }
]
  return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
      <ScrollView style = {styles.container} >
             {contacts.map((user) => (
                <View key={user.uid} style={styles.userCard}>
                    <Image 
                    source={{
                        uri : user.profilePic
                    }}
                    style = {styles.userImage}
                    />
                    <View style = {styles.Texts}>
                    <Text style = {styles.userName}>{user.name}</Text>
                    <Text style = {styles.userStatus}>{user.status}</Text>
                    </View>
                </View>
             )) }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        color : 'white'
        },
    container : {
        paddingHorizontal : 16,
        marginVertical : 12
    },
    userCard : {
        flex : 1,
        flexDirection : 'row',
        margin : 5,
        justifyContent : 'space-evenly',
        alignItems : 'center',
        padding : 8,
        backgroundColor : '#8D3DAF',
        borderRadius : 7
    },
    userImage : {
        height : 60,
        width : 60,
        borderRadius : 60/2
    },
    userName : {
        color : 'white',
        fontWeight : '900',
        marginHorizontal : 12,
    },
    userStatus : {
        color : '#cbcbcb',
        fontWeight : '600',
        marginHorizontal : 12,
    },
    Texts : {
        flex : 1,
        gap : 3
    }
})