
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import Banner from '../banner/Banner';
import { API } from '../../service/api';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    background: url(https://img.freepik.com/free-photo/design-space-decorated-with-leaves-website-banner-template_53876-129927.jpg) center/55% repeat-x #000;
    width: 100%;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => {
        sessionStorage.clear();
        // await API.userLogout();
        navigate('/account')
    };
        
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Button onClick={logout}>LOGOUT</Button>
            </Container>
        </Component>
    )
}

export default Header;