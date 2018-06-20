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


        // update todo
        /*
        function updateTodo(e){
            var id = response.data.docs[i]._id;
            console.log(id);
        }
        */


        
            // ++++++++++++++++ LIST TO DO
            window.app.Store.getTodos(function(response){

                for (let i = 0; i < response.data.docs.length; i++) {

                   var li = document.createElement('li');
                   li.classList.add("TodoElement");
                   li.textContent = response.data.docs[i].content;
                   li.setAttribute('id', response.data.docs[i]._id);

                  
                   
                   // check box 
                   var checkbox = document.createElement("input");
                   checkbox.classList.add("CheckElement");
                   checkbox.setAttribute("type", "checkbox");
                   checkbox.setAttribute("indeterminate", false);
                   checkbox.setAttribute("id", response.data.docs[i]._id);
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
                  // li.addEventListener('click', updateTodo);
                   

                    
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
               checkbox.setAttribute("indeterminate", false);
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
