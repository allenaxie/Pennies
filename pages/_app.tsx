import 'antd/dist/antd.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Layout } from 'antd';
import { Navbar } from '../components';
import Link  from 'next/link';
import { collectAssets } from 'next/dist/build/webpack/plugins/middleware-plugin';

function MyApp({ Component, pageProps }: AppProps) {
  const { Header, Footer, Sider, Content } = Layout;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isNewUser, setIsNewUser] = useState(true);

  const navToggle = () => {
    setIsNavCollapsed(!isNavCollapsed)
  }

  return (
    <Layout>
      <Sider 
      collapsible 
      className="siderNav"
      collapsed={isNavCollapsed}
      theme="light"
      trigger={null}
      >
        <Navbar isNavCollapsed={isNavCollapsed} navToggle={navToggle} isNewUser={isNewUser} setIsNewUser={setIsNewUser} setIsNavCollapsed={setIsNavCollapsed}/>
      </Sider>
      <Layout>
        {isNavCollapsed || <div className="backdrop" onClick={navToggle}></div>}
        <Component className="body" {...pageProps} isNewUser={isNewUser} setIsNewUser={setIsNewUser} />
      </Layout>
    </Layout>


  )
}

export default MyApp
