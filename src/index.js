import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Battlefront from './components/Battlefront';
import ProdException from './components/ProdException';

ReactDOM.render(
  <ProdException>
    <Battlefront />
  </ProdException>,
  document.getElementById('root'),
);
