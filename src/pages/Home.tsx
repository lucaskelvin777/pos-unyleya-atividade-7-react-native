import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Image } from 'react-native';


import { Products } from '../interfaces/Products';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AlignRight, ButtonRegister, CardItem, ImageCard, LoadingText, MainContainer, NameAndPhoto, TextCard, TextPrice, TextRegister, TitlePage } from '../components';
import { deleteProduct, getProducts } from '../services/Api';

const App = () => {
    const [data, setData] = useState<Products[] | null | undefined>(null);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();
    async function _getData() {
        setLoading(true);
        const response = await getProducts();
        setLoading(false);
        setData(response);
    }
    function _remove(id: number) {
        Alert.alert('Atenção', 'Você deseja deletar esse produto?',
            [{
                text: "fechar",
                style: 'cancel'
            },
            {
                text: "Excluir",
                onPress: async () => {
                    await deleteProduct(id);
                    _getData();
                }
            }
            ]
        );
    }
    useEffect(() => {
        _getData();
    }, [route.params]);


    if (loading) {
        return (<MainContainer>
            <LoadingText>Aguarde, carregando...</LoadingText>
        </MainContainer>);
    }


    return (<MainContainer>
        <TitlePage>Produtos</TitlePage>
        <AlignRight>
            <ButtonRegister onPress={
                () => {
                    navigation.navigate('Register');
                }
            }><TextRegister>Cadastrar Novo Produto</TextRegister></ButtonRegister>
        </AlignRight>
        <View>
            {data?.length ? data.map(el =>
                <CardItem onPress={() => {
                    navigation.navigate('Edit', {
                        id: el?.id
                    });
                }}
                    onLongPress={() => {
                        _remove(el.id);
                    }}
                    key={el.id}>
                    <NameAndPhoto>
                        <ImageCard source={{ uri: el.image ? el.image : null }} />
                        <View>
                            <TextCard>Produto: {el.name}</TextCard>
                            <TextCard>Categoria: {el.category}</TextCard>
                            <TextCard>Preço: {el.price}</TextCard>
                        </View>
                    </NameAndPhoto>

                </CardItem>
            ) : <></>}
        </View>
    </MainContainer>);
}


export default App;