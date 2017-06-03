import firebase from 'firebase';

export default class AttendeeGenerator {
  constructor(attendee){
    this.attendee = attendee;

    const config = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    }
    firebase.initializeApp(config);
    firebase.auth().signInAnonymously();
  }

  create(attendee) {
    firebase.database().ref('attendees/4').set(this.attendee);
  }
}