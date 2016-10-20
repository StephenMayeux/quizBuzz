import { combineReducers } from 'redux';

import QuestionsReducer from './reducer_questions';
import RappersReducer from './reducer_rappers';
import ChosenOptionsReducer from './reducer_chosen';

const rootReducer = combineReducers({
  questions: QuestionsReducer,
  rappers: RappersReducer,
  chosenOptions: ChosenOptionsReducer
});

export default rootReducer;
