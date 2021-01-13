import React from 'react';
import './SubscriptionUI.css';

function SubscriptionUI(props) {
    return (
        <div>
            <div className="container">
                
                                <div className="card mx-auto ">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h3>$<span className="price">{props.price}</span></h3>
                        <p className="card-text">Per User, Per Month</p>
                        
                    </div>
                    <a href="/" className="btn  btn-outline-primary d-grid gap-2 col-10 my-3 ">{props.btnName}</a>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionUI;