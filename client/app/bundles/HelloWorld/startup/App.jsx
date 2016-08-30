import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';

import createStore from '../store/appStore';
import AppContainer from '../containers/AppContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const DraftApp = (props, _railsContext) => {
  const store = createStore(props);

  if (typeof App !== 'undefined') {
    App.draft = App.cable.subscriptions.create("DraftChannel", {
      connected: function () {
        return this.join();
      },
      disconnected: function () {
        return this.leave();
      },
      rejected: function () {},
      received: function (data) {
        console.log(data);
      },
      join: function () {
        return this.perform('join');
      },
      leave: function () {
        return this.perform('leave');
      },
      start: function () {
        return this.perform('start');
      },
      next_round: function () {
        return this.perform('next_round');
      },
      make_pick: function () {
        return this.perform('make_pick');
      }
    });
  }

  const reactComponent = (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
  return reactComponent;
};

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ DraftApp });
