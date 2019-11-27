import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SkiDayList } from './SkiDayList';
import { SkiDayCount } from './SkiDayCount';
import { AddDayForm } from './AddDayForm';

import { Whoops404 } from './Whoops404';
import { Menu } from './Menu';

import { MembersList } from './MembersList';



export class App extends Component {

  constructor(props) {
    
    super(props);
    
    this.state = {
      allSkiDays: [
        {
          resort: "Squaw Valley",
          date: "1/1/2019",
          powder: true,
          backcountry: false
        },
        {
          resort: "Krikwood",
          date: "3/28/2019",
          powder: false,
          backcountry: false
        },
        {
          resort: "Mt. Tallac",
          date: "4/1/2019",
          powder: false,
          backcountry: true
        }
      ]
    };

    this.addDay = this.addDay.bind(this);
  }
  

  addDay(newDay) {
    this.setState({
      allSkiDays: [
        ...this.state.allSkiDays,
        newDay
      ]
    })
  }


  countDays(filter) {
    
    const { allSkiDays } = this.state;
    return allSkiDays.filter(day => {
      return (filter) ? day[filter] : day;
    }).length;
  };

  render() {
    
    return (
        <div className="app">
            <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <SkiDayCount total={this.countDays()}
                               powder={this.countDays("powder")}
                               backcountry={this.countDays("backcountry")}
                               goal= {100}
                  />
                </Route>
                
                <Route exact path="/add-day">
                  <AddDayForm onNewDay={this.addDay} />
                </Route>
      
                <Route exact path="/list-days" 
                       render= {() => <SkiDayList days={this.state.allSkiDays} />}
                > 
                </Route>

                <Route path="/list-days/:filter" 
                       render= {(props) => (
                                            <SkiDayList days={this.state.allSkiDays}
                                                       filter={props.match.params.filter} />
                                           )
                               }
                >
                </Route>
      
                <Route exact path="/members">
                  <MembersList />
                </Route>
      
                <Route path="*">
                  <Whoops404 />
                </Route>
                
              </Switch>
      
              <Menu />
            </div>
          </Router>
          

        </div>
    );
  }

}
