import React from 'react'
import css from './Dashboard.module.css'
const Dashboard = () => {
    return (
        <div className={css.container}>
            <div className={css.dashboard}>
                <div className={css.dashboardHead}></div>
            </div>
            <div className={css.orders}>
                orders
            </div>
        </div>


    )
}

export default Dashboard
