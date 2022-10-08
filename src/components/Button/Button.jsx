import '../Button/Button.scss'
import classNames from 'classnames'
import { useEffect, useRef } from 'react';

 

export function Button(props){
    const btnRef = useRef();
    useEffect(() => {
        const btnWidth = btnRef.current.clientWidth + 29;
        btnRef.current.style.width = btnWidth + 'px';
    }, []);


    return (
        <button
            className="button"
            ref={btnRef}
            name={props.name}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
            loading={props.loading}
        >
            <span className={`spinner ${props.loading ? 'active' : ''}`}>
                <i className='bx bx-loader-alt bx-spin'></i>
            </span>
            <span>
            {props.title}
            </span>
        </button>
    )
}