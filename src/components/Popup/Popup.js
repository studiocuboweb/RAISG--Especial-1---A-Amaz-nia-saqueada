import React from "react";
import { FormattedMessage } from "react-intl";
import './Popup.css';

const popup = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>            
                        <FormattedMessage
                        id="popup.title"
                        defaultMessage="Bem Vindo a Amazônia Saqueada"
                        />
                    </h3>
                </div>
                <div className="modal-body">
                    <p style={{'wordWrap':'break-word'}}>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>
                    <FormattedMessage
                        id="popup.close"
                        defaultMessage="Close"
                    />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default popup;