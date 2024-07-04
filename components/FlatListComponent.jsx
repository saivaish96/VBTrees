import { FlatList, Text, View, StyleSheet,TextInput, ScrollView, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

const treeData = require('../assets/data/VBTrees.json');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',

    },
    searchInput: {
        paddingVertical:10,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1.5,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20,
    },
    card: {
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 15,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        borderWidth: 2,
        borderColor: 'green',
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: 300,
        marginBottom: 50,
    },
    header: {
        marginBottom: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#005B41',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: '900',
        color: '#005B41',
        marginTop: 10,
        textAlign: 'center'
    },
    content: {
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
        color: '#323232',
        textAlign: 'left',
        lineHeight: 25,
        marginBottom: 10
    },
});
const FlatListComponent = () => {
    const navigation = useNavigation();
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState(treeData);
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search for trees by name"
                placeholderTextColor="#323232" 
                style={styles.searchInput}
                value={searchValue}
                onChangeText={(text) => {
                    setSearchValue(text)
                    const updatedData = treeData.filter((item) => { 
                        const item_data = `${item.CommonName.toUpperCase()})`; 
                        const text_data = text.toUpperCase(); 
                        return item_data.indexOf(text_data) > -1; 
                      }); 
                      setFilteredData(updatedData);

                }}
                autoCorrect={false}
            />
            <Text style={{ fontSize: 20, paddingBottom: 40, textAlign: 'right' }}>Total number of trees: <Text style={{ fontWeight: '900' }}>{treeData.length}</Text></Text>
            <FlatList
                data={filteredData}
                contentContainerStyle={{alignItems:'center'}}
                columnWrapperStyle={{ gap: 16, flexWrap: 'wrap'  }}
                numColumns={4}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate('detail', {
                        itemArray: [item.CommonName, item.ScientificName, item.Genus, item.Species, item.FamilyName, item.GlobalID, item.CreationDate, item.Creator, item.Editor, item.EditDate, item.OBJECTID],
                    })}>
                        <View style={styles.card}>
                            <View style={styles.header}>
                                <Text style={styles.subtitle}>
                                    {item.CommonName}
                                </Text>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.text}>
                                    <Text style={{ fontSize: 20, paddingBottom: 10 }}>Scientific Name: <Text style={{ fontWeight: '600' }}>{item.ScientificName}</Text></Text>{"\n"}
                                    <Text style={{ fontSize: 20, paddingBottom: 10 }}>Genus: <Text style={{ fontWeight: '600' }}>{item.Genus}</Text></Text>{"\n"}
                                    <Text style={{ fontSize: 20, paddingBottom: 10 }}>Species: <Text style={{ fontWeight: '600' }}>{item.Species}</Text></Text>{"\n"}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                }></FlatList>

        </View>
    );
}
export default FlatListComponent;