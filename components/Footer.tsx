import React from 'react';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  Button,
  Footer as BaseFooter,
  FooterTab,
  Icon,
  Text,
} from 'native-base';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';

interface ICompanyFooter {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const Footer: React.FC<ICompanyFooter> = ({ navigation }) => {
  return (
    <BaseFooter>
      <FooterTab>
        <Button vertical onPress={() => navigation.navigate('Home')}>
          <Icon type="FontAwesome5" name="tint" />
          <Text>Home</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Statistics')}>
          <Icon type="FontAwesome5" name="chart-bar" />
          <Text>Estatísticas</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Settings')}>
          <Icon type="FontAwesome5" name="cog" />
          <Text>Configurações</Text>
        </Button>
      </FooterTab>
    </BaseFooter>
  );
};

export default Footer;
