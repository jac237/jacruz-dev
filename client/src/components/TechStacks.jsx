import React from 'react';
import { Row, Col, Space, Typography } from 'antd';
import {
  JavascriptIcon,
  JavaIcon,
  TypescriptIcon,
  ReactLogoIcon,
  VuejsIcon,
  ReduxIcon,
  NodeDotJsIcon,
  PythonIcon,
  ApollographqlIcon,
  GraphqlIcon,
  CplusplusIcon,
  MongodbIcon,
  AntdesignIcon,
  MaterialUiIcon,
  StyledComponentsIcon,
  Css3AltIcon,
  Html5Icon,
  BulmaIcon,
  VercelIcon,
  MicrosoftteamsIcon,
  MicrosoftoutlookIcon,
  MicrosoftonenoteIcon,
  MicrosoftexcelIcon,
  HerokuIcon,
  SpotifyIcon,
  SoundcloudIcon,
  TwitchIcon,
  GitIcon,
  NextDotJsIcon,
  PostgresqlIcon,
  CsharpIcon,
  HotjarIcon,
  DoordashIcon,
  JestIcon,
  YoutubeIcon,
  CodecademyIcon,
  FreecodecampIcon,
  CodesandboxIcon,
  MicrosoftwordIcon,
  ReplDotItIcon,
  HackerrankIcon,
  StackOverflowIcon,
  StackblitzIcon,
  PostmanIcon,
  AngularIcon,
  FirebaseIcon,
} from './icons';

const { Title } = Typography;

const rows = [
  {
    title: 'Languages',
    icons: [
      JavascriptIcon,
      Html5Icon,
      Css3AltIcon,
      TypescriptIcon,
      PythonIcon,
      JavaIcon,
      CplusplusIcon,
    ],
  },
  {
    title: 'Libaries & Frameworks',
    icons: [
      ReactLogoIcon,
      VuejsIcon,
      NodeDotJsIcon,
      ApollographqlIcon,
      GraphqlIcon,
      MongodbIcon,
      MaterialUiIcon,
      AntdesignIcon,
      BulmaIcon,
      StyledComponentsIcon,
      ReduxIcon,
    ],
  },
  {
    title: 'Software & Tools',
    icons: [
      GitIcon,
      VercelIcon,
      PostmanIcon,
      FirebaseIcon,
      HerokuIcon,
      MicrosoftteamsIcon,
      MicrosoftoutlookIcon,
      MicrosoftonenoteIcon,
      MicrosoftwordIcon,
      MicrosoftexcelIcon,
    ],
  },
  {
    title: 'In-Progress || Eager to Learn',
    icons: [
      NextDotJsIcon,
      PostgresqlIcon,
      CsharpIcon,
      HotjarIcon,
      JestIcon,
      AngularIcon,
    ],
  },
  {
    title: 'Learning Resources',
    icons: [
      YoutubeIcon,
      CodecademyIcon,
      FreecodecampIcon,
      StackOverflowIcon,
      CodesandboxIcon,
      StackblitzIcon,
      ReplDotItIcon,
      HackerrankIcon,
    ],
  },
  {
    title: 'Interests & Hobbies',
    icons: [DoordashIcon, SpotifyIcon, SoundcloudIcon, TwitchIcon],
  },
];
const level = 4;
const gutter = 16;
const xs = 8;
const sm = 4;
const md = 3;
const xxl = 2;
const rowStyle = {
  background: '#f5f5f5',
  borderRadius: '10px',
  padding: '20px',
};

const TeckStacks = () => {
  return (
    <>
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        {rows.map(({ title, icons }) => (
          <div style={rowStyle} key={title}>
            <Title level={level}>{title}</Title>
            <Row gutter={[gutter, gutter]}>
              {icons.map((Icon, index) => (
                <Col
                  xs={xs}
                  sm={sm}
                  md={md}
                  lg={md}
                  xl={md}
                  xxl={xxl}
                  key={index}
                >
                  <Icon />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Space>
    </>
  );
};

export default TeckStacks;
