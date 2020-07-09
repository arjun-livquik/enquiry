import React from 'react';
export const createStackNavigator = () => ({
  Navigator: ({children}) => children,
  Screen: ({children}) => <children />,
});
