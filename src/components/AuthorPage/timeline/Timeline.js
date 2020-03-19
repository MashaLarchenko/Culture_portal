import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { makeStyles } from '@material-ui/core/styles';
// import { withI18n } from '@lingui/react';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '50px 0',
        textAlign: 'center'
    },
    title: {
        textAlign: 'center',
        color: '#07346a',
        fontWeight: 'bold',
    },
    yearTitle: {
        color: '#07346a',
        fontWeight: 'bold',
        fontSize: '0.89rem'
    }
}));

const TimeLine = ({ data }) => {
    const classes = useStyles();
    const { timeline } = data;
    const { timelineData } = timeline;
    const biography = timelineData.map((activity, index) => {
        const { date, description } = activity;
        return (
            <TimelineItem
                key={index}
                dateText={date}
                dateInnerStyle={{
                    background: '#f3f2f3',
                    fontSize: '1.1rem',
                    fontFamily: 'Roboto',
                    color: '#000000'
                }}
                bodyContainerStyle={{
                    background: 'rgba(67, 66, 66, 0.89)',
                    padding: '15px',
                    borderRadius: '5px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <Typography variant="h5" component="h5" className={classes.yearTitle}>
                    {date}
                </Typography>
                <Typography variant="body1" component="p">
                    {description}
                </Typography>
            </TimelineItem>
        )
    });
    return (
        <Container maxWidth="md" className={classes.container}  id={'timeline'}>
            <Typography variant="h3" className={classes.title}>
             Timeline
            </Typography>
            <Timeline lineColor={'#ddd'}>
                {biography}
            </Timeline>
        </Container>
    )
}
export default TimeLine