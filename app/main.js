import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ProdException from './components/ProdException';
import Battlefront from './components/Battlefront';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <ProdException>
        <Component />
      </ProdException>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Battlefront);

if (module.hot) {
  module.hot.accept('./components/Battlefront', () => {
    const newApp = require('./components/Battlefront').default;
    render(newApp);
  });
}
