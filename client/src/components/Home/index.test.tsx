// import react-testing methods
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './index';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core';
import theme from '../../theme/theme';
import { Provider } from 'react-redux';
import store from '../../store/store';

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
