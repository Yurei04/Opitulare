"use client"
import React, { useState } from "react";
import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    Toolbar,
    MenuItem,
    Divider
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4ff",
    padding: "8px 12px"
});

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpenNavbar(newOpen);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                boxShadow: 0,
                bgcolor: "#ffffff",
                backgroundImage: "none",
                mt: "calc(var(--template-frame))",
                color: '#1976d2'
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center", px: 0 }}>
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            {['Home', 'About', 'Goal', 'Contact', 'Help'].map((item) => (
                                <Button 
                                    key={item} 
                                    variant="text" 
                                    color="primary" 
                                    size="small"
                                    href={`#${item.toLowerCase()}`}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{
                        display: { xs: "none", md: "flex" },
                        gap: 1,
                        alignItems: "center"
                    }}>
                        <Button color="primary" variant="text" size="small" href="/login">
                            Login
                        </Button>
                        <Button color="primary" variant="outlined" size="small" href="/signup">
                            Signup
                        </Button>
                    </Box>

                    <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
                        <IconButton aria-label="Menu Button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>

                        <Drawer
                            anchor="top"
                            open={openNavbar}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: "var(--template-frame-height, 0px)"
                                },
                            }}
                        >
                            <Box sx={{ p: 2, bgcolor: "#ffffff" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        x
                                    </IconButton>
                                </Box>
                                {['Home', 'About', 'Contact', 'Help'].map((item) => (
                                    <MenuItem key={item} component="a" href={`#${item.toLowerCase()}`}>{item}</MenuItem>
                                ))}
                                <Divider sx={{ my: 3 }} />
                                <MenuItem>
                                    <Button color="primary" variant="contained" fullWidth href="/signup">
                                        Sign up
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button color="primary" variant="outlined" fullWidth href="/login">
                                        Sign in
                                    </Button>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
