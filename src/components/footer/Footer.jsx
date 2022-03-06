import { Mail, Phone, Room } from '@material-ui/icons'
import React from 'react'
import './footer.scss'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="left">
                <h1 className="logo">George Electronics</h1>
                <p className='desc'>As a local tech fixer,
                    we are absolutely determined to settle any appliance issues that you might have!
                    We offer a full range of solutions to meet your
                    entire business and personal needs. Our technicians
                    have helped many small businesses and homeowners with
                    their appliance repair and service needs in the Transkei Area.
                    Corporate Accounts are Welcome! </p>
            </div>
            <div className="center">
                <h3 className="title">Our Services</h3>
                <ul className="list">
                    <li className="listItem">About</li>
                    <li className="listItem">Appliance Repairs</li>
                    <li className="listItem">Secondhand Sales</li>
                </ul>
            </div>
            <div className="right">
                <h3 className="title">Contact</h3>
                <div className="contactItem">
                    <Room className='contactIcon'/>
                    <span className='contactText'>28 Madeira Street, Mthatha, 5099<br/>(Clublink Building)</span> 
                </div>
                <div className="contactItem">
                    <Phone className='contactIcon'/>
                    <span className='contactText'>047 531 0808</span> 
                </div>
                <div className="contactItem">
                    <Mail className='contactIcon'/>
                    <span className='contactText'>de.georgelectronic@gmail.com</span> 
                </div>
            </div>
        </div>
    )
}
