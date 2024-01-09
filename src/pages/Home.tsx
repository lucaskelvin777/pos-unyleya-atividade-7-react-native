import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { SearchApi } from '../services/RamgApi';
import { Button, Input, MainContainer, TextButton, Card, TitleCard, ImageCard, CenterContainer, AlignRowItems, LoadingText } from '../components/Home';
import { Games } from '../interfaces/Games';
import { useNavigation } from '@react-navigation/native';

const App = () => {
    const [data, setData] = useState<Games[] | null | undefined>(null);
    const [loading, setLoading] = useState(false);
    const [term, setTerm] = useState("");
    const navigation = useNavigation();
    const GetData = async () => {
        setLoading(true);
        const response = await SearchApi(term);
        setData(response.results);
        setLoading(false);
    }


    return <MainContainer>
        <Text>Pesquise aqui algum jogo.</Text>
        <Input onChangeText={e => setTerm(e)} />
        <CenterContainer>
            <Button onPress={GetData}>
                <TextButton>Pesquisar</TextButton>
            </Button>
        </CenterContainer>
        {loading ? <LoadingText>Aguarde, carregando...</LoadingText> : <>
        <AlignRowItems>
            {data?.length ? data.map(el => {
                return (<Card onPress={() => {
                    navigation.navigate('Details', {
                        id: el.id
                    });
                }} key={el.id}>
                    <TitleCard>{el.name}</TitleCard>
                    <CenterContainer>
                        <ImageCard source={{ uri: el.background_image }} />
                    </CenterContainer>
                </Card>)
            }) : <><Text>Não foi possível encontrar nenhum resultado com esses parâmetros</Text></>}
        </AlignRowItems>
        </>}

    </MainContainer>;
}


export default App;