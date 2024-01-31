import { ButtonContainer } from "./components/Button.styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonContainer variant="primary" />
      <ButtonContainer variant="secondary" />
    </ThemeProvider>
  );
}

export default App;
