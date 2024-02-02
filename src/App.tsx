import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App(){

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
  )

}
