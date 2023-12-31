import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps  } from "react-native";
import { Entypo } from "@expo/vector-icons"
type Props = TouchableOpacityProps & {

  
}
export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity { ...rest }>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <Image
          source={{ uri: 'https://img-21.ccm2.net/8wIDT3zbjhB9c6X6R1Yppah7WCU=/a17964f5082143548b181226cb24aa02/ccm-faq/1088618.jpg' }}
          alt="image do exercicio"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            Remada Unilateral
          </Heading>
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 series x 12 repetições
          </Text>
        </VStack>
        <Icon
          as={Entypo}
          name="chevron-thin-right"
          color="gray.300"
        />
      </HStack>
    </TouchableOpacity>
  )
}