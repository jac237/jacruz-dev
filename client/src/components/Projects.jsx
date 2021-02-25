import React from 'react';
import { Row, Col, Space, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import {
  ReactLogoIcon,
  JavascriptIcon,
  FirebaseIcon,
  VuejsIcon,
  ApollographqlIcon,
  GraphqlIcon,
  MaterialUiIcon,
  Css3AltIcon,
  Html5Icon,
  BulmaIcon,
  VercelIcon,
  NodeDotJsIcon,
  MongodbIcon,
  AntdesignIcon,
  HerokuIcon,
} from './icons';

const { Title, Link } = Typography;

const rows = [
  {
    title: 'Audius Tree',
    description: 'Music catolog of my favorite tracks on Audius!',
    href: 'https://audiustree.vercel.app/',
    github: 'https://github.com/jac237/audius-tree/',
    src:
      'https://raw.githubusercontent.com/jac237/audius-tree/master/client/src/assets/audiusTreeLogoSmall.png',
    rowStyles: { background: 'white' },
    imgStyles: {
      height: '50px',
      transition: 'all 0.1s ease-in-out',
    },
    icons: [
      JavascriptIcon,
      ReactLogoIcon,
      ApollographqlIcon,
      GraphqlIcon,
      NodeDotJsIcon,
      MaterialUiIcon,
      Html5Icon,
      Css3AltIcon,
      VercelIcon,
    ],
  },
  {
    title: 'Triton Search',
    description: 'Unofficial UCSD course-searching web app',
    href: 'https://triton-search.vercel.app/',
    github: 'https://github.com/jac237/triton-search/',
    src:
      'https://raw.githubusercontent.com/jac237/triton-search/master/client/public/images/icons8-shark-48.png',
    rowStyles: { background: 'white' },
    imgStyles: {
      width: '80px',
      height: '80px',
      transition: 'all 0.1s ease-in-out',
    },
    icons: [
      JavascriptIcon,
      VuejsIcon,
      FirebaseIcon,
      NodeDotJsIcon,
      BulmaIcon,
      Html5Icon,
      Css3AltIcon,
      VercelIcon,
    ],
  },
  {
    title: 'JacruzDev',
    description: 'Showcase projects and techstacks',
    href: 'https://github.com/jac237/',
    github: 'https://github.com/jac237/',
    src: 'https://i.imgur.com/O8rgHG5.png',
    rowStyles: { background: 'white' },
    imgStyles: {
      width: '70px',
      height: '70px',
      transition: 'all 0.1s ease-in-out',
    },
    icons: [
      JavascriptIcon,
      ReactLogoIcon,
      MongodbIcon,
      NodeDotJsIcon,
      AntdesignIcon,
      Html5Icon,
      Css3AltIcon,
      HerokuIcon,
    ],
  },
];

const classes = {
  space: {
    display: 'flex',
    marginBottom: 25,
  },
  row: {
    border: '1px outset lightgray',
    borderRadius: '10px',
    padding: '20px',
    margin: 0,
  },
  link: {
    textAlign: 'center',
  },
};
const props = {
  size: 30,
  level: 3,
};

const Projects = () => {
  return (
    <>
      <Space direction="vertical" size="large" style={classes.space}>
        {rows.map((entry) => (
          <Row
            style={{ ...classes.row, ...entry.rowStyles }}
            key={entry.title}
            align="middle"
            gutter={[16, 16]}
            wrap
          >
            {entry.src && (
              <Col>
                <a href={entry.href} style={classes.link}>
                  <img
                    src={entry.src}
                    alt={entry.title}
                    className="project-link"
                    style={entry.imgStyles}
                  />
                </a>
              </Col>
            )}
            <Col>
              <Title level={props.level}>{entry.title}</Title>
              <p style={{ wordWrap: 'break-all' }}>{entry.description}</p>
              <Space size="middle" wrap>
                <Link href={entry.github}>
                  <GithubOutlined
                    style={{
                      color: 'black',
                      fontSize: props.size,
                    }}
                  />
                </Link>
                {entry.icons.map((Icon, index) => (
                  <Icon height={props.size} width={props.size} key={index} />
                ))}
              </Space>
            </Col>
          </Row>
        ))}
      </Space>
    </>
  );
};

export default Projects;
