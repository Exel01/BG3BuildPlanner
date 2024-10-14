import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing  } from 'react-native-reanimated';
import { estilosComunes } from '../styles/commonStyles';

type RootStackParamList = {
  Home: undefined;
  CharacterBuilder: undefined;
  SavedBuilds: undefined;
  Settings: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const titleAnimation = useSharedValue(0);
  const buttonAnimation = useSharedValue(0);

  React.useEffect(() => {
    titleAnimation.value = withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) });
    buttonAnimation.value = withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) });
  }, []);


  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      opacity: titleAnimation.value,
    };
  });

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: buttonAnimation.value,
    };
  });

  return (
    <ImageBackground
      source={require('../assets/img/background.jpg')}
      style={estilosComunes.imagenFondo}
    >
      <View style={estilosComunes.overlay} />
      <View style={estilosComunes.container}>
        <Animated.Text style={[estilosComunes.title, animatedTitleStyle]}>
          Bienvenido al Creador de Builds de BG3
        </Animated.Text>

        <Animated.View style={[estilosComunes.button, animatedButtonStyle]}>
          <TouchableOpacity onPress={() => navigation.navigate('CharacterBuilder')}>
            <Text style={estilosComunes.buttonText}>Crear nuevo personaje</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[estilosComunes.button, animatedButtonStyle]}>
          <TouchableOpacity onPress={() => navigation.navigate('SavedBuilds')}>
            <Text style={estilosComunes.buttonText}>Builds Creadas</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[estilosComunes.button, animatedButtonStyle]}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text style={estilosComunes.buttonText}>Opciones</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};



export default HomeScreen;
