import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const pages = ['Home', 'About', 'Services', 'Contact', 'Add Contribution'];
const settings = ['Profile', 'Account', 'Logout'];
const contribute_actions = ['Add Review', 'Add Photots', 'Add Places'];

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: {
          backgroundColor: trigger ? 'black' : 'transparent',
          color: 'white',
        },
      })
    : null;
}

function App(props) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElContribute, setAnchorElContribute] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleOpenContributeMenu = (event) => {
    setAnchorElContribute(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setAnchorElContribute(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseContributeMenu = () => {
    setAnchorElContribute(null);
  };

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar disableGutters sx={{ paddingLeft: {md: '50px'} }}>
            <TravelExploreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, ml: 2 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}>
              EXPLORO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
                >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center'}}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <TravelExploreIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              Exploro
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, paddingRight: { xs: 'none', sm: 'none', md: '80px' }, justifyContent: 'flex-end' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={page === 'Add Contribution' ? handleOpenContributeMenu : undefined}
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: '18px' }}
                >
                  {page}
                </Button>
                ))}
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElContribute}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElContribute)}
                onClose={handleCloseContributeMenu}
                >
                {contribute_actions.map((action) => (
                  <MenuItem key={action} onClick={handleCloseContributeMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{action}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 0, mr: 2 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?cs=srgb&dl=pexels-nurseryart-346885.jpg&fm=jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box sx={{position: 'relative', p: 0, m: 0, overflow: 'hidden'}}>
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            backgroundImage: `linear-gradient(180deg, transparent 40%, black 94%), url('/assets/home-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            width: '100%',
            textAlign: { xs: 'left', sm: 'left' },
            paddingLeft: { xs: '20px', sm: '20px' ,md: '100px' },
            paddingRight: { xs: '20px' },
          }}
          >
          <Box sx={{ w: '100%' }}>
            <Typography
              variant="span"
              sx={{
                fontSize: { xs: '20px', sm: '30px' },
                display: 'block',
              }}
              >
              Welcome to Exploro
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '70px', sm: '100px', md: '150px' },
              fontWeight: 'bold',
              lineHeight: { xs: '60px', sm: '120px', md: '150px' },
              paddingTop: { xs: '20px', md: '0px', xl: '0px' },
            }}
            >
            Explore <br />
            The World
          </Typography>
          <Box sx={{ w: '100%' }}>
            <Typography
              variant="span"
              sx={{
                fontSize: { xs: '18px', sm: '30px' },
                paddingTop: { xs: '20px', md: '0px', xl: '0px' },
                display: 'block',
              }}
              >
              Live the trips exploring the world, discover paradises,
              <br />
              islands, mountains, and much more. Get your trip now.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Container sx={{ mt: 5 }}>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>
            Content Title
          </Typography>
          <Box sx={{ my: 2 }}>
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </Box>
        </Box>
      </Container>

    </>
  );
}

export default App;
