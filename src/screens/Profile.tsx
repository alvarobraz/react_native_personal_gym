import { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { Center, ScrollView, VStack, Skeleton, Text, Heading, useToast } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';


import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { FileInfo } from "expo-file-system";

const PHOTO_SIZE = 33;

export function Profile() {

  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState('https://media.licdn.com/dms/image/D4D03AQH4n1pK_Trq6w/profile-displayphoto-shrink_200_200/0/1692649332700?e=1698278400&v=beta&t=GF3jV0hzrfatF495jsYm1WqLr-eQ5LprYE4erVr3O5o');

  const toast = useToast();

  async function handleUserPhotoSelected(){

    setPhotoIsLoading(true);

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if(photoSelected.canceled) {
        return;
      }

			if(photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri) as FileInfo;

        if(photoInfo.size && (photoInfo.size  / 1024 / 1024 ) > 0){

          return toast.show({
            title: 'Essa imagem é muito grande. Escolha uma de até 2MB.',
            placement: 'top',
            bgColor: 'red.500'
          })
        }
        
        setUserPhoto(photoSelected.assets[0].uri);
      }
      

	  } catch (error) {
	    console.log(error)
	  } finally {
	    setPhotoIsLoading(false)
	  }
  }

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
              source={{ uri: userPhoto }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
        }
        <TouchableOpacity onPress={handleUserPhotoSelected}>
          <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
            Alterar Foto
          </Text>
        </TouchableOpacity>
        </Center>
        <VStack px={10} mt={3} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2} alignSelf="flex-start" mt={12} fontFamily="heading">
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