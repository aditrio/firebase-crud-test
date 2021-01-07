

  // console.log("test");

  $(document).ready(function () {

    // $.get( "https://api.github.com/users/aditrio", function( data ) {
      
    //   console.log(data['name']);
    // });

        
      var firebaseConfig = {
        apiKey: "AIzaSyCGM52QuuiH-s6-6nd8AI8kXV3dMZgy57U",
        authDomain: "uas-sbd.firebaseapp.com",
        projectId: "uas-sbd",
        storageBucket: "uas-sbd.appspot.com",
        messagingSenderId: "108308801737",
        appId: "1:108308801737:web:2bfbd5a83b26036915c518",
        measurementId: "G-9LY6KW99NF"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

      var data = {
        'username' : 'aditrio',
        'email' : '30noadi@gmail.com'
      }

      $.ajax({
        url: 'https://uas-sbd-default-rtdb.firebaseio.com/.json',
        type: 'GET',
        // data: JSON.stringify(data),
      })
      .done(function() {
        console.log("success");
      })
      .fail(function() {
        console.log("error");
      })
      .always(function(result) {
        console.log(result);
      });
      

  });

  