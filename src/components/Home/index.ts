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

const Button = styled(TouchableOpacity)`
    background: #9b59b6;
    max-width:300px;
    padding: 12px;
    margin-bottom:6px;
    margin-top: 6px;
    border-radius: 4px;
    

`;
const TextButton = styled(Text)`
    color: #fff;
    text-align:center;
`;

const Card = styled(TouchableOpacity)`
    border:1px solid #9b59b6;
    margin-bottom:24px;
    border-radius:4px;
    display:flex;
    justify-content:center;
    align-content:center;
    align-itens:center;
    max-width:180px;
    padding:4px;
`;
const TitleCard = styled(Text)`
    font-size:20px;
    text-align:center;
    

`;
const ImageCard = styled(Image)`
    width:170px;
    height:170px;
    border-radius:4px;

`;

const CenterContainer = styled(View)`
    display:flex;
    justify-content:center;
    width:100%;
    flex-direction: row;
    



`;
const AlignRowItems = styled(View)`
    flex-direction: row; 
    flex-wrap: wrap;
    gap: 12px; 
    justify-content:center;



`;
const LoadingText = styled(Text)`
    text-align: center;
    font-size:24px;
    color:#101010;

`;


export {
    Input,
    MainContainer,
    Button,
    TextButton,
    Card,
    TitleCard,
    ImageCard,
    CenterContainer,
    AlignRowItems,
    LoadingText
}
