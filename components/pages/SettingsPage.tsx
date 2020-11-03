import React from 'react';
import { Container, Content, H1, Text, View } from 'native-base';

const SettingsPage: React.FC = () => {
  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <H1>Bem vindo ao SmartBottleApp!</H1>
          <Text style={{ marginTop: 8, textAlign: 'center' }}>
            Settings Page
          </Text>
        </View>
      </Content>
    </Container>
  );
};

export default SettingsPage;
