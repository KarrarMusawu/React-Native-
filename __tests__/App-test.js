import 'react-native';
import React from 'react';
import HomeScreen from '../src/screens/HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
};

it('renders HomeScreen correctly', () => {
  renderer.create(<HomeScreen navigation={mockNavigation} />);
});

it('renders without crashing', () => {
  const tree = renderer.create(<HomeScreen navigation={mockNavigation} />);
  expect(tree).toBeTruthy();
});
