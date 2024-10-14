import React from 'react';
import { View, Text, Switch } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Settings: undefined;
};

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;

type Props = {
  navigation: SettingsScreenNavigationProp;
};

const SettingsScreen: React.FC<Props> = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Settings</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <Text>Enable notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;