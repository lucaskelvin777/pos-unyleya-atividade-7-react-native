import styled from 'styled-components'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
export const EditText = styled(TextInput)`
    border:1px solid #303030;
    border-radius:12px;

`;

export const LabelText = styled(Text)`



`;


export const ViewGroup = styled(View)`
    width:300px;


`;
export const AlignInputCenter = styled(View)`
    justify-content:center;
    align-content:center;
    align-items:center;
    width:100%;
    display:flex;
    margin-bottom:36px;


`;

export const ButtonChooseImage = styled(TouchableOpacity)`
    background-color: #505050;
    border-radius: 24px;
    padding:12px;


`;
export const TextButtonChooseImage = styled(Text)`
    color: #fff;
    text-align:center;
    font-size:14px;

`;


export const TextInputMaskStyled = styled(TextInputMask)`
    border:1px solid #303030;
    border-radius:12px;


`;

export const ButtonSubmit = styled(TouchableOpacity)`
    background-color: #9b59b6;
    border-radius: 24px;
    padding:12px;
    width:200px;
`;
export const TextButtonSubmit = styled(Text)`
    color: #fff;
    text-align:center;
    font-size:16px;
    font-weight:bold;
    

`;