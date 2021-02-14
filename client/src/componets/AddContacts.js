import React,{Component} from 'react';
import Contacts from './Contacts';

export default class AddContacts extends Component {
    submitCotact(event) {
        event.preventDefault();

        let contacts = {
            firstName : this.ref.firstName.nodeValue,
            lastName : this.ref.lastName.nodeValue,
            email : this.ref.email.nodeValue,
        }
        fetch("http://localhost:8080/api/contacts",{
            method: "POST",
            header: {
                "content-type": "applicaion/json",

            },
            body:JSON.stringify(contacts)
        })
        .then(respose => Response.json());
        window.location.reload();
    }
    
    render () {
        return (
       <div className="row">
        <form className="col s12" onSubmit={this.submitCotact.bind(this)}>
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Placeholder" ref="firstName" type="text" class="validate"/>
                  <label htmlFor="firstName">First Name</label>
                </div>
            </div>
            <div className="input-field col s6">
                  <input ref="lastName" type="text" class="validate"/>
                  <label htmlFor="lastName">Last Name</label>
            </div>
             
              <div className="row">
                <div className="input-field col s12">
                  <input ref="email" type="email" class="validate"/>
                  <label htmlFor="email">Email</label>
                </div>
            </div>
              <div className="row">
               <button className='waves-effect waves-light btn' type='submit' name='action'>Submit</button>
              </div>    
        </form>   
    </div>
        )

    }
     
}