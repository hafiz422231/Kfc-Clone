/* eslint-disable eqeqeq */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddsOnOptions from './addsonOptions';
import AddsOnLargeOptions from './addOnlarger';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      
    },
  }));

  
  
const AddsOns = ({ addson,callMe }) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Adds on
    const [nameValue, setNameValue] = React.useState(['']);

    const [nameValueUpper, setNameValueUpper] = React.useState('');
    const [name, setN] = React.useState('');
    const [nameEmpty, setNameEmpty] = React.useState('');

    const updateValue1 = (val,price) => {
        setNameValue(val + '[ ' + price + ' ]' + ' , ');
        callMe(price);
    }

    const updateValue2 = (val) => {
        setNameValueUpper(val);
    }

    const updateValue3 = (val) => {
        setN(val);
    }

    const updateValue4 = (val) => {
        setNameEmpty(val);
    }
    
    const select1 = addson.filter( m => m.addon_id == 1 );
    const select2 = addson.filter( m => m.addon_id == 2 );
    const select3 = addson.filter( m => m.addon_id == 3 );
    const foodAddon = addson.filter( m => m.addon_id == 4 );

    return (
        <div className={classes.root}>
            {
                select1.map( ({ addon_id, expand, aria_controls, drink_title, ...otherProps }) => (
                <ExpansionPanel expanded={expanded === expand} onChange={handleChange(expand)}>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={aria_controls}
                    id={aria_controls}
                >
                <Typography className={classes.heading}>{drink_title}</Typography>
                    
                    <Typography className={`${classes.secondaryHeading} ml-auto`}>
                        {nameValueUpper}    
                    </Typography>
                    
                    </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>

                                <AddsOnOptions callMe={updateValue2} {...otherProps} />

                            </Typography>
                        </ExpansionPanelDetails>
                </ExpansionPanel>
                ))
            }
            {
                select2.map( ({ addon_id, expand, aria_controls, drink_title, ...otherProps }) => (
                <ExpansionPanel expanded={expanded === expand} onChange={handleChange(expand)}>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={aria_controls}
                    id={aria_controls}
                >
                <Typography className={classes.heading}>{drink_title}</Typography>
                    
                    <Typography className={`${classes.secondaryHeading} ml-auto`}>
                        {name}    
                    </Typography>
                    
                    </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>

                                <AddsOnOptions callMe={updateValue3} {...otherProps} />

                            </Typography>
                        </ExpansionPanelDetails>
                </ExpansionPanel>
                ))
            }
            {
                select3.map( ({ addon_id, expand, aria_controls, drink_title, ...otherProps }) => (
                <ExpansionPanel expanded={expanded === expand} onChange={handleChange(expand)}>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={aria_controls}
                    id={aria_controls}
                >
                <Typography className={classes.heading}>{drink_title}</Typography>
                    
                    <Typography className={`${classes.secondaryHeading} ml-auto`}>
                          {nameEmpty}  
                    </Typography>
                    
                    </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                            
                                <AddsOnOptions callMe={updateValue4} {...otherProps} />

                            </Typography>
                        </ExpansionPanelDetails>
                </ExpansionPanel>
                ))
            }
            {
                foodAddon.map( ({ addon_id, expand, aria_controls, drink_title , ...products }) => (
                <ExpansionPanel expanded={expanded === expand} onChange={handleChange(expand)} className="mt-2">
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={aria_controls}
                    id={aria_controls}
                >
                <Typography className={classes.heading}>{drink_title}</Typography>
                
                    <Typography className={`${classes.secondaryHeading} ml-auto`}>
                        {nameValue}
                    </Typography>
                
                    </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>

                                <AddsOnLargeOptions addon_id={addon_id} callMe={updateValue1} {...products} />                    

                            </Typography>
                        </ExpansionPanelDetails>
                </ExpansionPanel>
                ))
            }
        </div>
    );
}

export default AddsOns;