import React from 'react'
import { Link, Outlet } from "react-router-dom"
const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <Link to="profile">Profile</Link>
                <br></br>
                <Link to="logout">Logout</Link>
                <br></br>
                <Link to="/setting">Setting</Link>
                <br></br>

            </nav>
            <Outlet />
        </div>

    )
}

export default Dashboard