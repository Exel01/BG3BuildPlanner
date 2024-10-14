import React, { createContext, useState, ReactNode } from 'react';

type Character = {
  name: string;
  race: string;
  class: string;
  // Añade más propiedades según sea necesario
};

type CharacterContextType = {
  character: Character;
  updateCharacter: (updates: Partial<Character>) => void;
};

export const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

type CharacterProviderProps = {
  children: ReactNode;
};

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [character, setCharacter] = useState<Character>({
    name: '',
    race: '',
    class: '',
  });

  const updateCharacter = (updates: Partial<Character>) => {
    setCharacter(prevCharacter => ({ ...prevCharacter, ...updates }));
  };

  return (
    <CharacterContext.Provider value={{ character, updateCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};