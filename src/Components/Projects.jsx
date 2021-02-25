import React from 'react';
import styled from "styled-components";
import {
    Container,
    Grid,
    Card,
    CardMedia,
    Typography,
    CardContent,
    CardActions,
    Button,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        "& a": {
            textDecoration: "none"
        }
    },
    fontWeight900: {
        fontWeight: "900"
    },
    fontSize: {
        fontSize: "20px"
    },
    height200: {
        minHeight: "150px"
    },
    actionContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    actionButton: {
        color: "#7510f7",
        transition: "all 0.5s",
        "&:hover": {
            color: "white",
            backgroundColor: "#7510f7"
        }
    },
    techStackLogos: {
        height: "35px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    marginTop20: {
        marginTop: "20px"
    },
    cardShadow: {
        "&:hover": {
            boxShadow: "-1px -1px 10px 10px #ecc94b"
        }
    },
    projectImage: {
        transition: "all 0.5s",
        "&:hover": {
            cursor: "pointer",
            filter: "contrast(50%)"
        }
    },
    borderBottom: {
        borderBottom: "2px solid #7510f7"
    }
})

const Header = styled.div`
    color: #ecc94b;
    text-align: center;
    font-size: 50px;
    padding: 10px 0 50px;
    font-weight: 900
`

export function Projects() {
    const classes = useStyles();

    return (
        <Container maxWidth = "xl" className = {classes.root} id = "projects" >
            <Header>
                PROJECTS
            </Header>
            <Grid container spacing={4} justify="center">
                <Grid item xl={4} lg={4} md={6} sm={6} xs={8} >
                    <Card className = {classes.cardShadow}>
                        <CardMedia 
                            className = {classes.projectImage}
                            component = "img"
                            alt = "Techcrunch Clone"
                            height = "100%"
                            image = "/techcrunch.png"
                            title = "Techcrunch Clone"
                        />
                        <CardContent className = {classes.height200} >
                            <Typography className = {classes.fontWeight900} align="center" gutterBottom variant="h5">
                                Techcrunch - Clone
                            </Typography>
                            <Typography align="center" variant="body1" component="p">
                                An american online news platform, build end-to-end features from the original website.
                            </Typography>
                            <Grid align="center" container spacing={1} className = {classes.marginTop20} >
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                                    <img src="/html.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                                    <img src="/css.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                                    <img src="/javascript.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                                    <img src="/react.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                                    <img src="/redux.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                                    <img src="/material_ui.png"  className = {classes.techStackLogos}/>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <hr/>
                        <CardActions className = {classes.actionContainer}>
                            <a href = "https://github.com/yashjain99/TechcrunchClone" target="_blank">
                                <Button className = {classes.actionButton} size = "large" >
                                    GitHub
                                </Button>
                            </a>
                            <a href = "https://techcrunchclonereact.netlify.app/" target = "_blank">
                                <Button className = {classes.actionButton} size = "large" >
                                    Demo Link 🔗
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xl={4} lg={4} md={6} sm={6} xs={8} >
                    <Card className = {classes.cardShadow}>
                        <CardMedia 
                            className = {classes.projectImage}
                            component = "img"
                            alt = "Indeed Clone"
                            height = "100%"
                            image = "/indeed.png"
                            title = "Indeed Clone"
                        />
                        <CardContent className = {classes.height200} >
                            <Typography className = {classes.fontWeight900} align="center" gutterBottom variant="h5">
                                Indeed - Clone
                            </Typography>
                            <Typography align="center" variant="body1" component="p">
                                An online job search portal, build end-to-end features from the original website.
                            </Typography>
                            <Grid align="center" container spacing={1} className = {classes.marginTop20} >
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                                    <img src="/html.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                                    <img src="/css.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                                    <img src="/javascript.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                                    <img src="/react.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                                    <img src="/redux.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                                    <img src="/material_ui.png"  className = {classes.techStackLogos}/>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <hr/>
                        <CardActions className = {classes.actionContainer}>
                            <a href = "https://github.com/MahenParameshwar/IndeedReactClone" target="_blank">
                                <Button className = {classes.actionButton} size = "large" >
                                    GitHub
                                </Button>
                            </a>
                            <a href = "https://indeedclonereact.netlify.app/" target = "_blank">
                                <Button className = {classes.actionButton} size = "large" >
                                    Demo Link 🔗
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xl={4} lg={4} md={6} sm={6} xs={8} >
                    <Card className = {classes.cardShadow}>
                        <CardMedia 
                            className = {classes.projectImage}
                            component = "img"
                            alt = "LinkedIn Clone"
                            height = "100%"
                            image = "/linkedIn.png"
                            title = "LinkedIn Clone"
                        />
                        <CardContent className = {classes.height200} >
                            <Typography className = {classes.fontWeight900} align="center" gutterBottom variant="h5">
                                LinkedIn - Clone
                            </Typography>
                            <Typography align="center" variant="body1" component="p">
                                A platform used for professional networking, build some features from the original website.
                            </Typography>
                            <Grid align="center" container spacing={2} className = {classes.marginTop20} >
                                <Grid item xl={3} lg={3} md={3} sm={3} xs={3} >
                                    <img src="/html.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={3} xs={3} >
                                    <img src="/css.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={3} xs={3} >
                                    <img src="/javascript.png"  className = {classes.techStackLogos}/>
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={3} xs={3} >
                                    <img src="/react.png"  className = {classes.techStackLogos}/>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <hr/>
                        <CardActions className = {classes.actionContainer}>
                            <a href = "https://github.com/wahed2102/linkedin-clone" target="_blank">
                                <Button className = {classes.actionButton} size = "large" >
                                    GitHub
                                </Button>
                            </a>
                            <a href = "https://linkedin-clone10.vercel.app/" target = "_blank">
                                <Button className = {classes.actionButton} size = "large" >
                                    Demo Link 🔗
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
