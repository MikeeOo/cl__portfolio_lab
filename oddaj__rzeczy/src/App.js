import {ThemeProvider} from "styled-components";
import {theme} from "./styled/base/theme";

import Reset from "./styled/base/Reset";
import GlobalStyles from "./styled/base/GlobalStyles";

import {Container} from "./styled/base/Container";

import Router from "./router/Router";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <>
              <Reset/>
              <GlobalStyles/>

              <Container>
                  <Router/>

              </Container>

          </>

      </ThemeProvider>
  );
}

export default App;