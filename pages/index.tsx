import type { NextPage } from 'next';
import classes from '../styles/Home.module.scss';
import Link  from 'next/link';
import { useState } from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { Navbar } from '../components';

interface HomePageProps {
  isNewUser: boolean,
  setIsNewUser: any,
  users: any,
}

const HomePage = ({isNewUser, setIsNewUser}: HomePageProps) => {
  const { Header, Footer, Sider, Content } = Layout;
  
  return (
     <Layout className={classes.container}>
      <Content>
        <Row className={classes.heroSection}>
          <Col 
          xs={{span:24}}
          lg={{span:12}}
          className={classes.heroCol1}
          >
            <img
            src="https://cdnblog.etmoney.com/wp-content/uploads/2020/07/Complete-Financial-Picture.png"
            alt="finance image"
            width={500}
            height={300}
            />
          </Col>
          <Col 
          xs={{span:24}}
          lg={{span:12}}
          className={classes.heroCol2}
          >
            <span className={classes.heroPrimaryText}>
              Take control of your financial future
            </span>
            <Button className={classes.heroBtn} shape="round" onClick={() => setIsNewUser(true)}>
              <Link href="/auth">
                Get Started
              </Link>
            </Button>
          </Col>
        </Row>
      </Content>
      <Footer>
        
      </Footer>
     </Layout>
  )
}

export default HomePage;

