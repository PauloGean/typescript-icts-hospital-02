import { BottomNavigation, Button, Card, IconButton, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import BadgeIcon from '@mui/icons-material/Badge';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MasksIcon from '@mui/icons-material/Masks';
import { PhotoCamera } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
export function ComponentesMaterial() {
    return (
        <>
            <Typography variant="h4" >
                Components
            </Typography>
            <Typography variant="body1" >
                Teste de Componetes do Material
            </Typography>



            <Card>
                <Typography variant="h6" >
                    Icones
                </Typography>
                <Card>

                    <HomeIcon />
                    <BadgeIcon />
                    <ApartmentIcon />
                    <MasksIcon />

                </Card>

            </Card>


            <Card>
                <Typography variant="h6" >
                    Botoes
                </Typography>
                <Card>

                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                    <Button>Primary</Button>
                    <Button disabled>Disabled</Button>
                    <Button href="#text-buttons">Link</Button>
                    <Button variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>

                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Card>

            </Card>



            <Card>
                <Typography variant="h6" >
                    Botoes Navegacao
                </Typography>
                <Card>

                    <BottomNavigation showLabels >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                </Card>

            </Card>



        </>
    );
}