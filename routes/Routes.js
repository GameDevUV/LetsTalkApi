const express = require('express');
const routes = express.Router();

const add = require('../calls/user/add.users');
const del = require('../calls/user/del.users');
const updtUser = require('../calls/user/updt.users');
const searchedUser = require('../calls/user/search.users');
const newcontact = require('../calls/user/newcontact.user');
const sendself = require('../calls/user/sendself.user');


const newchat = require('../calls/chat/newchat');
const sendmessage = require('../calls/chat/sendmessage');
const getmessage = require('../calls/chat/getmessages');
const deletemessage = require('../calls/chat/deletemessage');
const addtochat = require('../calls/chat/group/addtochat');
const removefromchat = require('../calls/chat/group/removefromchat');
const status = require('../calls/user/status.user');
const getcontacts = require('../calls/user/getcontacts.user');
const selected = require('../calls/user/selected.users');
const check = require('../calls/user/check.user');
const getGroups = require('../calls/chat/group/getGroups.chat');

// operations on user
routes.route('/user/selfserve').get(sendself);
routes.route('/user/adduser').post(add);
routes.route('/user/deleteData').post(del);
routes.route('/user/updateData').post(updtUser);
routes.route('/user/finduser').get(searchedUser);
routes.route('/user/status').put(status);
routes.route('/user/newcontacts').put(newcontact);
routes.route('/user/getcontacts').get(getcontacts);
routes.route('/user/selectedcontact').get(selected);
routes.route('/user/check').get(check);

// operations for chats
routes.route('/chat/newchat').post(newchat);
routes.route('/chat/sendmessage').post(sendmessage);
routes.route('/chat/getmessage').get(getmessage);
routes.route('/chat/addtochat').put(addtochat);
routes.route('/chat/removefromchat').patch(removefromchat);
routes.route('/chat/deletemessage').delete(deletemessage);
routes.route('/chat/getGroup').get(getGroups);

module.exports = routes;