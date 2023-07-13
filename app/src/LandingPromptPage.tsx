import React from 'react';

import { Grid, Card, Typography} from '@mui/material';
import PromptCard from './components/PromptCard';

const LandingPromptPage = ({handlePromptClick, prompts}:any) => {

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
                {
                    prompts.MyDB && prompts["MyDB"].map((prompt:any) => {
                        return (
                            <PromptCard 
                            handlePromptClick={handlePromptClick}
                            prompt={prompt}/>
                        )
                    })
                }
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
                {
                    prompts.Confluence && prompts["Confluence"].map((prompt:any) => {
                        return (
                            <PromptCard 
                            handlePromptClick={handlePromptClick}
                            prompt={prompt}/>
                        )
                    })
                }
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
                {
                    prompts.DBNetwork && prompts["DBNetwork"].map((prompt:any) => {
                        return (
                            <PromptCard 
                            handlePromptClick={(promp: any)=>handlePromptClick(prompt)}
                            prompt={prompt}/>
                        )
                    })
                }
            </div>
        </Grid>
        </Grid>
    );
};

export default LandingPromptPage;