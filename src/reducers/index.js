import { combineReducers } from 'redux';

import QuestionsReducer from './reducer_questions';
import RappersReducer from './reducer_rappers';
import ChosenReducer from './reducer_chosen';

const rootReducer = combineReducers({
  questions: QuestionsReducer,
  rappers: RappersReducer,
  chosen: ChosenReducer
});

export default rootReducer;
