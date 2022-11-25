import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens';

export default function Cesta({ topo, detalhes, itens }) {
    return (
        <ScrollView>
            <View>
                <Topo {...topo} />
                <View style={estilos.cesta}>
                    <Detalhes {...detalhes} />
                        <Itens {...itens} />
                </View>
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})
