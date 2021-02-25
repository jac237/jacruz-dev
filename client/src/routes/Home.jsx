import React from 'react';
import { Layout } from 'antd';
import Navbar from '../components/Navbar';
import NameTypical from '../components/NameTypical';
import UserCard from '../components/UserCard';
import TechStacks from '../components/TechStacks';
import Projects from '../components/Projects';
import BuyMeACoffee from '../components/BuyMeACoffee';
import FooterButtons from '../components/FooterButtons';

const { Header, Footer, Content } = Layout;

const classes = {
  layoutStyles: {
    maxWidth: '1000px',
    margin: 'auto',
  },
  headerStyles: {
    height: 50,
    lineHeight: '50px',
    padding: 0,
    marginBottom: 5,
  },
  contentStyles: {
    padding: '20px 20px 0px 20px',
  },
};

const Home = () => {
  return (
    <div>
      <Layout style={classes.layoutStyles}>
        <Header style={classes.headerStyles}>
          <Navbar />
        </Header>
        <Content style={classes.contentStyles}>
          <NameTypical />
          <UserCard />
          <Projects />
          <TechStacks />
        </Content>
        <Footer>
          <FooterButtons />
          <BuyMeACoffee />
        </Footer>
      </Layout>
    </div>
  );
};

export default Home;
