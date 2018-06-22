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

    // var firebaseRef = firebase.database().ref();

    // firebaseRef.set("some value");



    // const preObject = document.getElementById('object');

    // // Create references
    // const dbRefObject = firebase.database().ref().child('user').child(;

    // const dbRefObject2 = firebase.database().ref().child('object');

    // // Sync object changes
    // dbRefObject.on('value', snap => console.log(snap.val())); 

    // // Reading data from the database
    // dbRefObject.on('value', snap => {
    //     preObject.innerText = JSON.stringify(snap.val(), null, 3);
    // })

    // dbRefObject2.set({
    //     name: "Sahil",
    // })


    $('#studentSubmit').click(function(){
        console.log("gayaa");
        console.log("Booper");
        window.location = '../../studentdashboard/studentdashboard.html';
    })

    const studentFirstName = document.getElementById('studentFirstName');
    const studentLastName = document.getElementById('studentLastName');
    const studentEmail = document.getElementById('studentEmail');
    const studentPhone = document.getElementById('studentPhone');
    const studentInterest = document.getElementById('studentInterest');
    const studentAbout = document.getElementById('studentAbout');
    
    
    const mentorFirstName = document.getElementById('mentorFirstName');
    const mentorLastName = document.getElementById('mentorLastName');
    const mentorEmail = document.getElementById('mentorEmail');
    const mentorCompany = document.getElementById("mentorCompany")
    const mentorPhone = document.getElementById('mentorPhone');
    const mentorField = document.getElementById('mentorField');
    const mentorAbout = document.getElementById('mentorAbout');


    var mentorFormData = {
        "role": "mentor",
        "mentorfirstName": mentorFirstName.value,
        "mentorlastName": mentorLastName.value,
        "mentorEmail": mentorEmail.value,
        "mentorCompany": mentorCompany.value,
        "mentorPhone": mentorPhone.value,
        "mentorField": mentorField.value,
        "mentorAbout": mentorAbout.value,
    }

    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('users/' + userId).set({
          username: name,
          email: email,
          profile_picture : imageUrl
        });
      }

    $('#mentorSubmit').click(function(){
        console.log("Booper");
        var firebaseRef = firebase.database()

        // var specificMentor = firebaseRef.child("users").child("mentors").child("mentor1");

        // firebaseRef.set({
        //     "role": "mentor",
        //     "mentorfirstName": mentorFirstName.value,
        //     "mentorlastName": mentorLastName.value,
        //     "mentorEmail": mentorEmail.value,
        //     "mentorCompany": mentorCompany.value,
        //     "mentorPhone": mentorPhone.value,
        //     "mentorField": mentorField.value,
        //     "mentorAbout": mentorAbout.value,
        // })

        firebase.database().ref('users/' + userId).set({
            username: "hello",
            email: "kvvetrivel@gmail.com",
            profile_picture : "hello",
          });


        window.location = '../../mentordashboard/mentordashboard.html';
    })


}());