import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import useToken from "../../hooks/useToken.jsx";
import useUser from "../../hooks/useUser.jsx";
import { updateAvatar } from "../../services/userApi.jsx";
import Header from "../../components/Header/index.jsx";
import UserContext from "../../contexts/UserContext.jsx";

export default function SignUp() {
    const [avatar, setAvatar] = useState('');

    const navigate = useNavigate();

    const token = useToken();
    const user = useUser();

    const { userData, setUserData } = useContext(UserContext); // Access userData and setUserData from UserContext

    useEffect(() => {
        if (!token) navigate("/sign-in?return=user-config");
        else setAvatar(user.avatar);
    }, [token, navigate]);

    async function handleAvatarUpdate(e) {
        e.preventDefault();
        try {
            const body = { avatar };
            await updateAvatar(body, token);
            const updatedUserData = {
                ...userData,
                user: {
                  ...userData.user,
                  avatar: avatar,
                },
              };
            setUserData(updatedUserData);
            setAvatar(user.avatar);
            alert('Avatar updated successfully!');
        } catch (error) {
            alert('Failed to update avatar!');
        }
    }

    return (
        <>
            <Header />
            {token ? (
            <>
            <h4>Configurations</h4>
            <img width={80} src={user.avatar} alt="avatar"/>
            <label>
                ImageUrl:
                <input type="text" value={avatar} onChange={e => setAvatar(e.target.value)}/>
            </label>
            <div><button onClick={handleAvatarUpdate}>Update Avatar</button></div>
            </>) : (<></>)}
        </>
    );
};
