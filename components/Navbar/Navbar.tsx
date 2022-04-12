import classes from "./Navbar.module.scss";
import Link  from 'next/link';
import { Dispatch, SetStateAction } from "react";
import { 
    MenuUnfoldOutlined, 
    MenuFoldOutlined,
    IdcardOutlined, 
    FolderOpenOutlined, 
    MailOutlined, 
    UserOutlined 
} from "@ant-design/icons";
import { 
    Menu, 
    Button 
} from "antd";


interface NavbarProps {
    isNavCollapsed: boolean,
    navToggle: any,
}

const Navbar = ({isNavCollapsed, navToggle}: NavbarProps) => {

    return (
        <Menu
            className={classes.navbarContainer}
            theme="light"
            mode="inline"
        >
            <Menu.Item onClick={navToggle}>
                {isNavCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="1" icon={<UserOutlined />}>
                    <Link href="/">
                        Home           
                    </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="2" icon={<IdcardOutlined />}>
                    <Link href="/about">
                        About                
                    </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="3" icon={ <FolderOpenOutlined /> }>
                <Link href="/signup">
                    Sign Up
                </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="4" icon={<MailOutlined />}>
                <Link href="/login">
                    Log In
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;