import React, { useState } from "react";
import { 
    AppBar, 
    Box, 
    Button,
    Container, 
    IconButton, 
    ToggleButton, 
    Toolbar 

} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";


const StyledToolbar = styled(Toolbar) (({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.vars 
    ? `rbga(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
    padding: "8px 12px"
}));


const Navbar = () => {
    const [ openNavbar, setOpenNavbar ] = useState(false);

    return (

        <AppBar 
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: "transparent",
                backgroundImage: "none",
                mt: "calc(var(--template-frame))"
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center", px: 0  }}>
                        <Logo/>
                        <Box sx={{ display: { xs: "none", md: "flex"}}}>
                            <Button variant="text" color="info" size="small" >
                                Home
                            </Button>
                            <Button variant="text" color="info" size="small" >
                                About
                            </Button>
                            <Button variant="text" color="info" size="small" >
                                Contanct
                            </Button>
                            <Button variant="text" color="info" size="small" >
                                Help
                            </Button>
                        </Box>
                    </Box>

                    <Box 
                        sx={{
                            display: { sx: "none", md: "flex"},
                            gap: 1,
                            alignItems: "center"
                        }}
                    >

                        <Button color="primary" variant="text" size="small">
                            Login
                        </Button>
                        <Button color="primary" variant="text" size="small">
                            Signup
                        </Button>
                    </Box>
                    <ColorModeIconDropDown /> /* Add Later */
                    
                    <Box sx={{ display: {sx: "flex", md: "none"}, gap: 1}}>
                        <ColorModeIconDropDown size= "medium" /> /* Add Later */

                        <IconButton aria-label="Menu Button" onClick={ToggleButton(true)}>
                            <MenuIcon /> /* Add Later */
                        </IconButton>

                    </Box>
                </StyledToolbar>
            </Container>

        </AppBar>

    )
}

export default Navbar;
