import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { estilosComunes } from '../../styles/commonStyles';
export type Trasfondo = 'Acólito' | 'Criminal' | 'Héroe del Pueblo' | 'Noble' | 'Sabio' | 'Soldado';

type PropsSelectorDeTrasfondo = {
  trasfondoSeleccionado: Trasfondo | null;
  alSeleccionarTrasfondo: (trasfondo: Trasfondo) => void;
};

const trasfondos: Trasfondo[] = ['Acólito', 'Criminal', 'Héroe del Pueblo', 'Noble', 'Sabio', 'Soldado'];

const BackgroundSelector: React.FC<PropsSelectorDeTrasfondo> = ({ trasfondoSeleccionado, alSeleccionarTrasfondo }) => {
  return (
    <View style={estilosComunes.contenedor}>
      <Text style={estilosComunes.subtitulo}>Selecciona Trasfondo</Text>
      {trasfondos.map((trasfondo) => (
        <TouchableOpacity
          key={trasfondo}
          style={[
            estilosComunes.boton,
            trasfondoSeleccionado === trasfondo && estilosComunes.botonSeleccionado
          ]}
          onPress={() => alSeleccionarTrasfondo(trasfondo)}
        >
          <Text style={estilosComunes.textoBoton}>{trasfondo}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};



export default BackgroundSelector;