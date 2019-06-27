# React Native Navigation Animation

Beautiful Navigation animation with transition made with React Native.

Check it out on Dribbble (https://dribbble.com/shots/4115418-Home-page-interactions)


<img src="https://cdn.dribbble.com/users/1233499/screenshots/4115418/iphone_x6.gif" >



Android: `react-native run-android`

iPhone: `react-native run-ios`


# Usage

```js
render() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.navigationHeaderContainer}>
                <Image style={{bottom: 15, position: 'absolute', left: 15,height:20,width:20,}}
                       source={require('/Volumes/Project/ReactProject/AnimationDemo/Images/ic_menu.png')}/>
                <Text style={{bottom: 15, position: 'absolute', right: 15,color: '#3842B0',}}>+ Create</Text>
            </View>


            <ScrollView style={styles.mainContainer}>

            {/* Top Container ........ */}
            <View style={styles.topContainer}>

                {/* User Image ........ */}
                <Image style={styles.userImageContainer}
                       source={require('/Volumes/Project/ReactProject/AnimationDemo/Images/maxresdefault.jpg')}/>

                <Text style={{marginLeft: 15, marginTop: 8, color: '#6471F4'}}>
                    Hello,{"\n"}Dance Montgomery
                </Text>

                <Text style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 30,
                    color: '#3842B0',
                    fontSize: 40,
                    fontWeight: 'bold'
                }}>
                    What you want to cook today?
                </Text>


                {/* Search View Container ........ */}
                <View style={styles.topSearchContainer}>
                    <Image style={{
                        marginLeft: 5,
                        width: scaleToDimension(40),
                        backgroundColor: 'transparent',
                        height: scaleToDimension(40),
                        resizeMode: 'center'
                    }}
                           source={require('/Volumes/Project/ReactProject/AnimationDemo/Images/magnifying-glass-icon.png')}/>
                    <TextInput style={{flex: 1, marginLeft: 5, marginRight: 10, color : "#3842B0"}} placeholder={'Search'} placeholderTextColor='#3842B0' />
                </View>


            </View>

            {/* Bottom Container ........ */}
            <View style={styles.bottomContainer}>

                {/* Tab bar View........ */}
                <View style={styles.bottomTabBarContainer}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={arrTapBar}
                        extraData={this.state}
                        renderItem={({item, index}) => this.renderTapBarItem(item, index)}
                    />
                </View>

                {/* Grid View........ */}
                <View style={styles.bottomGridContainer}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        onPress
                        horizontal={true}
                        data={arrTapBar}
                        renderItem={({item, index}) => this.renderGridItem(item, index)}
                    />
                </View>


            </View>

        </ScrollView>
        </SafeAreaView>
    );
}
```


## Dependencies

* `react-navigation-fluid-transitions`


# Changelog

### Version: 1.0

  * Initial Build



# LICENSE!

React-native-navigation-animation is [MIT-licensed](https://github.com/Mindinventory/react-native-navigation-animation/blob/master/LICENSE).

# Let us know!
We’d be really happy if you send us links to your projects where you use our component. Just send an email to sales@mindinventory.com And do let us know if you have any questions or suggestion regarding our work.
