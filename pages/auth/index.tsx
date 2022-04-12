import {Login, Signup} from '../../components';

interface LoginPageProps {
    isNewUser: boolean,
}

const LoginPage = ({isNewUser}:LoginPageProps) => {
    console.log(isNewUser)
    return (
        <>
            {isNewUser ? <Signup/> : <Login/> }
        </>
    )
}

export default LoginPage;