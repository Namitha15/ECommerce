import React, { useState } from "react";

export const UserLogin = ({ onLogin }) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin() {
        if (userName === "abc" && password === "123") {
            onLogin();


        } else {
            alert("invalid creadentials")
        }
    }



    return (
        <div className="login-container">
            <h2>Login</h2>

            <input onChange={(e) => setUserName(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>

        </div>

    );
}
export default UserLogin;
