import React from 'react';
import { HStack, Text } from 'native-base';

export interface OrderProps {
  id: string;
  patrimony: string;
  when: string;
  status: 'open' | 'closed';
}

interface Props {
  data: OrderProps;
}

export function Order({ data, ...rest }: Props) {
  return (
    <HStack>
      <Text color="white" fontSize="md">
        Patrimônio: {data.patrimony}
      </Text>
    </HStack>
  );
}
