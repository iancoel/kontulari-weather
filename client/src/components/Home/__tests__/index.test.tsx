// import react-testing methods
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../index';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core';
import theme from '../../../theme/theme';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import { useSelector } from 'react-redux';
import * as reactRedux from 'react-redux';

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

describe('Dynamic events', () => {
  test('Changes input value after a change event', () => {
    homeWithMocks();
    const inputBox = screen.getByRole('textbox');

    fireEvent.change(inputBox, { target: { value: 'Salvador' } });
    expect(inputBox.value).toBe('Salvador');
  });

  test('Capitalize function after a change event works', () => {
    homeWithMocks();
    const inputBox = screen.getByRole('textbox');

    fireEvent.change(inputBox, { target: { value: 'brasília' } });
    expect(inputBox.value).toBe('Brasília');
  });

  // test('Changes global state value after a change event', () => {
  //   homeWithMocks();
  //   const inputBox = screen.getByRole('textbox');
  //   const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  //   const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  //   useSelectorMock.mockReturnValue('');

  //   fireEvent.change(inputBox, { target: { value: 'brasília' } });

  //   expect(inputBox.value).toBe('Brasília');
  // });
});
