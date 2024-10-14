import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import RazaModalSelector from '../modals/RaceModalSelector';
import { Raza } from '../components/CharacterCreation/RaceSelector';
import SelectorDeClase, { Clase } from '../components/CharacterCreation/ClassSelector';
import SelectorDeTrasfondo, { Trasfondo } from '../components/CharacterCreation/BackgroundSelector';
import { estilosComunes } from '../styles/commonStyles';
import AbilityPoints from '../components/CharacterCreation/AbilityPoints';
import AbilitySelect from '../components/CharacterCreation/AbilitySelect';

type ListaParamRaizPila = {
  CreadorDePersonaje: undefined;
};

type PropNavegacionPantallaCreadorDePersonaje = StackNavigationProp<ListaParamRaizPila, 'CreadorDePersonaje'>;

type Props = {
  navigation: PropNavegacionPantallaCreadorDePersonaje;
};

const CharacterBuilderScreen: React.FC<Props> = () => {
  const [razaSeleccionada, setRazaSeleccionada] = useState<Raza | null>(null);
  const [claseSeleccionada, setClaseSeleccionada] = useState<Clase | null>(null);
  const [trasfondoSeleccionado, setTrasfondoSeleccionado] = useState<Trasfondo | null>(null);
  const [puntosHabilidad, setPuntosHabilidad] = useState<Record<string, number>>({});
  const [habilidadesSeleccionadas, setHabilidadesSeleccionadas] = useState<string[]>([]);

  return (
    <ImageBackground source={require('../assets/img/background.jpg')} style={estilosComunes.imagenFondo}>
      <View style={estilosComunes.overlay} />
      <ScrollView style={estilosComunes.contenedor}>
        <Text style={estilosComunes.title}>Creador de Personaje</Text>
        <RazaModalSelector razaSeleccionada={razaSeleccionada} alSeleccionarRaza={setRazaSeleccionada} />
        <SelectorDeClase claseSeleccionada={claseSeleccionada} alSeleccionarClase={setClaseSeleccionada} />
        <SelectorDeTrasfondo trasfondoSeleccionado={trasfondoSeleccionado} alSeleccionarTrasfondo={setTrasfondoSeleccionado} />
        <AbilityPoints puntosDisponibles={27} onPuntosDistribuidos={setPuntosHabilidad} />
        <AbilitySelect habilidadesDisponibles={['Acrobacias', 'Arcanos', 'Atletismo', 'Engaño', 'Historia']} cantidadSeleccionable={4} onHabilidadesSeleccionadas={setHabilidadesSeleccionadas} />
      </ScrollView>
    </ImageBackground>
  );
};

export default CharacterBuilderScreen;
