import {AsyncAction} from './AsyncAction';
import {Me} from './Me';

export interface MeAction extends AsyncAction {
  me: Me;
}