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
}

const Navbar = ({isNavCollapsed, navToggle}: NavbarProps) => {

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
            <Menu.Item className={classes.menuItems} key="3" icon={ <UserAddOutlined /> }>
                <Link href="/signup">
                    Sign Up
                </Link>
            </Menu.Item>
            <Menu.Item className={classes.menuItems} key="4" icon={<ImportOutlined />}>
                <Link href="/login">
                    Log In
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;