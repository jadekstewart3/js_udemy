//adding new chat documents
//set up a real-time listener to get new chats
//update the username
//update the room
import { chatsRef } from "./index.js";

class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = chatsRef;
  }
}



const chatroom = new Chatroom('gaming', 'shaun');
console.log(chatroom);