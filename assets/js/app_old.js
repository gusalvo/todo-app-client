"use strict";

(function(window, document, session) {

    // Please read me! https://stackoverflow.com/a/8835458
    window.addEventListener('load', function() {
        
       
    
            var btninvio = document.querySelector('#modulo');
            // console.log(btninvio);
            btninvio.addEventListener('submit', function(e){

                
                
                e.preventDefault();

                var todo = document.querySelector('#todo');

                var uuid = session.get();
                
                

                var data = {
                   
                    "data": {
                        "uuid": {uuid},
                        "content": todo.value,
                        "done": false
                    }
                }


               

            
                

                // console.log('ciao');

                window.app.Store.createTodo(data, function(param1) {

                    console.log(param1);
                    
                })


            })

        

    

    });
})(window, document, window.app.Session);
