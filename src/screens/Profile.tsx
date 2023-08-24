import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, ScrollView, VStack, Skeleton, Text, Heading } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const PHOTO_SIZE = 33;

export function Profile() {

  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />
      <ScrollView>
        <Center mt={6} px={10}>
        {
          photoIsLoading ?
            <Skeleton 
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          :
            <UserPhoto 
              source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQH4n1pK_Trq6w/profile-displayphoto-shrink_200_200/0/1692649332700?e=1698278400&v=beta&t=GF3jV0hzrfatF495jsYm1WqLr-eQ5LprYE4erVr3O5o' }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
        }
        <TouchableOpacity>
          <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
            Alterar Foto
          </Text>
        </TouchableOpacity>
        </Center>
        <VStack px={10} mt={3} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2}>
            Alterar senha
          </Heading>

          <Input 
            bg="gray.600"
            placeholder="Senha antiga"
            secureTextEntry
          />

          <Input 
            bg="gray.600"
            placeholder="Nova senha"
            secureTextEntry
          />

          <Input 
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button title="Atualizar" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}