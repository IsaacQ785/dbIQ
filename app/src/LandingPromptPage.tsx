import React from 'react';

import { Grid, Card, Typography} from '@mui/material';
import PromptCard from './components/PromptCard';
import Logo from '../public/Logo.jpeg';
import ConfluenceLogo from '../public/Confluence.jpeg';
import DBNetworkLogo from '../public/dbNetwork.jpeg';
import MyDBLogo from '../public/myDB.jpeg';

const LandingPromptPage = ({handlePromptClick, prompts}:any) => {

    return (
        <div
        style={{background: "#f5f5f5", height: "100vh"}}
        >
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <img src={Logo} 
            style={{marginBottom: "32px"}}
            alt="DBIQLogoLanding"/>
        </div>
        
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
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <img src={DBNetworkLogo} alt="DBIQLogoLanding"/>
        </div>
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
            <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <img src={ConfluenceLogo} alt="DBIQLogoLanding"/>
        </div>
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
            <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <img src={MyDBLogo} alt="DBIQLogoLanding"/>
        </div>
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
        </div>
    );
};

export default LandingPromptPage;