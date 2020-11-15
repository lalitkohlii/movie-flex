import React from 'react';
import {Box, Header} from 'grommet';
import {theme} from '../../globalConfig/cstTheme';
import './SiteHeader.css';


function SiteHeader() {
    return (
        <Box>
            
            <Header 
                className="siteHeader-large"
                background={theme.blue} 
                justify="between">
                <Box>Movie site</Box>
                <Box>middle</Box>
                <Box>Last</Box>
                    
                        
              
            </Header>  
        </Box>
    )
}

export default SiteHeader
