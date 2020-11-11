import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { theme, mock } from '../constants';
import { Button, Block, Text } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Home extends React.Component {
    static defaultProps = {
        profile: mock.profile
    }

    state = {
        active: 'debts',
    }

    renderTab(tab) {
        const { active } = this.state;
        const isActive = active === tab;
        return (
            <TouchableOpacity
                key={`tab-${tab}`}
                style={[
                    styles.tab,
                    isActive ? styles.active : null
                ]}
                onPress={() => this.setState({ active: tab })}
            >
                <Text size={16} medium gray={!isActive} secondary={isActive}>
                    {tab}
                </Text>
            </TouchableOpacity>
        )
    }


    render() {
        const { profile, navigation, categories } = this.props;
        const tabs = ['owed', 'due'];
        //TODO: insert actual avatar. Figure out bug: https://github.com/facebook/react-native/issues/16332
        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>Home</Text>
                    <Button onPress={() => navigation.navigate('Settings')}>
                        <Image source={profile.avatar} style={styles.avatar}/>
                    </Button>
                </Block>
                <Block flex={false} row style={styles.tabs}>
                    {tabs.map(tab => this.renderTab(tab))}
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
        height: theme.sizes.base * 3,
        width: theme.sizes.base * 3,
        backgroundColor : '#f2f2f2',
    },
    tabs: {
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: 0.5,                    //for iOS : StyleSheet.hairLineWidth
        marginVertical: theme.sizes.base,
        marginHorizontal: theme.sizes.base * 8,
    },
    tab: {
        marginRight: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base
    },
    active: {
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 3,
    }
});




/**
 *
 * TODO: fix this import undefined error / issue
 */