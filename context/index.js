import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    dbh: null,
  }

  setDbh = (dbh) => {
    this.setState({dbh: dbh});
  }

  render () {
    return (
      <MyContext.Provider value={{
        dbh: this.state.dbh,
        setDbh: this.setDbh,
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export {MyContext, MyProvider};
