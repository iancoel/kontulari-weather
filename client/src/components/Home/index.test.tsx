// import dependencies
import React from 'react';

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
import Home from './index';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core';
import theme from '../../theme/theme';
import store from '../../store/store';
import { Provider } from 'react-redux';

const homeWithMocks = () =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <Home />
        </StylesProvider>
      </ThemeProvider>
    </Provider>,
  );

describe('Static events', () => {
  test('Loads initial screen properly', () => {
    homeWithMocks();
    const title = screen.getByText('Kontulari - Weather');
    const inputBox = screen.getByRole('textbox');
    expect(title).toBeInTheDocument();
    expect(inputBox).toBeInTheDocument();
  });
});
