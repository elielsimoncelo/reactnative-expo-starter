import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Texto from './Texto';

export default function Botao({ children, style }) {
    const estiloBotao = {
        ...estilos.botao,
        backgroundColor: style?.backgroundColor ?? "#2A9F85"
    };
    
    const estiloTexto = {
        ...estilos.textoBotao,
        color: style?.color ?? "#FFF",
    };

    return <>
        <TouchableOpacity style={estiloBotao} onPress={() => {}}>
            <Texto style={estiloTexto}>{children}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    }
})
