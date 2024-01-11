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


export const CardItem = styled(TouchableOpacity)`
    border-bottom: 1px solid #303030;
    padding: 12px;
    margin-bottom:12px;
    background: #eeeeee;
    border-radius:12px;
    margin-top:6px;
    
`;
export const NameAndPhoto = styled(View)`
    flex-direction: row; 
    align-content: center; 
    align-items: center;

`;
export const TextCard = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    margin-left: 6px;
    color: #404040;


`;
export const TitlePage = styled(Text) `
    text-align:center;
    font-size: 24px;
    color: #101010;
    font-weight:bold;



`;

export const TextPrice = styled(Text)`

    font-size: 20px;
    color: #505050;
    font-weight: bold;
    width: 100%;
    text-align: right;

`;



export const ImageCard = styled(Image)`
    width:90px;
    height:120px;

`;


export const ButtonRegister = styled(TouchableOpacity)`
    background-color: #9b59b6;
    width:200px;
    border-radius:24px;
    padding:12px;

`;
export const TextRegister = styled(Text)`
    color:#fff;
    font-weight:bold;
    text-align:center;
    font-size:14px;
`;

export const AlignRight = styled(View)`
    width: 100%;
    align-items: flex-end;
    margin-top:12px;
`;


export {
    Input,
    MainContainer,
    Button,
    TextButton,
    Card,
    TitleCard,
    CenterContainer,
    AlignRowItems,
    LoadingText
}
