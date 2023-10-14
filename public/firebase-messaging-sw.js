importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');
 
// 이곳에 아까 위에서 앱 등록할때 받은 'firebaseConfig' 값을 넣어주세요.
const config = {
  apiKey: "AIzaSyD87wnL34Q3Gw_B4h82Adqe_1B07VTrxV0",
  authDomain: "taejowangun-76ec3.firebaseapp.com",
  projectId: "taejowangun-76ec3",
  storageBucket: "taejowangun-76ec3.appspot.com",
  messagingSenderId: "424634273165",
  appId: "1:424634273165:web:7e083e53c54ed20b2001c4",
  measurementId: "G-ZG0CCPCLQ9",
};
 
// Initialize Firebase
firebase.initializeApp(config);
 
const messaging = firebase.messaging();