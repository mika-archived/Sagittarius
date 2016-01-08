/// <reference path="../../typings/tsd.d.ts" />

// API 更新間隔(< 300s(300000ms))
// 基本はミリ秒で
// そのうち、残量によって自動調節するようにしたい。

export class API {
  /**
   * /my/status, 自分の未読数、未読To数、未完了タスク数の取得
   */
  static status: number = 1000 * 5;   // 5 sec
  
  /**
   * /my/tasks, 自分のタスク一覧を取得
   */
  //tasks: number;
  
  /**
   * /rooms, 自分のチャット一覧の取得
   */
  static rooms: number = 1000 * 60;  // 1 min
  
  /**
   * /rooms/:id/messages, チャットのメッセージ一覧を取得
   */
  static messages: number = 1000 * 20; // 20 sec
}