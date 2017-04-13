'use strict';

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://hellofriend-io.herokuapp.com/parse/functions/getConversationsCount';

const responseBody = res => res.body;

const Messages = {
	post: () => superagent.post(API_ROOT).set('X-Parse-Application-Id','hellofriend').then()
}

export default {
	Messages
}