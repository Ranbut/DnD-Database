import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-blackpearl py-4 border-b-4 border-red-700">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-red-500">D&D Database</h1>
                <div className="space-x-4">
                    <Link to='/sign-in'>
                        <HeaderButtons>SignIn</HeaderButtons>
                    </Link>
                    <Link to='/sign-up'>
                        <HeaderButtons>SignUp</HeaderButtons>
                    </Link>
                </div>
            </div>
        </header>
    );
};

const HeaderButtons = styled.button`
    border: 2px solid red;
    color: white;
    background-color: transparent;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
`;