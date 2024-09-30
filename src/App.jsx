import {ColorModeContext, UseMode} from "./themes.js";
import {CssBaseline, ThemeProvider}from '@mui/material';
import TopBar from "./scenes/global/TopBar";


const App = () => {
  const [theme, colorMode] = UseMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <main className="content">
              <TopBar/>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;