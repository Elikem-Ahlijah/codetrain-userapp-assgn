import { getFirestore } from "redux-firestore";

export function getAllUsers() {
  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    db.collection("users").onSnapshot(
      (results) => {
        let users = [];
        results.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        dispatch({ type: "ADD_ALL_USERS", payload: users });
      },

      (err) => {
        console.log(err);
      }
    );
  };
}

export function addUser(newUser) {
  return async (dispatch, state, { getFirestore }) => {
    console.log(newUser);
    const db = getFirestore();
    try {
      await db.collection("users").add(newUser);
    } catch (err) {
      console.log(err);
    }
    // db.collection("users")
    //   .add(newUser)
    //   .then(() => {
    //     dispatch({ type: "ADD_USER", payload: newUser });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
}

export function deleteUser(id) {

  return async (dispatch, state, { getFirestore }) => {
    let db = getFirestore();
    try {
      await db.collection("users").doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  };
  // return { type: "DELETE_USER", payload: newUser };
}

export function updateUser(id, updatedUser) {
  return async (dispatch, state, { getFirestore }) => {
    let db = getFirestore();
    try {
      await db.collection("users").doc(id).update(updatedUser);
    } catch (err) {
      console.log(err);
    }
  };
  // return {
  //   type: "UPDATE_USER",
  //   payload: { id: id, updatedUserInfo: updatedUser },
  // };
}
