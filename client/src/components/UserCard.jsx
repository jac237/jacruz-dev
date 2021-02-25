import React from 'react';
import { Card, Row, Col, Avatar } from 'antd';
import { BadgeCheckIcon } from './icons';
import ContactButtons from './ContactButtons';

const classes = {
  card: {
    width: '100%',
  },
  column: {
    padding: 10,
  },
  avatar: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: 10,
    bottom: 14,
  },
};

const UserCard = () => {
  return (
    <Card
      style={classes.card}
      cover={
        <img
          alt="Cover Photo"
          src="https://i.imgur.com/VoXbpjJ.jpg"
          style={{ display: 'flex', width: '100%' }}
        />
      }
    >
      <Row align="middle" justify="center">
        <Col style={{ ...classes.column, ...classes.avatar }}>
          <Avatar
            size={{ xs: 100, sm: 110, md: 120, lg: 130, xl: 140, xxl: 140 }}
            src="https://avatars.githubusercontent.com/u/33334252?s=460&u=d38bda49add2529601f6d076764fda78fe00a76d&v=4"
          />
          <span style={classes.badge}>
            <BadgeCheckIcon />
          </span>
        </Col>
        <Col style={classes.column}>
          <Row>
            <Col>
              <h1 style={{ fontWeight: 'bold' }}>
                University of California, San Diego
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>B.S. in Mathematics-Computer Science (2020)</h2>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col style={classes.column}>
          <figure>
            <blockquote cite="https://www.quotespedia.org/authors/m/meghan-markle/dont-give-it-five-minutes-if-youre-not-going-to-give-it-five-years-meghan-markle%E2%80%8B/">
              <em>
                <h3>
                  "Don’t give it five minutes if you’re not going to give it
                  five years."
                </h3>
              </em>
            </blockquote>
            <figcaption style={{ float: 'right' }}>— Meghan Markle</figcaption>
          </figure>
        </Col>
      </Row>
      <ContactButtons />
    </Card>
  );
};

export default UserCard;
