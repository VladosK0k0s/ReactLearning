import {createStore, combineReducers} from 'redux';
import PostsPage_reducer from './PostsPage_reducer.js'
import MessagesPage_reducer from './MessagesPage_reducer.js'
import FriendsPage_reducer from './FriendsPage_reducer.js'
import SettingsPage_reducer from './SettingsPage_reducer.js'





let reducers = combineReducers({
	PostsPage: PostsPage_reducer,
	MessagesPage: MessagesPage_reducer,
	FriendsPage: FriendsPage_reducer,
	SettingsPage: SettingsPage_reducer,
})

let store = createStore(reducers);

export default store;