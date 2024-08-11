import { db } from "@/utils/firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

export async function saveChat(chat) {
  const chatRef = await addDoc(collection(db, "chats"), chat);
  return chatRef.id;
}

export async function saveMessage(chatId, message) {
  await addDoc(collection(db, "chats", chatId, "messages"), message);
}

export async function renameChat(chatId, newTitle) {
  const chatDoc = doc(db, "chats", chatId);
  await updateDoc(chatDoc, { title: newTitle });
}