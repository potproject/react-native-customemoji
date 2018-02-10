import React from "react";
import "react-native";
import CustomEmoji from "react-native-customemoji";
import renderer from 'react-test-renderer';
import App from '../App';

test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});