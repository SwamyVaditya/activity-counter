import React, { Component } from 'react';

import { FaUserShield } from 'react-icons/fa';



export class Member extends Component {
  
  constructor(props) {
    super(props)

  }
  

  willComponentMount() {
    this.style = {
      backgroundColor: 'gray'
    }
  }

  componentWillUpdate(nextProps) {
    this.style = {
      backgroundColor: (nextProps.admin) ? 'green' : 'purple'
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.admin !== nextProps.admin;
  }
  

  render() {
    let { admin, name, email, thumbnail, makeAdmin, removeAdmin } = this.props;
    
    return (
      <div className="member" style={this.style}>
        <h1>{name} {(admin) ? <FaUserShield /> : null}</h1>
        
        {(admin) ? <a onClick={() => removeAdmin(email)}>Remove Admin</a> 
                 : <a onClick={() => makeAdmin(email)}>Make Admin</a> }

        <img src={thumbnail} alt="profile picture" />
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    );
  }

  
  
}