"use strict";

(function(window, document, session) {



    // Please read me! https://stackoverflow.com/a/8835458
    window.addEventListener('load', function() {


         //   var modulo = document.getElementById('modulo');
         //   var list = document.getElementById('list');
        
            // ++++++++++++++++ LIST TO DO
            window.app.Store.getTodos(function(response){

                for (let i = 0; i < response.data.docs.length; i++) {
                    // console.log(response.data.docs[i]);

                
                    var li = document.createElement('li');
                          
                    var div = document.createElement("div");
                    div.innerHTML = response.data.docs[i].content;

                    var list = document.getElementById("list");

                    li.appendChild(div)
                    list.appendChild(li)

                    
                }

                

            })
       
            // ++++++++++++++++ SUBMIT TO DO
            var btninvio = document.querySelector('#modulo');
            // console.log(btninvio);
            btninvio.addEventListener('submit', function(e){

                e.preventDefault();

                

                var todo = document.querySelector('#todo');
                var uuid = session.get();
                var data = {
                   
                    "data": {
                        "uuid": uuid,
                        "content": todo.value,
                        "done": false
                    }
                }
                // console.log('ciao');

                window.app.Store.createTodo(data, function(param1) {
                    console.log(param1); 

                   var li = document.createElement('li');
                          
                   
                   var div = document.createElement("div");
                   div.innerHTML = param1.data.content;

             
                   var checkbox = document.createElement("input");
                   checkbox.classList.add("custom-control-input");
                   checkbox.setAttribute("type", "checkbox");
                   checkbox.setAttribute("indeterminate", false);
                   checkbox.setAttribute("id", param1.data._id);
                   

                   var list = document.getElementById("list");

                
                   li.appendChild(div)
                   div.appendChild(checkbox);
                   list.appendChild(li)


                })

            })
            // ++++++++++++++++++++++++ 


            // +++++++ FUNCTION DONE

           // var btndone = document.quertSelector('')

        

    

    });
})(window, document, window.app.Session);
