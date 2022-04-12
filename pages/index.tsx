import type { NextPage } from 'next';
import classes from '../styles/Home.module.scss';
import { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import { Navbar } from '../components';

const HomePage: NextPage = () => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
     <Layout>
      <Content>
        <Row className={classes.heroSection}>
          <Col 
          xs={{span:12}}
          className={classes.heroCol1}
          >
            Col 1
          </Col>
          <Col 
          xs={{span:12}}
          className={classes.heroCol2}
          >
            <span className={classes.heroPrimaryText}>
              Take control of your financial future
            </span>
          </Col>
        </Row>
      </Content>
      <Footer>
        Footer
      </Footer>
     </Layout>
  )
}

export default HomePage;
