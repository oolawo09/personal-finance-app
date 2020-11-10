import React from 'react';
import { StyleSheet } from 'react-native';
import { theme, mock } from '../constants';
import { Button, Block, Image, Text } from '../components';


export default class Browse extends React.Component {
    static defaultProps = { 
        profile: mock.profile
    }

    
    render() {
        const { profile } = this.props;
        
        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                  <Text h1 bold>Home</Text>
                  <Button>
                      <Image source={profile.avatar} style={styles.avatar}/>
                  </Button>
                  </Block>
            </Block>
          );
    }

}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2,
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2,
      },
});


/**
 * 
 * TODO: fix this import undefined error / issue 
 */