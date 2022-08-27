import React from 'react'
import './index.css'
import searchIcon from '../../assets/images/search.png'
import Loading from '../loading'
<<<<<<< HEAD
=======
// import {start} from 'furikurix'
>>>>>>> fa0838864cc4bc9157568b4dabcf240740121130

export default function Index(props) {
    const [load, setLoad] = React.useState(0)
    const myRef = React.useRef();
    const search = () => {
        setLoad({ left: '-30vw', top: '0vw' })
        if (props.type === 'project') {
            React.axios('post', 'http://39.98.41.126:31100/project/getByCondition', setLoad, '',
                { projectName: myRef.current.value }).then(res => {
                    props.func(res)
                })
        }
        if (props.type === 'user') {
            React.axios('post', 'http://39.98.41.126:31100/user/getUser', setLoad, '',
                { username: myRef.current.value }).then(res => props.func(res))
        }


    }
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            search();
            e.preventDefault();
        }
    }
    return (
        <>
            <div className='search'>
                {load ? <Loading {...load} /> : ''}
                <input className='search-input' type="text" ref={myRef} onKeyDown={(e) => handleKeyDown(e)} placeholder='搜索' />
                <button className='search-btn' onClick={search}><img src={searchIcon} alt="搜索" /></button>
            </div>
        </>
    )
}
