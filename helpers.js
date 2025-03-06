import { query } from "@firebase/database";
import { where, collection, getDocs } from "@firebase/firestore";
import { firebaseFirestore } from "../firebase.config";

export const getUser = async (loginCode) => {
  const result = await getDocs(
    query(
      collection(firebaseFirestore, "users"),
      where("loginCode", "==", loginCode)
    )
  );
  return result;
};

export const getRelatives = async (userCode) => {
  const result = await getDocs(
    query(
      collection(firebaseFirestore, "relatives"),
      where("userCode", "==", userCode)
    )
  );
  return result;
};
