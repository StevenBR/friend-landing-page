import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import { pagination } from 'violet-paginator';

import auth from './auth';
import counter from './counter';
import {reducer as form} from 'redux-form';
import info from './info';
import widgets from './widgets';
import modal from './modal.js';
import messagesProcessed from './messagesProcessed';
import submitNumber from './submitNumber';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  form,
  multireducer: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  info,
  pagination,
  widgets,
  modal,
  messagesProcessed,
  submitNumber
});
