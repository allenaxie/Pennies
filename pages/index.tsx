import type { NextPage } from 'next';
import classes from '../styles/Home.module.scss';
import { useState } from 'react';
import { Layout } from 'antd';
import { Navbar } from '../components';

const HomePage: NextPage = () => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
     <Layout>
      <Content>
        Content
      </Content>
      <Footer>
        Footer
      </Footer>
     </Layout>
  )
}

export default HomePage;
