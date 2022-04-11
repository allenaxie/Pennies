import classes from "./Navbar.module.scss";
import { IdcardOutlined, FolderOpenOutlined, MailOutlined, BranchesOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, Button } from "antd";
import Link  from 'next/link';
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
    isNavCollapsed: boolean,
    setIsNavCollapsed: Dispatch<SetStateAction<boolean>>,
}

const Navbar = (props: NavbarProps) => {

    function toggleNav() {
        props.setIsNavCollapsed(!props.isNavCollapsed);
    }

    return (
        <Menu
            className={classes.navbarContainer}
            theme="light"
            mode="inline"
        >
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