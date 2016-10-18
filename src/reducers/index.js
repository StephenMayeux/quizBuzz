import { combineReducers } from 'redux';

import QuestionsReducer from './reducer_questions';
import RappersReducer from './reducer_rappers';

const rootReducer = combineReducers({
  questions: QuestionsReducer,
  rappers: RappersReducer
});

export default rootReducer;
