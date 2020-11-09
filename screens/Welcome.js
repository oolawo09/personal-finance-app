import React from 'react';
import { Animated, Dimensions, FlatList, Image, StyleSheet } from 'react-native'; //TODO: complete illustrations section after debugging exactly why the defaualt prps seem inaccessible
import { Block, Button, Text } from '../components';
import { theme } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';

export default class Welcome extends React.Component {
  static navigationOptions = {
    header: null
  }

  state = {}

  static defaultProps = {
    illustrations: [
      { id: 1, source: require('../assets/images/illustration_1.png') },
      { id: 2, source: require('../assets/images/illustration_2.png') },
      { id: 3, source: require('../assets/images/illustration_3.png') },
    ],
  }

  scrollX = new Animated.Value(0);
  


  renderIllustrations() {
    const { illustrations } = this.props;

    return <FlatList
      horizontal
      pagingEnabled
      scrollEnabled
      showHorizontalScrollingIndicator={false}
      scrollEventThrottle={16}
      snapToAlignment="center"
      data={illustrations}
      extraDate={this.state}
      keyExtractor={(item, index) => `${item.id}`}
      renderItem={({ item }) => (
        <Image
          source={item.source}
          resizeMode="contain"
          style={{ width, height: height / 2, overflow: 'visible' }}
        />
      )}
      onScroll={
        Animated.event([{
          nativeEvent: { contentOffset: { x: this.scrollX } }
        }])
      }
    />
  }

  renderSteps() {
    const { illustrations } = this.props
    
    const stepPosition = Animated.divide(this.scrollX, width);

    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          )
        })}
      </Block>
    )
  }

  render() {
    return (
      <Block>
        <Block center bottom flex={0.4}>
          <Text h1 center bold>
            Chapaa
              </Text>
          <Text h4 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
            We'll help you manage your money better.
              </Text>
        </Block>
        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
          <Button gradient>
            <Text center semibold white>Login</Text>
          </Button>
          <Button shadow>
            <Text center semibold>Signup</Text>
          </Button>
          <Button>
            <Text center caption gray>Terms of service</Text>
          </Button>
        </Block>
      </Block>

    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  stepsContainer: {
    position: 'absolute',
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
});


/**
 *
 * TODO:
 * - learn more about how the animate component works
 * - hide horizontal scrollbar underneath the illustrations
 * - illustrations are really tiny for some reason now 
 */

