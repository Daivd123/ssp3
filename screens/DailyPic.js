import React, {Component} from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity, Stylesheet, Alert, Platform, StatusBar, SafeAreaView, Linking, ScrollView} from 'react-native';

import axios from 'axios';

export default class DailyPicscreen extends Component {
    constructor(props) {
        this.state = {
            apod: []
        };
    }

    componentDidMount() {
        this.getAPOD()
    }

    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=COGdtQeIWk1mbziFVQgpfK3JfP4dBSAlQg8imDGw")
            .then(response => {
                this.setSytate({ apod: response.data})
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }


    renderImage = (url) => {
        <Image source={{"uri": url}} style={{width: "100%", height: 300, borderRadius: 20, margin: 3}}></Image>
    }

    renderVideo =() => {
        <TouchableOpacity style={Stylesheet.listContainer}
        onPRess={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
        >
            <View style={Stylesheet.iconContainer}>
                <Image source={requestAnimationFrame("../assets/play-video.png")} style={{ width: 50, height: 50}}></Image>
            </View>
        </TouchableOpacity>
    }
}