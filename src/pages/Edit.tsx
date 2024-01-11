import React, { useEffect, useState } from 'react';
import { MainContainer } from '../components';
import { AlignInputCenter, ButtonChooseImage, ButtonSubmit, EditText, LabelText, TextButtonChooseImage, TextButtonSubmit, TextInputMaskEdited, TextInputMaskStyled, ViewGroup } from '../components/Inputs';
import { launchImageLibrary } from 'react-native-image-picker';
import { Image, Button, Alert } from 'react-native';
import { Products } from '../interfaces/Products';
import { getProductById, patchProduct, postProduct } from '../services/Api';
import { useNavigation, useRoute } from '@react-navigation/native';

const App = () => {
    const [imageSource, setImageSource] = useState<string | null>(null);
    const [price, setPrice] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [code, setCode] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [category, setCategory] = useState<string | null>(null);
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params as { id: number };

    const handleMoneyChange = (formatted: string, extracted: string) => {
        setPrice(formatted);
    };

    const handleImagePicker = () => {
        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        }, (response: any) => {
            if (response?.didCancel)
                console.log('Usuário cancelou');
            else if (response?.error)
                console.log('Erro ao selecionar imagem: ', response?.error);
            else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImageSource(imageUri);
            }
        });
    };
    useEffect(() => {
        const _get = async () => {
            const response = await getProductById(id);
            if (response.image)
                setImageSource(response.image);
            if (response.price)
                setPrice(response.price);
            if (response.name)
                setName(response.name);
            if (response.code)
                setCode(response.code);
            if (response.description)
                setDescription(response.description);
            if (response.category)
                setCategory(response.category);
        }
        _get();
    }, [id]);
    const submitForm = async () => {
        
        if (name.length <= 0) {
            Alert.alert("Atenção", "Nome deve ser Preenchido");
            return;
        }

        const data: Products = {
            category,
            description,
            name,
            code,
            price: price,
            image: imageSource

        }
        await patchProduct(id, data);
        navigation.navigate('Home', { data });
        

    }
    return (<MainContainer>
        <AlignInputCenter>
            {imageSource && <Image source={{ uri: imageSource }} style={{ width: 200, height: 200, borderRadius: 100 }} />}
        </AlignInputCenter>

        <AlignInputCenter>
            <ButtonChooseImage onPress={handleImagePicker}>
                <TextButtonChooseImage>Encontrar Imagem</TextButtonChooseImage>
            </ButtonChooseImage>
        </AlignInputCenter>
        <AlignInputCenter>
            <ViewGroup>
                <LabelText>Nome do Produto</LabelText>
                <EditText value={name} onChangeText={e => setName(e)} />
            </ViewGroup>
        </AlignInputCenter>


        <AlignInputCenter>
            <ViewGroup>
                <LabelText>Código</LabelText>
                <EditText value={code} onChangeText={e => setCode(e)} />
            </ViewGroup>
        </AlignInputCenter>

        <AlignInputCenter>
            <ViewGroup>
                <LabelText>Descrição</LabelText>
                <EditText value={description} onChangeText={e => setDescription(e)} />
            </ViewGroup>
        </AlignInputCenter>

        <AlignInputCenter>
            <ViewGroup>
                <LabelText>Preço do produto</LabelText>
                <TextInputMaskStyled
                    type={'money'}
                    options={{
                        precision: 2, 
                        separator: ',',
                        delimiter: '.',
                        unit: 'R$', 
                        suffixUnit: '', 
                    }}
                    value={price}
                    onChangeText={handleMoneyChange}
                />
            </ViewGroup>
        </AlignInputCenter>


        <AlignInputCenter>
            <ViewGroup>
                <LabelText>Categoria</LabelText>
                <EditText value={category} onChangeText={e => setCategory(e)} />
            </ViewGroup>
        </AlignInputCenter>
        <AlignInputCenter>
            <ButtonSubmit onPress={submitForm}>
                <TextButtonSubmit>Salvar</TextButtonSubmit>
            </ButtonSubmit>
        </AlignInputCenter>


    </MainContainer>);
};

export default App;