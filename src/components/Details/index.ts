import styled from 'styled-components'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';


const Input = styled(TextInput)`
    border: 1px solid #000;
    padding: 6px;
    border-radius: 6px; 
`;

const MainContainer = styled(ScrollView)`
    background-color: #fff;
    flex:1;
    padding-top:32px;
    padding-bottom:32px;
`;

const AlignCenterContent = styled(View)`
    width: 100%;
    justify-content: center;
    align-content: center;
    align-items: center

`;
const TitleText = styled(Text)`
    text-align: center;
    font-size: 28px;
    color: #101010;
`;



export {
    MainContainer,
    AlignCenterContent,
    TitleText
}