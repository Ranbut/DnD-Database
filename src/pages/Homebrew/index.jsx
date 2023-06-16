import { useEffect } from "react";
import Header from "../../components/Header";
import useToken from "../../hooks/useToken";

export default function Homebrew() {
    const token = useToken();

    useEffect(() => {
        async function fetchData() {
        }
        fetchData();
    }, []);

    return (
        <>
            <Header />
        </>
    );
};
