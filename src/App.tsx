import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IssuesProvider } from "./contexts/IssuesContext";

export function App(){

  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <IssuesProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </IssuesProvider>
        </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )

}
