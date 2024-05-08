import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, Image, Modal } from 'react-native';
import axios from 'axios';
import styles from '@/components/Style';

const App = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [visivel ,setVisivel] = useState(false)

{/* A funçãao async fetchAddress, tenta conectar com a API de CEP, 
e espera encontrar a localização pesquisa (A ideia é que enquanto ela opera, 
ela não atrapalhe outras funcionalidades do aplicativo), caso ela encontrar dados inseridos
ela muda o estado da constante visivel para true, "abrindo" o modal na tela,
se caso ela não encontrar nenhum dado inserido no TextInput,
 o catch captura o erro e emite um console alerta*/}

  const fetchAddress = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
      setVisivel(true);
    } catch (error) {
      console.error('Error fetching address:', error);
      setAddress(null);
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Square} >
        <Image style={styles.Logo} source={require('../../assets/images/LogoMap.png')}/>
      <TextInput
      style={styles.Input}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />
      <Pressable onPress={fetchAddress} style={styles.Button}>
        <Text style={styles.ButtonTxt} >Encontrar</Text>
      </Pressable>
      </View>

      <Modal visible={visivel} transparent={true} >
        <View style={styles.ContainerB} >
        <View style={styles.Square} >
      {address && (
        <View style={{justifyContent: 'center', gap: 10, margin: '20%',}} >
          <Text>CEP: {address.cep}</Text>
          <Text>Rua: {address.logradouro}</Text>
          <Text>Bairro: {address.bairro}</Text>
          <Text>Cidade: {address.localidade}</Text>
          <Text>Estado: {address.uf}</Text>
        </View>
      )}
      <Pressable onPress={() => setVisivel(false)} style={styles.Button}>
        <Text style={styles.ButtonTxt} >Pesquisar novo CEP</Text>
      </Pressable>
      </View>
      </View>
      </Modal>
    </View>
  );
};

export default App;