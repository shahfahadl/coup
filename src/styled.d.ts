import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      black: string;
      grey: string;
      white: string;
      background: string;
    };
  }
}
