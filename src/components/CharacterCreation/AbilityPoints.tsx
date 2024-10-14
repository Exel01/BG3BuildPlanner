import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { estilosComunes, colores } from '../../styles/commonStyles';

type Habilidad = 'Fuerza' | 'Destreza' | 'Constitución' | 'Inteligencia' | 'Sabiduría' | 'Carisma';

type PropsDistribuidorPuntosHabilidad = {
  puntosDisponibles: number;
  onPuntosDistribuidos: (habilidades: Record<Habilidad, number>) => void;
};

const habilidades: Habilidad[] = ['Fuerza', 'Destreza', 'Constitución', 'Inteligencia', 'Sabiduría', 'Carisma'];

const DistribuidorPuntosHabilidad: React.FC<PropsDistribuidorPuntosHabilidad> = ({ puntosDisponibles, onPuntosDistribuidos }) => {
  const [puntosHabilidad, setPuntosHabilidad] = useState<Record<Habilidad, number>>({
    Fuerza: 8,
    Destreza: 8,
    Constitución: 8,
    Inteligencia: 8,
    Sabiduría: 8,
    Carisma: 8
  });

  const modificarPuntos = (habilidad: Habilidad, incremento: boolean) => {
    const nuevoPuntaje = puntosHabilidad[habilidad] + (incremento ? 1 : -1);
    if (nuevoPuntaje >= 8 && nuevoPuntaje <= 15 && puntosDisponibles - (incremento ? 1 : -1) >= 0) {
      const nuevosPuntos = { ...puntosHabilidad, [habilidad]: nuevoPuntaje };
      setPuntosHabilidad(nuevosPuntos);
      onPuntosDistribuidos(nuevosPuntos);
    }
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilosComunes.subtitulo}>Distribuye tus Puntos de Habilidad</Text>
      <Text style={estilos.puntosDisponibles}>Puntos disponibles: {puntosDisponibles}</Text>
      {habilidades.map((habilidad) => (
        <View key={habilidad} style={estilos.filaHabilidad}>
          <Text style={estilos.textoHabilidad}>{habilidad}</Text>
          <View style={estilos.controladores}>
            <TouchableOpacity onPress={() => modificarPuntos(habilidad, false)} style={estilos.botonControl}>
              <Text style={estilos.textoBotonControl}>-</Text>
            </TouchableOpacity>
            <Text style={estilos.valorHabilidad}>{puntosHabilidad[habilidad]}</Text>
            <TouchableOpacity onPress={() => modificarPuntos(habilidad, true)} style={estilos.botonControl}>
              <Text style={estilos.textoBotonControl}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    marginBottom: 20,
  },
  puntosDisponibles: {
    color: colores.primario,
    fontSize: 18,
    marginBottom: 10,
  },
  filaHabilidad: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  textoHabilidad: {
    color: colores.texto,
    fontSize: 16,
  },
  controladores: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botonControl: {
    backgroundColor: colores.boton,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  textoBotonControl: {
    color: colores.texto,
    fontSize: 18,
    fontWeight: 'bold',
  },
  valorHabilidad: {
    color: colores.primario,
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default DistribuidorPuntosHabilidad;