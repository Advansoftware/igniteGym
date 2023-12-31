import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreeHeader } from "@components/SceenHeader";
import { UserPhoto } from "@components/UserPhoto";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { Center, Heading, ScrollView, Skeleton, Text, VStack, useToast } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
const PHOTO_SIZE = 33;
export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState('https://github.com/advansoftware.png');
  const toast = useToast()
  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true)
    try {
        const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });
      if (photoSelected.canceled) {
        return;
      }
      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);
        if (photoInfo.exists && (photoInfo.size / 1024 / 1024) > 5) {
          return toast.show({
            title: 'Esta image é muito grande. escolha uma de até 5 Mb',
            placement: 'top',
            bgColor:'red.500'
          });
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
      <ScreeHeader title="Perfil" />
      <ScrollView contentContainerStyle={{paddingBottom: 56}}>
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
                alt="Foto do Usuario"
                size={PHOTO_SIZE}
              />
          }
          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Alterar Foto 
            </Text>
          </TouchableOpacity>
          <Input
            placeholder="Nome"
            bg="gray.600"
          />
          <Input
            placeholder="E-mail"
            bg="gray.600"
            value="bruno@gmail.com"
            isDisabled
          />
          </Center>
          <Heading color="gray.200" fontSize="md"px={10} mt={8}>
            Alterar Senha
          </Heading>
          <Center mt={6} px={10}>
          <Input
            placeholder="Senha antiga"
            bg="gray.600"
            secureTextEntry
          />
          <Input
            placeholder="Nova senha"
            bg="gray.600"
            secureTextEntry
          />
          <Input
            placeholder="Confirmar nova senha"
            bg="gray.600"
            secureTextEntry
          />
          <Button
            title="Atualizar"
            mt={4}
          />
          </Center>
      </ScrollView>
    </VStack>
  )
}