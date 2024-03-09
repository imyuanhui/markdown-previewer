import React from 'react';
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md";
import './Container.css';

const Container = ({ title, content, isFullScreen, toggle }) => {
    const containerClass = isFullScreen ? 'container fullscreen' : 'container';

    return (
        <div className={containerClass}>
            <div className='container_header'>
                <p className='container_header-title'>{title}</p>
                {isFullScreen ? 
                    <MdOutlineZoomInMap onClick={toggle} className='container_header-btn'/>: 
                    <MdOutlineZoomOutMap onClick={toggle} className='container_header-btn'/>}
            </div>
            <div className='container_content'>
                {content}
            </div>
        </div>
    );
}

export default Container;
