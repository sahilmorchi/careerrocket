(function () {
    //initialize firebase

    const config = {
        apiKey: "AIzaSyCBkT2QkwUwjCdQMRi0GIGEohkm8QqNDrY",
        authDomain: "careerrocket-f93ee.firebaseapp.com",
        databaseURL: "https://careerrocket-f93ee.firebaseio.com",
        projectId: "careerrocket-f93ee",
        storageBucket: "careerrocket-f93ee.appspot.com",
        messagingSenderId: "20227819319"
    };

    firebase.initializeApp(config);

    //Get elements
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const loginButton = document.getElementById('loginButton');
    const signUpButton = document.getElementById('signUpButton');
    const signUpEmail = document.getElementById('signUpEmail');
    const signUpPassword = document.getElementById('signUpPassword');
    const signUpConfirm = document.getElementById('signUpConfirm');
    //const logoutBtn


    if (loginButton) {

        //add login event
        loginButton.addEventListener('click', e => {
            console.log('i am listening');
            //get email and pass
            const email = loginEmail.value;
            const password = loginPassword.value;
            const auth = firebase.auth();
            //sign in
            const promise = auth.signInWithEmailAndPassword(email, password);
            promise
                .catch(e => console.log(e.message));
//                .then(console.log("log-in success!"));
            
            
        });
        
  

    }



    if (signUpButton) {
        signUpButton.addEventListener('click', e => {
            //get email and pass
            //TODO: CHECK for REAL EMAILS
            const email = signUpEmail.value;
            const password = signUpPassword.value;
            const confirmPassword = signUpConfirm.value;

            const auth = firebase.auth();
            //sign in
            const promise = auth.createUserWithEmailAndPassword(email, password);
            promise
                .catch(e => console.log(e.message));
        });
    }
    //add signup event

    //add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log("Login success!")
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
            // TODO: Display this text somewhere on the screen for user notice. 
        }
    });

}());
