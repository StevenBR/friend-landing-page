'use strict';

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://squareonelabs.herokuapp.com/starthere';

const responseBody = res => res.body;

const PhoneNumber = {
	post: numberRefsObject => superagent.post(API_ROOT).set('X-Parse-Application-Id':'engage').send(numberRefsObject).then()
}

export default {
	PhoneNumber
}