import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IssuesProvider } from "./contexts/IssuesContext";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Issues } from "./pages/Issues";

export function App(){

  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <IssuesProvider>
            <Routes>
              <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/post/:id" element={<Issues />}/>
              </Route>
            </Routes>
          </IssuesProvider>
        </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )

}
