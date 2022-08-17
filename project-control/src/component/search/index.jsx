import React from 'react'
import './index.css'
import searchIcon from '../../assets/images/search.png'
import Loading from '../loading'

export default function Index(props) {
    const [load, setLoad] = React.useState(0)
    const myRef = React.useRef();
    const search = () => {
        setLoad({ left: '50vw', top: '10vw' })
        if (props.type === 'project') {
            React.axios('post', 'http://39.98.41.126:31100/project/getByCondition', setLoad, '',
                { projectName: myRef.current.value }).then(res => {
                    console.log(res);
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
            {load ? <Loading {...load} /> : ''}
            <div className='search'>
                <input className='search-input' type="text" ref={myRef} onKeyDown={(e) => handleKeyDown(e)} placeholder='搜索' />
                <button className='search-btn' onClick={search}><img src={searchIcon} alt="搜索" /></button>
            </div>
        </>
    )
}
