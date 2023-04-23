import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/finance.css';
import heart from "../components/img/heart.png";


export default  class addResource extends  Component{


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
                            <h1 style={{fontSize:70,color:'white',marginBottom:30}}>Dashboard</h1>

                            <div className='row' style={{width:'50%'}}>
                                <div className='cl'>
                                    <img src = {heart} width="40"/>
                                    <a href='/addmilktank'>Add Milk Tank</a>
                                </div>
                                <div className='cl'>
                                    <img src = {heart} width="40"/>
                                    <a href='/addmilktank'>Add Milk Tank</a>
                                </div>
                                <div className='cl'>
                                    <img src = {heart} width="40"/>
                                    <a href='/addmilktank'>Add Milk Tank</a>
                                </div>
                                <div className='cl'>
                                    <img src = {heart} width="40"/>
                                    <a href='/addmilktank'>Add Milk Tank</a>
                                </div>
                            </div>
                            {/* <div className='row' style={{width:'50%',marginTop:100}}>
                                <div className='col-lg-4'>
                                    <img src = {heart} width="40"/>
                                    <a href='/addmilktank'>Add Milk Tank</a>
                                </div>
                                <div className='col-lg-4'>
                                    <img src = {heart} width="40"/>
                                    <a href='/addmilktank'>Add Milk Tank</a>
                                </div>
                                <div className='col-lg-4'>
                                    <img src = {heart} width="40"/>
                                    <a href='/addmilktank'>Add Milk Tank</a>
                                </div>
                            </div>
                            <div className='row' style={{width:'50%',marginTop:100}}>
                                <div className='col-lg-4'>
                                    <img src = {heart} width="40"/>
                                    <a href='/addmilktank'>Add Milk Tank</a>
                                </div>
                                <div className='col-lg-4'>
                                    <img src = {heart} width="40"/>
                                    <a href='/addmilktank'>Add Milk Tank</a>
                                </div>
                                <div className='col-lg-4'>
                                    <img src = {heart} width="40"/>
                                    <a href='/addmilktank'>Add Milk Tank</a>
                                </div>
                            </div> */}
                        </center>
                    </div>
                </div>
        );
    }
}