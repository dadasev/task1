import React from 'react';
import ReactDOM from 'react-dom';

import './popup.scss';

const PopupGif = ({ onPopupClose, gif }) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active popup-container">
            <div onClick={(e)=>e.stopPropagation()} className="ui standart modal visible active">
                <div className="header">{gif.title}</div>
                <div className="image-container">
                    <img alt={gif.title} src={gif.images.original.webp}/>
                </div>
                <div className="actions">
                    <button onClick={onPopupClose} className="ui button negative">Close</button>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default PopupGif;