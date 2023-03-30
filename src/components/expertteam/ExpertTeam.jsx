import React from 'react'
import classes from './expertteam.module.scss';
import Container from '../../shared/layout/container/Container';
import Card from '../../shared/layout/card/Card';
import Label from '../../shared/label/Label';
import Team from './Team';
const TEAM_DATA = [{
    id:0,
    name: 'Jessca Arrow',
    role: 'Designer',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    image:'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
},
{
    id:1,
    name: 'Kathleen Smith',
    role: 'Designer',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://www.linkedin.com',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
},
{
    id:2,
    name: 'Rebecca Tylor',
    role: 'Designer',
    facebook: 'https://www.facebook.com',
    instagram: 'https://instagram.com',
    image : 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
}]
function ExpertTeam() {

    const teamList = TEAM_DATA.map((tm)=>(
        <Team 
        key={tm.id}
        name={tm.name}
        role={tm.role}
        facebook={tm.facebook}
        instagram={tm.instagram}
        twitter={tm.twitter}
        linkedin={tm.linkedin}
        image={tm.image}
        />
    ))
  return (
    <main className={classes['expert-team']}>
        <Card>
        <Container>
            <Label>The Transporters</Label>
            <h2>Meet Expert Team</h2>
        <div className={classes.teams}>
            {teamList}
        </div>
        </Container>
        </Card>
    </main>
  )
}

export default ExpertTeam