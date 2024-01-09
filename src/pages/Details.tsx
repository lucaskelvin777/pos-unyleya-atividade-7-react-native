import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AlignCenterContent, MainContainer, TitleText } from '../components/Details';
import { SearchById } from '../services/RamgApi';
import { DetailGame } from '../interfaces/Games';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';

const DetailsScreen = () => {
    const route = useRoute();
    const { id } = route.params as { id: number };
    const { width } = useWindowDimensions();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<DetailGame | null | undefined>([]);

    useEffect(() => {
        const _get = async (idParam: number) => {
            setLoading(true);
            const response = await SearchById(idParam);
            setLoading(false);
            setData(response);
        }
        _get(id);
    }, [id]);
    return (
        <MainContainer>
            {loading ? <>
                <Text>Aguarde, carregando...</Text>
            </> :
                <>
                    <TitleText>{data?.name}</TitleText>
                    {data?.background_image ?
                        <AlignCenterContent>
                            <Image source={{ uri: data?.background_image }} width={180} height={180} />
                        </AlignCenterContent>
                        : <></>}
                    <RenderHtml
                        contentWidth={width}
                        source={{
                            html: data?.description ? data.description : '<p>N/A</p>'
                        }}
                    />
                </>
            }
        </MainContainer>
    );
};

export default DetailsScreen;