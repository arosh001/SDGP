# Contents

- [The package](#react-native-responsive-screens)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)

# react-native-responsive-screens

<i>react-native-responsive-screens</i> is a small library that provides 4 simple methods so that React Native developers can code their UI elements fully responsive. No media queries needed.

It also provides an optional third method for screen orientation detection and automatic rerendering according to new dimensions.

# Installation

`npm install react-native-responsive-screens --save`

or

`yarn add react-native-responsive-screens`

# Usage

- After the package has installed, when application loads (in real device and/or emulator), it detects the screen's width and height.
- The package exposes 4 basic methods: `widthToDP`, `heightToDP`, `widthToFonts` and `heightToFonts`. Their names essentially mean that you can supply a "percentage like" string value to each method and it will return the DP (independent pixel) that correspond to the supplied percentage of current screen's width/height respectivelly.
- Methods `widthToDP` and `heightToDP` can be used for any style (CSS) property that accepts DP as value. DP values are the ones of type `number` over the props mentioned in RN docs: [View style props](https://facebook.github.io/react-native/docs/view-style-props.html), [Text style props](https://facebook.github.io/react-native/docs/text-style-props.html), [Image style props](https://facebook.github.io/react-native/docs/image-style-props.html), [Layout props](https://facebook.github.io/react-native/docs/layout-props.html) and [Shadow props](https://facebook.github.io/react-native/docs/shadow-props.html). Use the exposed methods for all of the type `number` properties used in your app in order to make your app fully responsive for all screen sizes.
- You can also provide decimal values to these 4 methods, i.e. `font-size: widthToFonts('3.75%')`.
- The package methods can be used with or without flex depending on what you want to do and how you choose to implement it.
- The suggested approach is to start developing from larger screens (i.e. tablets). That way you are less prone to forget adding responsive values for all properties of type `number`.
- There are 2 more methods to use if you want to support responsiveness along with orientation change. These are `useOrientationChange` and `removeOrientationListener`. To see how to use them, check example number 2.
- You can use this package along with `styled-components`.

# Examples

## 1. How to use with StyleSheet.create() without orientation change support

```javascript

import {
  widthToDP as wp,
  heightToDP as hp,
  widthToFonts as wf,
  heightToFonts as hf,
} from "react-native-responsive-screens";

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Login</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height: hp("70%"),
    width: wp("80%"),
  },
  myText: {
    fontSize: wf("5%"),
});

export default Login;

```

## 2. How to use with StyleSheet.create() with orientation change support


````javascript

import {
  widthToDP as wp,
  heightToDP as hp,
  useOrientationChange as uoc,
  removeOrientationListener as rol,
} from "react-native-responsive-screens";

class Login extends Component {
  componentDidMount() {
    uoc(this);
  }

  componentWillUnmount() {
    rol();
  }

  render() {
    const styles = StyleSheet.create({
      container: { flex: 1 },
      textWrapper: {
        height: hp("70%"),
        width: wp("80%"),
      },
      myText: { fontSize: hp("5%") },
    });

    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Login</Text>
        </View>
      </View>
    );
  }
}

export default Login;

````
