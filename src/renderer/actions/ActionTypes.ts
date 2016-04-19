export enum ActionTypes {
  /* API CALL - /me */
  RequestMe,
  ResponseMe,

  /* API CALL - /my/status */
  RequestMyStatus,
  ResponseMyStatus,

  /* API CALL - /my/tasks */
  RequestMyTasks,
  ResponseMyTasks,

  /* API CALL - /contacts */
  RequestContacts,
  ResponseContacts,

  /* API CALL - /rooms */
  RequestRooms,
  ResponseRooms,

  /* API CALL - /rooms/:id */
  RequestRoom,
  ResponseRoom,

  /* API CALL - /rooms/:id/members */
  RequestRoomMembers,
  ResponseRoomMembers,

  /* API CALL - /rooms/:id/messages */
  RequestRoomMessages,
  ResponseRoomMessages,

  /* API CALL - /rooms/:id/messages/:id */
  RequestRoomMessageDetails,
  ResponseRoomMessageDetails,

  /* API CALL - /rooms/:id/tasks */
  RequestRoomTasks,
  ResponseRoomTasks,

  /* API CALL - /rooms/:id/tasks/:id */
  RequestRoomTaskDetails,
  ResponseRoomTaskDetails,

  /* API CALL - /rooms/:id/files */
  RequestRoomFiles,
  ResponseRoomFiles,

  /* API CALL - /rooms/:id/files/:id */
  RequestRoomFileDetails,
  ResponseRoomFileDetails,

  /* API CALL - Error */
  ResponseError,

  /* User Actions */
  SelectRoom,
  ReplyMessage,
  QuoteMessage
}
