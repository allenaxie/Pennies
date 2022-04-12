import {Login, Signup} from '../../components';
import { Row, Col, Divider } from 'antd';

interface LoginPageProps {
    isNewUser: boolean,
}

const LoginPage = ({isNewUser}:LoginPageProps) => {
    return (
        <Row justify="center">
            {isNewUser ? <Signup/> : <Login/> }
        </Row>
    )
}

export default LoginPage;