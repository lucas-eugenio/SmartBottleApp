import React from 'react';
import { Container, Content, H1, Text, View } from 'native-base';

const StatisticsPage: React.FC = () => {
  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <H1>Bem vindo ao SmartBottleApp!</H1>
          <Text style={{ marginTop: 8, textAlign: 'center' }}>
            Statistics Page
          </Text>
        </View>
      </Content>
    </Container>
  );
};

export default StatisticsPage;
