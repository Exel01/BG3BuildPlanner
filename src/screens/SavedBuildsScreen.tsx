import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SavedBuilds: undefined;
};

type SavedBuildsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SavedBuilds'>;

type Props = {
  navigation: SavedBuildsScreenNavigationProp;
};

// Definimos un tipo para un build guardado
type SavedBuild = {
  id: string;
  name: string;
  race: string;
  class: string;
  level: number;
  // Añade más propiedades según sea necesario
};

const SavedBuildsScreen: React.FC<Props> = () => {
  // Inicializamos savedBuilds como un array vacío de tipo SavedBuild
  const [savedBuilds, setSavedBuilds] = React.useState<SavedBuild[]>([]);

  // Aquí podrías cargar los builds guardados, por ejemplo:
  React.useEffect(() => {
    // Esta es una función de ejemplo. En una aplicación real,
    // aquí cargarías los datos desde el almacenamiento local o una API.
    const loadSavedBuilds = async () => {
      // Simula la carga de datos
      const mockBuilds: SavedBuild[] = [
        { id: '1', name: 'Warrior', race: 'Human', class: 'Fighter', level: 5 },
        { id: '2', name: 'Mage', race: 'Elf', class: 'Wizard', level: 3 },
      ];
      setSavedBuilds(mockBuilds);
    };

    loadSavedBuilds();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Saved Builds</Text>
      <FlatList
        data={savedBuilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{`${item.race} ${item.class}, Level ${item.level}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SavedBuildsScreen;