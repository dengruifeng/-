// 主reducers
import { combineReducers } from 'redux';
// 引入其余的子reducer
import commonReducer from '../common/store/reducer';

export default combineReducers({
  common: commonReducer,
})
