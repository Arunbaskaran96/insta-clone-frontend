import firebase from "firebase/compat/app";
import "firebase/compat/storage";

export const handleImage = (e: any) => {
    const selectedFiles = e.target.files[0];
    if (selectedFiles) {
      const storageRef = firebase.storage().ref();
      const filesRef = storageRef.child(selectedFiles.name);
      filesRef.put(selectedFiles).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          return downloadURL
        });
      });
    }
  };