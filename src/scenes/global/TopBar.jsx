import { useContext } from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import { useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../themes";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{display: "flex", justifyContent: "space-between", p: 2}}>
      {/* search Bar */}
      <Box sx={{display: "flex", borderRadius: "3px", background: `${colors.primary[400]}`}}>
        <InputBase sx={{ml: 2, flex: 1 }} placeholder="Search"/>
        <IconButton type="button" sx={{p: 1}}>
          <SearchOutlinedIcon/>
        </IconButton>
      </Box>
      {/* icons */}
      <Box sx={{display: "flex", ml: 1}}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark"? 
            ( <DarkModeOutlinedIcon/>)
           : (<LightModeOutlinedIcon/>)
          }
        </IconButton>
        <IconButton>
            <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
            <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default TopBar;