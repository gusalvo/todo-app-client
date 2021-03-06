"use strict";

(function(window, document, session) {



    // Please read me! https://stackoverflow.com/a/8835458
    window.addEventListener('load', function() {

        // +++++++ FUNCTIONS ++++++++

        // delete todo
        function deleteTodo(e) {
             var li = e.target.parentNode;
             var id = li.getAttribute('id');

            window.app.Store.deleteTodo(id, function(e) {

                li.parentNode.removeChild(li);

            });
        }


        // check todo
        function checkTodo(e) {
            var label = e.target.parentNode;
            var id = label.getAttribute('id');

           // console.log(id);

            var data = {
                   
                "data": {
                    "done": e.target.checked
                }
            }
           
            window.app.Store.updateTodo(id, data, function(e) {
            
           });
          
       }


       // update todo
       function modTodo(e) {
        var label = e.target.parentNode;
        var id = label.getAttribute('id');

       console.log(id);

        var data = {
               
            "data": {
                "content": "testo"
            }
        }
       
        window.app.Store.updateTodo(id, data, function(e) {
        
       });
      
   }


        
            // ++++++++++++++++ LIST TO DO
            window.app.Store.getTodos(function(response){

                for (let i = 0; i < response.data.docs.length; i++) {


                   // li
                   var li = document.createElement('li');
                   li.classList.add("TodoElement");
                   li.textContent = response.data.docs[i].content;
                   li.setAttribute('id', response.data.docs[i]._id);
                    
                   // check box 
                   var checkbox = document.createElement("input");
                   checkbox.classList.add("CheckElement");
                   checkbox.setAttribute("type", "checkbox");
                  
                   //if
                   if (response.data.docs[i].done == true) {
                        checkbox.setAttribute("checked", true);

                   }
                   

                   checkbox.setAttribute("id", response.data.docs[i]._id);

                   // label
                   var label = document.createElement('label');
                   label.setAttribute("id", response.data.docs[i]._id);
                   // span element
                   var span = document.createElement('span');
                   span.classList.add("DeleteElement");
                   span.textContent = 'x';
                   // span.classList.add('delete');
                   // append
                   
                   list.appendChild(li);
                   li.appendChild(label);
                   label.appendChild(checkbox);
                   li.appendChild(span);
                   
                   // add listener
                   span.addEventListener('click', deleteTodo);
                   label.addEventListener('click', checkTodo);
                   li.addEventListener('click', modTodo);
                   
                    
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
               li.classList.add("TodoElement");
               li.textContent = param1.data.content;
               li.setAttribute('id', param1.data._id);
               // checkbok
               var checkbox = document.createElement("input");
               checkbox.classList.add("CheckElement");
               checkbox.classList.add("custom-control-input");
               checkbox.setAttribute("type", "checkbox");
                //if
                if (param1.data.done == true) {
                    checkbox.setAttribute("checked", true);

               }
               checkbox.setAttribute("id", param1.data._id);
               // span element
               var span = document.createElement('span');
               span.classList.add("DeleteElement");
               span.textContent = 'x';
               // span.classList.add('delete');
               // append
               list.appendChild(li);
               li.appendChild(checkbox);
               li.appendChild(span);
               // add listener
               span.addEventListener('click', deleteTodo);

                })

            })
            // ++++++++++++++++++++++++ 


            // +++++++ FUNCTION DONE
           var btninvio = document.querySelector('#modulo');
        

    

    });
})(window, document, window.app.Session);
