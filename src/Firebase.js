import React from 'react';
import firebase from 'firebase';
import app from 'firebase/app';


const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

export const FirebaseContext = React.createContext(null);


export class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = firebase.default.auth();
    this.db = firebase.default.database();
  }
  
  componentDidMount() {
      this.listener = firebase.onAuthUserListener(
        authUser => {
          if (!!authUser) {
            this.props.history.push("/signin");
          }
        },
        () => this.props.history.push("/signin"),
      );
    }
  
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

}


export class FirebaseProvider extends React.Component {
  firebase = new Firebase();
  render () {
    return (
      <FirebaseContext.Provider value={this.firebase}>
        {this.props.children}
      </FirebaseContext.Provider>
    );
  }
}


export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);
