

  
  var item;

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

      var data = firebase.database().ref('/');

      data.on('value', (snapshot) => {

        item = snapshot.val();
        console.log(item);

      });
      



  });


    function getId()
    {
        if(item['tugas'] != null){

          return item['tugas'].length + 1;

        }
        return 0;
    }

  
    function submitData(){

        var judul = $('#judulTugas').val();
        var desc = $('#descTugas').val();
        var date = $('#deadlineTugas').val();
        var exp = $('#expTugas').val();
        var id = firebase.database().ref('tugas/').push().key;



        firebase.database().ref('tugas/' + id).set({

          id : id,
          judul : judul,
          desc : desc,
          date : date,
          exp : exp,
          status : "unsubmitted"

        });

        console.log("done");

    }

    function updateData(){

      firebase.database().ref('users/'+1).update({

        name : "gugukkk",
        email: "gugukkawaii@gmail.com"

      });
    }

    function deleteData(){

      firebase.database().ref('users/'+2).remove();
    }
          
