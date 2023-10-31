import { HistoryCard } from "@components/HistoryCard";
import { ScreeHeader } from "@components/SceenHeader";
import { Heading, VStack, SectionList, Text } from "native-base";
import { useState } from "react";

export function History() {
  const [exercises, setExercises] = useState([{
    title: '26.8.22',
    data: ['Puxada Frontal','Remada Unilateral']
  },
  {
    title: '27.8.22',
    data: ['Puxada Frontal','Remada Unilateral']
  }
  ]);
  return (
    <VStack flex={1}>
      <ScreeHeader title="Historico de exercicios" />
      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={exercises.length === 0 && {flex:1, justifyContent: 'center'}}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center" >
            Não existe exercicios registrados ainda.{'\n'}
            Vamos treinar hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}