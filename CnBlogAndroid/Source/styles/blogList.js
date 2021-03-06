import {StyleSheet} from 'react-native';
import MyAdapter from '../screens/MyAdapter';
const screenWidth= MyAdapter.screenWidth;
const screenHeight= MyAdapter.screenHeight;
const titleFontSize= MyAdapter.titleFontSize;
const abstractFontSize= MyAdapter.abstractFontSize;
const informationFontSize= MyAdapter.informationFontSize;
const btnFontSize= MyAdapter.btnFontSize;
//flatList统一样式表
export const blogListStyles = StyleSheet.create({
    blogTitleText:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 2,
        textAlign: 'left',
        color: '#484848',
        lineHeight: 24,
        fontFamily: 'sans-serif',
    },
    blogSummaryText:{
        lineHeight: 24,
        fontSize: 14,
        marginBottom: 2,
        textAlign: 'left',
        color: 'gray',
    },
    blogAppText:{
        fontSize: 10,
        lineHeight: 12,
        textAlign: 'right',
        color: '#48494A',
        flex: 1,
    },
    blogAppAndTimeContainer:{
        flexDirection: 'row',
        marginBottom: 4,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginTop: 5,
    },
})
