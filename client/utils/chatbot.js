import { db } from './firebase.js'
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

export async function saveChat(chat) {
  const chatRef = await addDoc(collection(db, "chats"), chat);
  return chatRef.id;
}

export async function saveMessage(chatId, message) {
  if (!chatId) {
    console.error("chatId is null or undefined");
    return;
  }
  if (!message) {
    console.error("message is null or undefined");
    return;
  }
  if (message.text === null || message.text === undefined) {
    console.error("message.text is null or undefined");
    return;
  }
  if (typeof message.text.indexOf !== 'function') {
    console.error("message.text does not have indexOf method");
    return;
  }

  await addDoc(collection(db, "chats", chatId, "messages"), message);
}

export async function renameChat(chatId, newTitle) {
  if (!chatId) {
    console.error("chatId is null or undefined");
    return;
  }
  if (!newTitle) {
    console.error("newTitle is null or undefined");
    return;
  }
  const chatDoc = doc(db, "chats", chatId);
  await updateDoc(chatDoc, { title: newTitle });
}