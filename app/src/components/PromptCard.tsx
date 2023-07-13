import React from 'react';

import { Grid, Card} from '@mui/material';

const PromptCard = () => {
    return (
        <Grid xs={4} 
        sx={{
            width: "fit-content",
            minWidth: "200px",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "8px",
        }}
        >
            <Card
            sx={{
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "8px",
                paddingRight: "8px",
                textAlign: "center",
            }}
            >Hello Hello Hello Hello Hello Hello Hello Hello Hello  </Card>
        </Grid>
    );
};

export default PromptCard;