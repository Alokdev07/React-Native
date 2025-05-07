import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(webUrl : string){
        Linking.openURL(webUrl)
    }

    return (
        <View>
            <Text style={styles.headingText}>ActionCard</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's new in javascript 21 - ES12</Text>
                </View>

                <Image source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9oC3CXYXxjWPZpv0eBA5JdP8yN_9UodcgQ&s'
                }} style={styles.cardImage} />

                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Just like every year, javascript brings in new features. This year 
                        javascript is bringing 4 new features, which are almost in 
                        production rollout. I won’t be wasting much more time and directly 
                        jump to code with easy to understand examples.
                    </Text>
                </View>

                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://monkeytype.com/')} style={styles.socialButton}>
                        <Text style={styles.socialButtonText}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.youtube.com/watch?v=eL5qYJ7y68k')} style={styles.socialButton}>
                        <Text style={styles.socialButtonText}>Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        color: 'white'
    },
    card: {
        width: 420,
        height: 470,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.5
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 12,
        width: '100%',
        textAlign: 'center',
        fontWeight: '900'
    },
    cardImage: {
        height: 300,
        resizeMode: 'cover'
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
    },
    socialButton: {
        backgroundColor: '#C88D74',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
        borderColor: 'black',
        minWidth: 100,
        alignItems: 'center'
    },
    socialButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
});
