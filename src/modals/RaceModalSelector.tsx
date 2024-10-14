import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import { Raza } from '../components/CharacterCreation/RaceSelector';
import { estilosComunes } from '../styles/commonStyles';


type RazaModalSelectorProps = {
  razaSeleccionada: Raza | null;
  alSeleccionarRaza: (raza: Raza) => void;
};

const razas: Raza[] = ['Humano', 'Elfo', 'Enano', 'Mediano', 'Tiefling', 'Dracónido', 'SemiElfo', 'SemiOrco', 'Drow', 'Gnome', 'Githyanki'];

// Mapeo de razas a iconos
const razaIcons: { [key in Raza]: any } = {
  'Humano': require('../assets/img/races/150px-Race_Human.png'),
  'Elfo': require('../assets/img/races/150px-Race_Elf.png'),
  'Enano': require('../assets/img/races/150px-Race_Dwarf.png'),
  'Mediano': require('../assets/img/races/150px-Race_Halfling.png'),
  'Tiefling': require('../assets/img/races/150px-Race_Tiefling.png'),
  'Dracónido': require('../assets/img/races/150px-Race_Dragonborn.png'),
  'SemiElfo': require('../assets/img/races/150px-Race_Half-Elf.png'),
  'SemiOrco': require('../assets/img/races/150px-Race_Half-Orc.png'),
  'Drow': require('../assets/img/races/150px-Race_Drow.png'),
  'Gnome': require('../assets/img/races/150px-Race_Gnome.png'),
  'Githyanki': require('../assets/img/races/150px-Race_Githyanki.png'),
  
};

const RazaModalSelector: React.FC<RazaModalSelectorProps> = ({ razaSeleccionada, alSeleccionarRaza }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSeleccionarRaza = (raza: Raza) => {
    alSeleccionarRaza(raza);
    setModalVisible(false);
  };

  return (
<View style={styles.cardContainer}>
  {razas.map((raza) => (
    <TouchableOpacity key={raza} onPress={() => alSeleccionarRaza(raza)} style={[estilosComunes.boton,
      razaSeleccionada === raza && estilosComunes.botonSeleccionado]}>
      <Image source={razaIcons[raza]} style={estilosComunes.icon} />
      <Text style={estilosComunes.textoBoton}>{raza}</Text>
    </TouchableOpacity>
  ))}
</View>
  );
  
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default RazaModalSelector;
