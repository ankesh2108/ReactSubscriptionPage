import React from 'react'
import SubscriptionUI from './SubscriptionUI';
import './FeaturesTable.css'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function FeaturesTable() {
    return (
        <div>
            <div class="container outer">
                <table class="table table-striped table-hover text-center">
                    <thead>
                        <tr>
                            <th><h3 style={{fontWeight:900}}>Features</h3></th>
                            <th><SubscriptionUI title="Starter" price="0" btnName="Go Starter"/></th>
                            <th><SubscriptionUI title="Professional" price="25" btnName="Go Professional"/></th>
                            <th><SubscriptionUI title="Organizasion" price="50" btnName=" Go Organizasion"/></th>


                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <th className="tablebody" scope="row">Centralized Item</th>
                            <td ><CheckCircleIcon style={{ color:'green'}}/></td> 
                            <td><CheckCircleIcon style={{ color:'green'}}/></td>   
                            <td><CheckCircleIcon style={{ color:'green'}}/></td>   
                        </tr>
                        <tr>
                            <th scope="row">Version history</th>
                            <td><CheckCircleIcon style={{ color:'green'}}/></td>  
                            <td><CheckCircleIcon style={{ color:'green'}}/></td>  
                            <td style={{color:'red'}}><HighlightOffIcon/></td>    
                        </tr>
                        <tr>
                            <th scope="row">Plugin administrations </th>
                            <td><HighlightOffIcon  style={{color:'red'}}/></td>   
                            <td><CheckCircleIcon style={{ color:'green'}}/></td>     
                            <td><HighlightOffIcon  style={{color:'red'}}/></td>  
                        </tr>
                        <tr>
                            <th scope="row">Facebook and instagrams ads </th>
                            <td><HighlightOffIcon  style={{color:'red'}}/></td>   
                            <td><CheckCircleIcon style={{ color:'green'}}/></td>    
                            <td><HighlightOffIcon  style={{color:'red'}}/></td>  

                        </tr>
                        <tr>
                            <th scope="row">Design System Analytics </th>
                            <td><HighlightOffIcon  style={{color:'red'}}/></td>   
                            <td><HighlightOffIcon  style={{color:'red'}}/></td>     
                            <td><CheckCircleIcon style={{ color:'green'}}/></td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FeaturesTable
