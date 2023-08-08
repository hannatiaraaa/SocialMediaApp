import {createRef} from 'react';
import {StackActions} from '@react-navigation/native';

export const nav = createRef();

// navigation function
export const navigate = (name, params) => {
  nav.current?.navigate(name, params);
};

// For hooks navigation
export const useCurrentNavigation = () => {
  const push = (name, params) => {
    nav.current?.dispatch(StackActions.push(name, params));
  };

  return {navigate, push};
};
