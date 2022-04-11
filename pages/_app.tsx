import 'antd/dist/antd.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Layout } from 'antd';
import { Navbar } from '../components';


function MyApp({ Component, pageProps }: AppProps) {
  const { Header, Footer, Sider, Content } = Layout;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  return (

    <Layout>
      <Sider className="siderNav">
        <Navbar
          isNavCollapsed={isNavCollapsed}
          setIsNavCollapsed={setIsNavCollapsed}
        />
      </Sider>
      <Component {...pageProps} />
    </Layout>


  )
}

export default MyApp
