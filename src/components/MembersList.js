import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import { Member } from './Member';


export class MembersList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      members: [],
      fetching: false,
      administrators: []
    }

    this.makeAdmin = this.makeAdmin.bind(this);
    this.removeAdmin = this.removeAdmin.bind(this);
  }

  componentDidMount() {
    this.setState({
      fetching: true
    });

    fetch("https://api.randomuser.me/?nat=US&results=6")
      .then(response => response.json())
      .then(json => json.results)
      .then(members => this.setState({ members: members, fetching: false }));
    
  }

  makeAdmin(email) {
    const administrators = [
      ...this.state.administrators,
      email
    ]

    this.setState({ administrators });
  }

  removeAdmin(email) {
    const administrators = this.state.administrators.filter(adminEmail => adminEmail !== email);

    this.setState({ administrators });
  }


  render() {
    let { members, fetching } = this.state;


    return (
      <div className="member-list">
        <h2>Society Members</h2>

        {(fetching) ? <span>loading ...</span> : <span>{members.length} members</span>}

        {(members.length) ? members.map((member, i) => (
                              <Member key={i}
                                      admin={this.state.administrators.some(adminEmail => adminEmail === member.email)}
                                      name={member.name.first + ' ' + member.name.last}
                                      email={member.email}
                                      thumbnail={member.picture.thumbnail}
                                      makeAdmin={this.makeAdmin}
                                      removeAdmin={this.removeAdmin}
                              />    
                             )) : 
                             <span>Currently 0 members</span>}
      </div>


    );
  }

}