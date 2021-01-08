import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfile';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = props =>{
        const {link,image} = props.profile;
        return(
                <Col xs="3">
                    <a href={link}>
                        <img src={image} alt='profile' style={{width:35, height:35, margin:10}}/>
                    </a>
                </Col>
        )
}

const SocialProfiles = () =>
        (
            <Container>
                 <Row>
                    <Col >
                    <h4>Social Profile</h4>
                    </Col>
                </Row>
                <Row>
                    {
                    SOCIAL_PROFILES.map(SOCIAL => (
                               <Profile key={SOCIAL.id} profile={SOCIAL}/>
                                )
                        )
                    }
                </Row>
            </Container>

        )

export default SocialProfiles;