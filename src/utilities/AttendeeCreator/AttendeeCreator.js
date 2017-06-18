import firebase from 'firebase';

export default class AttendeeGenerator {
  constructor(attendee){
    this.attendee = attendee;
    this.initializeFirebase();
  }

  initializeFirebase = () => {
    const config = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    }

    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
      firebase.auth().signInAnonymously();
    }
  }

  create({
    successMessage = 'Request was successful.',
    errorMessage = 'There was an issue with the request. Please try again or contact Tyler or Morgan if it continues to fail.'
  }) {
    try {
      firebase.database()
              .ref(`attendees/${this.attendee.firstName}${this.attendee.lastName}`)
              .set(this.attendee);
      return {
        status: 'success',
        message: successMessage,
      }
    }
    catch(error) {
      console.log(error);
      return {
        status: 'error',
        message: errorMessage,
      }
    }
  }
}