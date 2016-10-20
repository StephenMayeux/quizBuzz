import { combineReducers } from 'redux';

import QuestionsReducer from './reducer_questions';
import RappersReducer from './reducer_rappers';
import ChosenOptionsReducer from './reducer_chosen';
import HideModalReducer from './reducer_display_modal';

const rootReducer = combineReducers({
  questions: QuestionsReducer,
  rappers: RappersReducer,
  chosenOptions: ChosenOptionsReducer,
  displayModal: HideModalReducer
});

export default rootReducer;
