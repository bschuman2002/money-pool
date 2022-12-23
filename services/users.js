import { db } from "../firebase/firebaseInit";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function fetchGroups(userId) {
  const junctions = collection(db, "users_groups");
  const q = query(junctions, where("userId", "==", userId));

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
}
