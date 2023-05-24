import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row} from 'reactstrap';
import TopHeaderCurrency from './TopHeaderCurrency';
import TopLanguage from './TopLanguage';

const TopHeaderBar2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='top-header top-header-black' style={{backgroundColor:"#0D2427"}}>
            <div className='container-fluid-lg'>
                <Row>
                    <div className='col-auto d-sm-block d-none'>
                        <ul className='border-list text-white'>
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Events</li>
                        </ul>
                    </div>

                    <div className='col-auto text-white'>
                        {/*<ul className='border-list p-0'>*/}
                        {/*<li>*/}
                        {/*  <Dropdown className='top-header-dropdown' isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>*/}
                        {/*    <DropdownToggle>*/}
                        {/*      <span>Login & Register</span>*/}
                        {/*      <i className='fas fa-chevron-down'></i>*/}
                        {/*    </DropdownToggle>*/}
                        {/*    <DropdownMenu>*/}
                        {/*      <DropdownItem>Log In</DropdownItem>*/}
                        {/*      <DropdownItem>Register</DropdownItem>*/}
                        {/*    </DropdownMenu>*/}
                        {/*  </Dropdown>*/}
                        {/*</li>*/}
                        {/*<TopHeaderCurrency />*/}
                        {/*<TopLanguage />*/}
                        {/*</ul>*/}
                       <div> <i className="fas fa-phone-alt"/> (866) 606-5229</div>
                    </div>
                </Row>
            </div>
        </div>
    );
};
export default TopHeaderBar2;
