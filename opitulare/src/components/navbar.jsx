import React, { useState } from "react";
import { 
    AppBar, 
    Box, 
    Button,
    Container, 
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
                <StyledToolbar variant="dense">

                </StyledToolbar>
            </Container>

        </AppBar>

    )
}

export default Navbar;
