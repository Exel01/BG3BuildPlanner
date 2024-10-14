import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { estilosComunes, colores } from '../../styles/commonStyles';
export type Clase = 'Guerrero' | 'Mago' | 'Pícaro' | 'Clérigo' | 'Explorador' | 'Paladín';

type PropsSelectorDeClase = {
  claseSeleccionada: Clase | null;
  alSeleccionarClase: (clase: Clase) => void;
};

const clases: Clase[] = ['Guerrero', 'Mago', 'Pícaro', 'Clérigo', 'Explorador', 'Paladín'];

const ClassSelector: React.FC<PropsSelectorDeClase> = ({ claseSeleccionada, alSeleccionarClase }) => {
  return (
    
    <View style={estilosComunes.contenedor}>
      <Text style={estilosComunes.subtitulo}>Selecciona Clase</Text>
      {clases.map((clase) => (
        <TouchableOpacity
          key={clase}
          style={[
            estilosComunes.boton,
            claseSeleccionada === clase && estilosComunes.botonSeleccionado
          ]}
          onPress={() => alSeleccionarClase(clase)}
        >
          <Text style={estilosComunes.textoBoton}>{clase}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};



export default ClassSelector;