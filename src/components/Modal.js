import React from "react";
import  ReactDOM  from "react-dom";

const Modal = (props) => {
    return ( 
        ReactDOM.createPortal(
            <div onClick={()=>window.location.replace("/")} className="ui dimmer modals visible active">
                <div onClick={(e)=> e.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">Delete Stream</div>
                    <div className="content">{props.content}</div>
                    <div className="actions">
                        <button onClick={props.onDelete} className="ui primary button">Delete</button>
                        <button onClick={()=>window.location.replace("/")} className="ui button">Cancel</button>

                    </div>
                </div>
            </div>, document.getElementById("modal"))
     );
}
 
export default Modal;