// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxuTTFg19qX8QPNBEMsxEssLfvirHtqIM",
    authDomain: "whatsapp-ff864.firebaseapp.com",
    projectId: "whatsapp-ff864",
    storageBucket: "whatsapp-ff864.appspot.com",
    messagingSenderId: "851341005971",
    appId: "1:851341005971:web:b565883fa67aa23959a966",
    measurementId: "G-7QMR4NRH99"
  };
  
  // Initialize Firebaseapp
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firevbase.auth();
  const provider = new firebase.auth.GooleAuthProvider();

  export { auth, provider };
  export default db;