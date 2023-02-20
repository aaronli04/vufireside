import React from 'react'
import {
    Text,
    VStack,
    OrderedList,
    ListItem
} from '@chakra-ui/react'

const Thesis = () => {
    return (
        <VStack gap={0.5} spacing={0.1}>
            <Text fontSize='2xl' fontWeight='semibold'>
                Thesis + Assumptions
            </Text>
            <OrderedList>
                <ListItem>
                    Most creating can only be sustainably done through the markets or politics. Those are the two best avenues to change the world.
                </ListItem>
                <ListItem>
                    Right now, most high-achieving Vanderbilt students go into IB/Consulting/BigTech with some going Quant/PE.
                </ListItem>
                <ListItem>
                    While those jobs offer great stability and pay, personal responsibility and impact are often low.
                </ListItem>
                <ListItem>
                    There&apos;s a clear lack of top Vanderbilt students going into start-ups and policy.
                </ListItem>
                <ListItem>
                    A large reason for this is the high amount of risk. An immediate career in these fields may not be possible due to familial and financial obligation.
                </ListItem>
                <ListItem>
                    By accelerating skills and network development, Fireside will be able to help members hit the ground running when the opportunity arises.
                </ListItem>
            </OrderedList>
        </VStack>
    )
}

export default Thesis