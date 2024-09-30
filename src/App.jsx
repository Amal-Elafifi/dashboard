import {Routes, Route} from "react-router-dom";
import {ColorModeContext, UseMode} from "./themes.js";
import {CssBaseline, ThemeProvider}from '@mui/material';
import TopBar from "./scenes/global/TopBar";
import Dashboard from "./scenes/dashboard/Dashboard.jsx";


const App = () => {
  const [theme, colorMode] = UseMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <main className="content">
              <TopBar/>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;