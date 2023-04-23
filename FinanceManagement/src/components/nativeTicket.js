import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/finance.css';
import heart from "../components/img/heart.png";


export default  class nativeTicket extends  Component{


    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div>
                     <div class="sidebar">
                        <center>
                            <h2>Animal Haven</h2>
                            <h6>Admin Dashboard</h6>
                        </center>
                        <br/>
                        <a href="/">Dashboard</a>
                        <a href="/">Visitor Management</a>
                        <a href="/">Project Management</a>
                        <a href="/">Finance Management</a>
                        <a href="/">Inventory Management</a>
                        <a href="/">Handing Medical Records</a>
                        <a href="/">Animal Management</a>
                        <a href="">Volunteer Management</a>
                        <a href="">Employee Management</a>
                    </div>

                    <div class="content">

                        <center>

                            <br/>
                            <h1 style={{fontSize:40,color:'white',marginBottom:30}}>FINANCE DASHBOARD</h1>

                            <div>
                                <img src = "https://www.bigglasgowcomicpage.com/wp-content/uploads/2021/12/sp-tickets.png" width="700" style={{marginLeft:200}}/>
                            </div>

                            <br/><br/>
                            <div className='row'>
                                <div className='col'>
                                    <a href='/addNativeTicket'>ADD TICKET</a>
                                </div>
                                <div className='col'>
                                    <a href='/viewNativeTicket'>MANAGE TICKET</a>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
        );
    }
}