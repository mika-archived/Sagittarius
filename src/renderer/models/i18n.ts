/// <reference path="../../typings/tsd.d.ts" />

import {Global} from '../global';
import texts from './language';

export class i18n {
  static t(id: string): string {
    return texts[Global.ChatworkAccount.config.lang][id];
  }
}