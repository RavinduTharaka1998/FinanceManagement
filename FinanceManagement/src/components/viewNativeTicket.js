import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/finance.css';


export default  class viewNativeTicket extends  Component{


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

                            <h4 style={{color:'white',marginRight:600}}>NATIVE TICKET HISTORY</h4>
                        </center>

                        <table className="table table-striped" style = {{marginTop :20,marginLeft:270,width:'80%',color:'white'}}>
                            <thead>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th>Reference Number</th>
                                    <th>No of Adult</th>
                                    <th>No of Child</th>
                                    <th>Price (a)</th>
                                    <th>Price (c)</th>
                                    <th>Total</th>
                                    <th>Generating Receipt Date</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {this.tabRow()} */}
                            </tbody>
                        </table>
                    </div>
                </div>
        );
    }
}