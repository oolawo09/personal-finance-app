import React from 'react';
import { Image, StyleSheet, FlatList } from 'react-native';
import { theme, mock } from '../constants';
import { Button, Block, Text } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Home extends React.Component {
    static defaultProps = {
        profile: mock.profile,
        debts: mock.all_debts,
    }

    state = {
        active: 'owed',
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

    renderItem({ item }) {
        return (
            <Block style={styles.debt}>
                <Block row space="between">
                    <Image source={item.avatar} style={styles.avatar}></Image>
                    <Text bold>ksh. {item.amount}</Text>
                </Block>
                <Block>
                    <Text>{item.creditor} owes {item.debtor} for '{item.description}'</Text>
                </Block>
            </Block>

        )

    }

    renderDebtList() {
        /**
         * TODO:
         * Render a list of debtors and creditors, dependening on what tab is active. 
         * Allow a user to search for a list item  
         * Each list item will be in the format: 
         *          [creditor avatar] sent [debtor avatar] [amount] for [description]. 
         */

        /**
         * fixes: format each debt item better, and draw debt data from the mock module 
         */

        const { debts } = this.props

        return (
            <FlatList
                data={debts}
                renderItem={this.renderItem}
                keyExtractor={debt => debt.id}
            />

        );
    }

    render() {
        const { profile, navigation } = this.props;
        const tabs = ['owed', 'due'];
        //TODO: insert actual avatar. Figure out bug: https://github.com/facebook/react-native/issues/16332
        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>Home</Text>
                    <Button onPress={() => navigation.navigate('Settings')}>
                        <Image source={profile.avatar} style={styles.avatar} />
                    </Button>
                </Block>
                <Block flex={false} row style={styles.tabs}>
                    {tabs.map(tab => this.renderTab(tab))}
                </Block>
                <Block flex={false} row>
                    {this.renderDebtList()}
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
        backgroundColor: '#f2f2f2',
    },
    debt: {
        marginHorizontal: theme.sizes.base * 2,
        borderBottomWidth: 0.5,                    //for iOS : StyleSheet.hairLineWidth
        borderBottomColor: theme.colors.gray2,
        paddingBottom: theme.sizes.base * 0.5,
        paddingTop: theme.sizes.base * 0.5,

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