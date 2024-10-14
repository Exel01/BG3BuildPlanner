import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { estilosComunes, colores } from '../../styles/commonStyles';
import DropDownPicker from 'react-native-dropdown-picker';


export type Raza = 'Humano' | 'Elfo' | 'Enano' | 'Mediano' | 'Tiefling' | 'Dracónido' | 'SemiElfo'| 'SemiOrco' |'Drow'|'Gnome'|'Githyanki';

type PropsSelectorDeRaza = {
  razaSeleccionada: Raza | null;
  alSeleccionarRaza: (raza: Raza) => void;
};

const razas: Raza[] = ['Humano', 'Elfo', 'Enano', 'Mediano', 'Tiefling', 'Dracónido','SemiElfo','SemiOrco','Drow','Gnome','Githyanki'];

const RaceSelector: React.FC<PropsSelectorDeRaza> = ({ razaSeleccionada, alSeleccionarRaza }) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
      {label: 'Humano', value: 'humano'},
      {label: 'Elfo', value: 'elfo'},
      {label: 'Enano', value: 'enano'},
      {label: 'Mediano', value: 'mediano'},
      {label: 'Tiefling', value: 'tiefling'},
      {label: 'Dracónido', value: 'draconido'},
      {label: 'SemiElfo', value: 'semielfo'},
      {label: 'SemiOrco', value: 'semiorco'},
      {label: 'Drow', value: 'drow'},
      {label: 'Gnome', value: 'gnome'},
      {label: 'Githyanki', value: 'githyanki'},
  ]);
  return (
    <View style={estilosComunes.contenedor}>
      <Text style={estilosComunes.subtitulo}>Selecciona tu Raza</Text>
      <View style={{ marginBottom: 200, zIndex: 1000 }}>
      <DropDownPicker
    open={open}
    value={value}
    items={items}
    setOpen={setOpen}
    setValue={setValue}
    setItems={setItems}
    placeholder="Elije una Raza"
    
  />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    marginBottom: 20,
  },
  dropdownContainer: {
    zIndex: 1000, // Asegúrate de que el zIndex sea alto
  },
});


export default RaceSelector;