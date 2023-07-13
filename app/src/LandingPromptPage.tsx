import React from 'react';

import { Grid, Card, Typography} from '@mui/material';
import PromptCard from './components/PromptCard';

const LandingPromptPage = () => {
    return (
        <Grid
        display={'flex'}
        direction={'row'}
        rowSpacing={0}
        alignContent={"start"}
        >
        <Grid 
        xs={4} 
        display={'flex'}
        direction={'column'}
        rowSpacing={0}
        alignContent={"start"}
        >
            <Typography variant={"h4"}
            sx={{
                textAlign: "center",
            }}
            >
                Confluence
            </Typography>
            <div>
            <PromptCard />
            <PromptCard />


            </div>
        </Grid>
        <Grid 
        xs={4} 
        display={'flex'}
        direction={'column'}
        rowSpacing={0}
        alignContent={"start"}
        >
            <Typography variant={"h4"}
            sx={{
                textAlign: "center",
            }}
            >
                Confluence
            </Typography>
            <div>
            <PromptCard />
            <PromptCard />
            <PromptCard />

            </div>
        </Grid>

        <Grid 
        xs={4} 
        display={'flex'}
        direction={'column'}
        rowSpacing={0}
        alignContent={"start"}
        >
            <Typography variant={"h4"}
            sx={{
                textAlign: "center",
            }}
            >
                Confluence
            </Typography>
            <div>
            <PromptCard />
            <PromptCard />


            </div>
        </Grid>

        
    
        </Grid>
    );
};

export default LandingPromptPage;