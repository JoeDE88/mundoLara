import { Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import Gallery from "../components/Gallery";

export default function () {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Typography variant='h3' color='secondary' sx={{textAlign:'center',mb:5}}>
                Mundo Lara.
            </Typography>
            <Gallery></Gallery>
        </>
    )
}