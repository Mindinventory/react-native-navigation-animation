import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
    TextInput,
    Image,
    Button,
    SafeAreaView,
    StatusBar
} from 'react-native';
import {FluidNavigator, Transition} from 'react-navigation-fluid-transitions';
import { Header } from 'react-navigation';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
let arrTapBar = [{"key": "Dish types"}, {"key": "Ingredients"}, {"key": "Cooking time"}, {"key": "Low calories"}, {"key": "Popular"}]


export class HomeScreen extends Component {

    // static router = Navigator.router;


    static navigationOptions = {
        title: 'Home',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#2F95D6',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
        },
        headerTitleStyle: {
            fontSize: 18,
        },
    };


    constructor(props) {
        super(props);
        this.state = {
            selectedTapBarIndex: 0,
        };


    }

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

                    {/*<View style={styles.navigationHeaderContainer}>*/}
                        {/*<Image style={{bottom: 15, position: 'absolute', left: 15,height:20,width:20,}}*/}
                               {/*source={require('/Volumes/Project/ReactProject/AnimationDemo/Images/ic_menu.png')}/>*/}
                        {/*<Text style={{bottom: 15, position: 'absolute', right: 15,color: '#3842B0',}}>+ Create</Text>*/}
                    {/*</View>*/}


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

    renderTapBarItem(item, index) {

        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.setState(previousIndex => {
                        return {selectedTapBarIndex: index};
                    });
                }}>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <Text style={
                        {
                            marginLeft: 10,
                            marginRight: 10,
                            color: '#6471F4',
                            fontSize: 15, //this.state.selectedTapBarIndex == index ? 20 : 15,
                            fontWeight: this.state.selectedTapBarIndex == index ? 'bold' : 'normal',
                        }}>
                        {item['key']}
                    </Text>

                </View>
            </TouchableWithoutFeedback>
        );
    }

    renderGridItem(item, index) {
        return (
            <TouchableOpacity
                activeOpacity = {1}
                onPress={(event) => {
                    this.props.navigation.navigate('homeDetails', {item: item['key']})
                }}>

                <Transition shared={item['key']}>
                    <View style={styles.bottomGridItemContainer}>
                        <Text style={{
                            marginLeft: 15,
                            marginRight: 10,
                            position: 'absolute',
                            bottom: 20,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 35,
                        }}>{item['key']}</Text>
                    </View>
                </Transition>
            </TouchableOpacity>
        );
    }

}


class DetailsScreen extends React.Component {

    render() {
        const {navigation} = this.props;
        const item = navigation.getParam('item', '');

        return (


            <SafeAreaView style={styles.DetailMainContainer}>
                <Transition shared={item}>
                    <View style={styles.detailTopContainer}>
                        <View style={styles.navigationHeaderContainer}>

                            <TouchableOpacity style={{bottom: 15, position: 'absolute', left: 15,height:20,width:20,}}
                                onPress={(event) => {
                                    navigation.goBack()
                                }}>

                            <Image style={{height:20,width:20,}}
                                   source={require('/Volumes/Project/ReactProject/AnimationDemo/Images/ic_back.png')}/>
                            </TouchableOpacity>

                            <Image style={{bottom: 15, position: 'absolute', right: 15,height:20,width:20,}}
                                   source={require('/Volumes/Project/ReactProject/AnimationDemo/Images/ic_search_white.png')}/>

                        </View>

                        <View style={styles.detailTopBottomSubContainer}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: scaleToDimension(35),
                            }}>{item}</Text>
                            <Text style={{color: 'white', fontSize: scaleToDimension(15),}}>87 recipes available</Text>
                        </View>
                    </View>
                </Transition>


                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={arrTapBar}
                    renderItem={({item, index}) => this.renderDetailListCell(item, index)}
                />


            </SafeAreaView>
        );
    }


    renderDetailListCell(item, index) {


        return (
            <TouchableOpacity
                activeOpacity = {1}
            >
        <View style={styles.detailListCellContainer}>
                    <View style={index == arrTapBar.length - 1 ? styles.detailListCellLastIndexContentViewContainer : styles.detailListCellContentViewContainer}>

                        <View style={styles.detailListCellContentViewBottomContainer}>
                            <Text style={{
                                color: '#2540a9',
                                marginLeft: 15,
                                marginTop: 15,
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>Turkey Risotto</Text>

                            <View style={{
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                                marginLeft: 15,
                                marginTop: 12
                            }}>
                                <Text style={{color: '#2540a9', fontSize: 15}}>40 min</Text>
                                <Text style={{color: '#2540a9', marginLeft: 20, fontSize: 15}}>450 cal</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}


const Navigator = FluidNavigator({

        home: {screen: HomeScreen},
        homeDetails: {screen: DetailsScreen},
},
);


class HomeTransitions extends React.Component {
    static router = Navigator.router;


    render() {
        const {navigation} = this.props;

        return (
            <Navigator navigation={navigation}/>
        );
    }
}


const scaleToDimension = (size) => {
    return screenWidth * size / 375
};


// All Styles related to design...
const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },

    topContainer: {
        backgroundColor: 'white'

    },

    navigationHeaderContainer: {
        height: Header.HEIGHT,
        width: screenWidth,
        color: "blue",
        justifyContent: 'center'
    },


    userImageContainer: {
        marginLeft: 15,
        marginTop: 5,
        height: screenWidth * 50 / 375,
        width: screenWidth * 50 / 375,
        backgroundColor: 'lightgrey',
        borderRadius: (screenWidth * 50 / 375) / 2,
    },


    topSearchContainer: {
        height: screenWidth * 40 / 375,
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 10,
        width: screenWidth - 30,
        backgroundColor: '#D2D7F3',
        flexDirection: 'row',
        borderRadius: 3,
    },

    bottomContainer: {
        alignItems: 'center',
        // height: screenHeight/2,
        backgroundColor: 'transparent'
    },


    bottomTabBarContainer: {
        height: 50.0,
        width: screenWidth,
        backgroundColor: 'transparent',
        flexDirection: 'column'
    },

    bottomGridContainer: {
        marginLeft: 5,
        width: screenWidth,
        height: screenHeight / 2 - 50,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'center'
    },


    bottomGridItemContainer: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        width: screenWidth * 300 / 375,
        height: screenHeight / 2 - 70,
        backgroundColor: '#5677f1',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 15
    },


    detailsHeader: {
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000FA',
    },

    DetailMainContainer: {
        flex: 1,
    },


    detailTopContainer: {
        height: scaleToDimension(250),
        width: screenWidth,
        backgroundColor: '#5677f1',
    },

    detailTopBottomSubContainer: {
        width: screenWidth - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 15,
        left: 15,
        right: 15,
    },


    detailListCellContainer: {
        flex: 0,
        width: screenWidth,
        height: screenWidth,
        backgroundColor: 'transparent',
        paddingTop: 10,
        paddingBottom: 10,
    },


    detailListCellContentViewContainer: {
        width: screenWidth - 20,
        height: screenWidth - 10,
        backgroundColor: '#5677f1',
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,
    },

    detailListCellLastIndexContentViewContainer: {
        width: screenWidth - 20,
        height: screenWidth - 20,
        backgroundColor: '#5677f1',
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,

    },


    detailListCellContentViewBottomContainer: {
        width: screenWidth - 22,
        minHeight: scaleToDimension(70),
        backgroundColor: 'white',
        position: 'absolute',
        paddingBottom: 15,
        bottom: 1,
        marginLeft: 1,
        marginRight: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

});


export default HomeTransitions;
