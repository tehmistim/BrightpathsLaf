import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './components/Home'
import EnterWanted from './components/EnterWanted'
import ModifyWanted from './components/ModifyWanted'
import CancelWanted from './components/CancelWanted'


const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }} />
  );
}

export default (
  <div>
      <h1 className="titleBar"> Wanted Queries </h1>
    <Switch>
      <PropsRoute exact path="/" component={Home} />
      <PropsRoute path="/enter" component={EnterWanted} />
      <PropsRoute path="/modify" component={ModifyWanted} resultReturn={"HELLO"} />
      <PropsRoute path="/cancel" component={CancelWanted} resultReturn={"HELLO"} />
    </Switch>
  </div>
)