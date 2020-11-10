import React from 'react';
import {
  Button,
  Container,
  Content,
  H1,
  Icon,
  Spinner,
  Text,
  View,
} from 'native-base';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <H1>Bem vindo ao SmartBottleApp!</H1>
          <Text style={{ marginTop: 8, textAlign: 'center' }}>
            Faça login ou cadastre-se para usar
          </Text>
        </View>
      </Content>
    </Container>
  );
};

export default HomePage;
