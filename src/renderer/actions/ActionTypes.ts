export enum ActionTypes {
  /* API CALL - /me */
  RequestMe,
  ResponseME,
  
  /* API CALL - /my/status */
  RequestMyStatus,
  ResponseMyStatus,
  
  /* API CALL - /rooms */
  RequestRooms,
  ResponseRooms,
  
  /* API CALL - /rooms/:id */
  RequestRoomsId,
  ResponseRoomsId,
  
  /* API CALL - /rooms/:id/members */
  RequestRoomsMembers,
  ResponseRoomsMembers,
  
  /* API CALL - /rooms/:id/messages */
  RequestRoomsMessages,
  ResponseRoomsMessages,
  
  /* API CALL - /rooms/:id/messages (POST) */
  PostRoomMessage,
  ResponseRoomMessage,
  
  /* User Actions */
  SelectRoom,
  ReplyMessage,
  QuoteMessage
}