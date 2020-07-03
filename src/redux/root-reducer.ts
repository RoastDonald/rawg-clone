import { combineReducers } from 'redux';
import { sidebarReducer, SidebarReducerType } from './sidebar/sidebar.reducer';

export interface IStore {
  sidebar: SidebarReducerType;
}

export default combineReducers({
  siderbar: sidebarReducer,
});
