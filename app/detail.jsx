import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Detail() {
    const route = useRoute();
    const { itemArray } = route.params;
    const [CommonName, ScientificName, Genus, Species, FamilyName, GlobalID, CreationDate, Creator, Editor, EditDate, OBJECTID] = itemArray;
    const PEXELS_API_KEY = 'BZ97HXpI2XtNur3134iIfdG2oICGUaliurBK8JJfBenCoFqjAEJpcv9h';
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get('https://api.pexels.com/v1/search', {
                    headers: {
                        Authorization: PEXELS_API_KEY,
                    },
                    params: {
                        query: `${CommonName} tree`,
                        per_page: 1,
                    },
                });
                console.log('API Response:', response.data);
                if (response.data.photos.length > 0) {
                    setImageUrl(response.data.photos[0].src.medium);
                } else {
                    console.log('No images found for this query.');
                    setImageUrl('https://via.placeholder.com/300');
                }
            } catch (error) {
                console.error('Error fetching image:', error);
                setImageUrl('https://via.placeholder.com/300');
            } finally {
                setLoading(false);
            }
        };
        fetchImage();
    }, [CommonName])
    return (
        <ScrollView
            style={{
                flex: 1,
                padding: 20,
                backgroundColor: '#f5f5f5',
                
            }}
        >
            <Text style={{ fontWeight: '900', color: '#005B41', fontSize: 40, paddingBottom: 10, paddingTop:10 }}>{CommonName}</Text>

            {loading ? (
                <Text style={{ color: 'blue' }}>Loading</Text>
            ) : (
                imageUrl ? (
                    <Image source={{ uri: imageUrl }} style={{ width: 200, height: 300, marginTop: 10, borderColor: 'black', borderWidth: 5 }} />
                ) : (
                    <Text style={{ color: 'red' }}>No image found</Text>
                )
            )}
            <Text style={{ fontSize: 20, paddingBottom: 10, paddingTop: 30, fontWeight: '500' }}>OBJECTID: <Text style={{ fontWeight: '800' }}>{OBJECTID}</Text></Text>
            <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: '500' }}>Scientific Name: <Text style={{ fontWeight: '800' }}>{ScientificName}</Text></Text>
            <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: '500' }}>Genus: <Text style={{ fontWeight: '800' }}>{Genus}</Text></Text>
            <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: '500' }}>Species: <Text style={{ fontWeight: '800' }}>{Species}</Text></Text>
            <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: '500' }}>FamilyName: <Text style={{ fontWeight: '800' }}>{FamilyName}</Text></Text>
            <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: '500' }}>CreationDate: <Text style={{ fontWeight: '800' }}>{CreationDate}</Text></Text>
            <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: '500' }}>Creator: <Text style={{ fontWeight: '800' }}>{Creator}</Text></Text>
            <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: '500' }}>EditDate: <Text style={{ fontWeight: '800' }}>{EditDate}</Text></Text>
            <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: '500' }}>Editor: <Text style={{ fontWeight: '800' }}>{Editor}</Text></Text>
            <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: '500' }}>GlobalID: <Text style={{ fontWeight: '800' }}>{GlobalID}</Text></Text>
        </ScrollView>

    );
}

