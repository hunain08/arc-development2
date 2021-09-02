import React from 'react'
import { makeStyles,useTheme,Grid,Typography,useMediaQuery,Avatar } from '@material-ui/core'
import yearBook from './logo/yearbook.svg'
import history from './logo/history.svg'
import puppy from './logo/puppy.svg'
const useStyles = makeStyles(theme =>({
missionStatement:{
    fontStyle:"italic",
    fontWeight:300,
    fontSize:"1.5rem",
    maxWidth:"50em",
    lineHeight:1.4
},
rowContainer:{
    paddingLeft:"5em",
    paddingRight:"5em",
    [theme.breakpoints.down("sm")]:{
        paddingLeft:"1.5em",
        paddingRight:"1.5em"
    }
},
avatar:{
    height:"25em",
    width:"25em"
}
}));
export default function Aboutus() {
    const classes = useStyles();
    const theme = useTheme()
    return (
            <Grid container direction="column">
                <Grid item className={classes.rowContainer} style={{marginTop:"2em"}}>
                     <Typography variant="h2" >About Us</Typography>
                </Grid>
                <Grid item container justifyContent="center"  className={classes.rowContainer} >
                    <Typography variant="h4" align="center" className={classes.missionStatement}>
                    In business, a mission statement concisely explains the fundamental purpose of the organization, or why it exists. It is present-focused, defines the target customer,
                     and often covers expectations of how the work gets done.
                    </Typography>
                </Grid>
                <Grid item container   className={classes.rowContainer}>
                    <Grid item container direction="column" lg style={{maxWidth:"35em"}}>
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                History
                            </Typography>
                            <Grid item>
                                <Typography variant="body1" paragraphy style={{fontWeight:700,fontStyle:"italic"}}>
                                    We're new kid on the block
                                </Typography>
                                <Typography variant="body1" paragraph>
                                Founded in 2019, we’re ready to get our hands on the world’s business problems.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                It all started with one question: Why aren’t all businesses using available technology? There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. 
                                Taking full advantage of these advancements is the name of the game.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                All this change can be a lot to keep up with, and that’s where we come in.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent="center" lg>
                            <img src={history} style={{maxHeight:"22em"}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container alignItems="center" direction="column" className={classes.rowContainer}>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>Team</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align="center">
                            Muhammad Hunain,Founder
                        </Typography>
                        <Typography variant="body1" paragraph align="center">
                          I started coding when i was 15 year old.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar} ></Avatar>
                    </Grid>
                    <Grid item container>
                        <Grid item container direction="column" >
                            <Grid item>
                                <img src={yearBook}/>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    a page from my sophomore yearbook
                                </Typography>
                            </Grid>
                        
                        <Grid item lg style={{maxWidth:"45em",padding:"1.45em"}}>
                            <Typography variant="body1" align="center" paragraph>
                            One use is to record, highlight, and commemorate the past year of a school. The term also refers to a book of statistics or facts published annually. A yearbook often 
                        has an overarching theme that is present throughout the entire book.
                            </Typography>
                        <Typography variant="body1" align="center" paragraph>
                        A yearbook, also known as an annual, is a type of a book published annually.
                        </Typography>
                        </Grid>
                        </Grid>
                        <Grid item container direction="column" lg alignItems="flex-end">
                           <Grid item>
                           <img src={puppy}/>
                           </Grid>
                       
                        <Grid item>
                            <Typography variant="caption">
                                a miniature dispale dashund sterling
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}

