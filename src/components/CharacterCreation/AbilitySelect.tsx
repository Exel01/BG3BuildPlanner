import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { estilosComunes, colores } from '../../styles/commonStyles';

type Habilidad = 'Acrobacias' | 'Arcanos' | 'Atletismo' | 'Engaño' | 'Historia' | 'Intimidación' | 'Investigación' | 'Medicina' | 'Naturaleza' | 'Percepción' | 'Perspicacia' | 'Persuasión' | 'Religión' | 'Sigilo' | 'Supervivencia' | 'Trato con Animales';

type PropsSelectorDeHabilidades = {
  habilidadesDisponibles: Habilidad[];
  cantidadSeleccionable: number;
  onHabilidadesSeleccionadas: (habilidades: Habilidad[]) => void;
};

const SelectorDeHabilidades: React.FC<PropsSelectorDeHabilidades> = ({ habilidadesDisponibles, cantidadSeleccionable, onHabilidadesSeleccionadas }) => {
  const [habilidadesSeleccionadas, setHabilidadesSeleccionadas] = useState<Habilidad[]>([]);

  const toggleHabilidad = (habilidad: Habilidad) => {
    let nuevasHabilidades;
    if (habilidadesSeleccionadas.includes(habilidad)) {
      nuevasHabilidades = habilidadesSeleccionadas.filter(h => h !== habilidad);
    } else if (habilidadesSeleccionadas.length < cantidadSeleccionable) {
      nuevasHabilidades = [...habilidadesSeleccionadas, habilidad];
    } else {
      return; // No se pueden seleccionar más habilidades
    }
    setHabilidadesSeleccionadas(nuevasHabilidades);
    onHabilidadesSeleccionadas(nuevasHabilidades);
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilosComunes.subtitulo}>Selecciona tus Habilidades</Text>
      <Text style={estilos.instrucciones}>Elige {cantidadSeleccionable} habilidades:</Text>
      {habilidadesDisponibles.map((habilidad) => (
        <TouchableOpacity
          key={habilidad}
          style={[
            estilosComunes.boton,
            habilidadesSeleccionadas.includes(habilidad) && estilosComunes.botonSeleccionado
          ]}
          onPress={() => toggleHabilidad(habilidad)}
        >
          <Text style={[
            estilosComunes.textoBoton,
            habilidadesSeleccionadas.includes(habilidad) && estilosComunes.textoBotonSeleccionado
          ]}>{habilidad}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    marginBottom: 20,
  },
  instrucciones: {
    color: colores.texto,
    fontSize: 16,
    marginBottom: 10,
  },
});

export default SelectorDeHabilidades;