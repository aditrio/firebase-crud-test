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

      data.on('child_changed', (snapshot) => {

          window.location.reload();


      });

      data.on('value', (snapshot) => {

        item = snapshot.val();
        console.log(item['tugas']);

        $.each(item['tugas'],function(index) {
            loopData(item['tugas'][index]); 
            if (item['tugas'][index]['status'] == "submitted") {

                 $('.btn-submit').each(function() {
                    $(this).attr('disabled', 'true');
                 });

            }
        });

      });
      


    


  });

  function _submitTugas(id){


    firebase.database().ref('/tugas/' + id).update({

      
        status : "submitted"
    });
    window.location.reload();
  }

  function _deleteTugas(id){

    firebase.database().ref('/tugas/' + id).remove();
    window.location.reload();

  }

  function loopData(data)
  {

    var html;

    if (data['status'] != "submitted") {

      html = "<hr style='background-color: white'>"
                +"<div class='card bg-info text-light'>"
                    +"<div class='card-header'>"
                        +"<div class='row'>"
                            +"<div class='col-lg-8'>"                            
                                +"<h5 class='brand-font text-left text-light'>"+data['judul']+"</h5>"
                            +"</div>"
                            +"<div class='col-lg-2 ml-auto'><b>Exp :</b></div>"
                            +'<div class="col-lg-2 ml-auto">'
                            
                                +'<button  class="btn btn-sm btn-outline-light brand-font">'+ data['exp'] +'</button>'
                            +"</div>"
                       +" </div>"
                    +"</div>"
                    +'<div class="card-body">'
                       +' <p align="justify">'+data['desc']+'</p>'
                    +'</div>'
                   +' <div class="card-footer">'
                        +'<div class="row">'
                           +' <div class="col-lg-4 ">'
                               +'<p class="brand-font text-left ">deadline : '+ data['date'] +'</p>'                     
                            +'</div>'
                            +' <div class="col-lg-4 ">'
                               +'<small class="brand-font text-left ">'+ data['status'] +'</small>'                     
                            +'</div>'
                            
                            +'<div class="col-lg ml-5">'
                                +'<button type="submit" onclick="_submitTugas(\''+data['id']+'\')" class="btn btn-sm btn-dark brand-font btn-submit" >Submit !!!</button>'
                            +"</div>"
                       + "</div>"
                   +" </div>"
               +" </div>" ;

    }else{
      html = "<hr style='background-color: white'>"
                +"<div class='card bg-danger text-light'>"
                    +"<div class='card-header'>"
                        +"<div class='row'>"
                            +"<div class='col-lg-8'>"                            
                                +"<h5 class='brand-font text-left text-light'>"+data['judul']+"</h5>"
                            +"</div>"
                            +"<div class='col-lg-2 ml-auto'><b>Exp :</b></div>"
                            +'<div class="col-lg-2 ml-auto">'
                            
                                +'<button  class="btn btn-sm btn-outline-light brand-font">'+ data['exp'] +'</button>'
                            +"</div>"
                       +" </div>"
                    +"</div>"
                    +'<div class="card-body">'
                       +' <p align="justify">'+data['desc']+'</p>'
                    +'</div>'
                   +' <div class="card-footer">'
                        +'<div class="row">'
                           +' <div class="col-lg-4 ">'
                               +'<p class="brand-font text-left ">deadline : '+ data['date'] +'</p>'                     
                            +'</div>'
                            +' <div class="col-lg-4 ">'
                               +'<small class="brand-font text-left ">'+ data['status'] +'</small>'                     
                            +'</div>'
                            
                            +'<div class="col-lg ml-5">'
                                +'<button type="submit" onclick="_deleteTugas(\''+data['id']+'\')" class="btn btn-sm btn-dark brand-font btn-delete" >Delete !!!</button>'
                            +"</div>"
                       + "</div>"
                   +" </div>"
               +" </div>" ;
    }

   

        $('.loopData').append(html);

  }
