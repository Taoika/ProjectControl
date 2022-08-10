import React from 'react'
export default function Index(props) {
    const { setMsg } = props;
    const myRef = React.useRef();
    const search = () => {
        React.axios('get', `http://106.13.18.48/softwares/search?name=${myRef.current.value}&isVague=true`, 70401)
        .then(
            res => setMsg(res)
        )
    }
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            search();
            e.preventDefault();
        }
    }
    return (
        <div>
            <input type="text" ref={myRef} onKeyDown={(e) => handleKeyDown(e)} />
            <button onClick={search}>搜索</button>
        </div>
    )
}
