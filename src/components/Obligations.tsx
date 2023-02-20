import React from 'react'
import {
  Text,
  VStack
} from '@chakra-ui/react'

const Obligations = () => {
  return (
    <VStack gap={0.5} spacing={0.1}>
      <Text fontSize='2xl' fontWeight='semibold'>
        Obligations
      </Text>
      <Text>
        You're busy, so are we.
      </Text>
      <Text>
        Optional fireside chats once a month.
      </Text>
    </VStack>
  )
}

export default Obligations