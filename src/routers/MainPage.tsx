import React from 'react'
import { Link } from "react-router-dom"

const MainPage = () => {
    return (
        <>
            <header className='df jc-sa'>
                <div>
                    <Link to='/stock'>
                        <div className='box-header'>
                            <b> Склад </b>
                        </div>
                    </Link> <br />
                    <Link to='/sale'>
                        <div className='box-header'>
                            <b> Продажа </b>
                        </div>
                    </Link> <br />
                </div>
                <div>
                    <Link to='/purchase'>
                        <div className='box-header'>
                            <b> Покупка </b>
                        </div>
                    </Link> <br />
                    <Link to='/data'>
                        <div className='box-header'>
                            <b> Операции </b>
                        </div>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default MainPage
