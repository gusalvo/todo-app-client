"use strict";

(function(window, document, session) {

    // Please read me! https://stackoverflow.com/a/8835458
    window.addEventListener('load', function() {
        
            window.app.Store.getTodos(function(response){

                for (let index = 0; index < response.data.docs.length; index++) {
                    // console.log(response.data.docs[index]);

                    /*
                    var li = document.createElement("li");
                    var h3 = document.createElement("h3");
                    li.appendChild("#list");
                    h3.textContent = response.data.content;
                    */
                    
                }

                

            })
       
            // ++++++++++++++++ invio
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

                    
                    var div = document.createElement("div");
                    var h3 = document.createElement("h3");
                    document.body.appendChild(div);
                    h3.textContent = data.content;

                })


            })
            // ++++++++++++++++++++++++ 


            // ++++++++++++++++++++++++ lettura

            

           
            /*
            var div = document.createElement("div");
            var h3 = document.createElement("h3");
            document.body.appendChild(div);
            // h3.textContent =  ;
            */
        

    

    });
})(window, document, window.app.Session);
