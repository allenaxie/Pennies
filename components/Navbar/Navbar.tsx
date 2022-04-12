import classes from "./Navbar.module.scss";
import Link  from 'next/link';
import { Dispatch, SetStateAction } from "react";
import { 
    MenuUnfoldOutlined, 
    MenuFoldOutlined,
    IdcardOutlined, 
    UserAddOutlined,
    ImportOutlined, 
    HomeOutlined,
    
} from "@ant-design/icons";
import { 
    Menu, 
    Button 
} from "antd";


interface NavbarProps {
    isNavCollapsed: boolean,
    navToggle: any,
    isNewUser: boolean,
    setIsNewUser: any,
}

const Navbar = ({isNavCollapsed, navToggle, isNewUser, setIsNewUser}: NavbarProps) => {

    return (
        <Menu
            className={classes.navbarContainer}
            theme="light"
            mode="inline"
        >
            <div className={classes.togglerContainer}>
                <Button onClick={navToggle}>
                    {isNavCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
            </div>
            <Menu.Item className={classes.menuItems} key="1" icon={<HomeOutlined />}>
                    <Link href="/">
                        Home           
                    </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="2" icon={<IdcardOutlined />}>
                    <Link href="/about">
                        About                
                    </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="3" icon={ <UserAddOutlined /> } onClick={() => setIsNewUser(true)}>
                <Link href="/auth">
                    Sign Up
                </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="4" icon={<ImportOutlined />} onClick={() => setIsNewUser(false)}>
                <Link href="/auth">
                    Log In
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;