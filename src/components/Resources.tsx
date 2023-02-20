import React from 'react'
import {
  Text,
  VStack
} from '@chakra-ui/react'

const Resources = () => {
  return (
    <VStack gap={0.5} spacing={0.1}>
      <Text fontSize='2xl' fontWeight='semibold'>
        Resources
      </Text>
      <Text>
        The smartest, coolest people at Vanderbilt
      </Text>
      <Text>
        Exclusive fireside chats with leading policymakers, venture-backed founders, and VCs
      </Text>
    </VStack>
  )
}

export default Resources