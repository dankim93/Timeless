import React from 'react';
import { Provider } from 'react-redux';
//router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//react components
import App from './app';
import Splash from './splash/splash';
import SessionFormContainer from './session_form/session_form_container';
import UserContainer from './profile/profile_container';
import AlbumShowContainer from './albums/album_show_container';


const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  return(
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={Splash} />
          <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path='users/:userId' component={UserContainer} onEnter={_ensureLoggedIn} >
            <Route path="photos" component={UserContainer} onEnter={_ensureLoggedIn} />
            <Route path="albums" component={UserContainer} onEnter={_ensureLoggedIn} >
              <Route path="/:albumId" component={AlbumShowContainer} onEnter={_ensureLoggedIn} />
            </Route>

          </Route>
        </Route>

      </Router>
    </Provider>
  );
};
export default Root;
