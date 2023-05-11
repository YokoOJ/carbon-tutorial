import React, { Component } from 'react';
import './app.scss';
import { Theme, Content } from '@carbon/react';
import { Route, Switch } from 'react-router-dom';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          {/* <Button>Button</Button> */}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
    // return (
    //   <div>
    //     Hello Carbon! Well, not quite yet. This is the starting point for the
    //     Carbon tutorial.
    //   </div>
    // );
  }
}

export default App;
