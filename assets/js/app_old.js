"use strict";

(function(window, document, session) {



    // Please read me! https://stackoverflow.com/a/8835458
    window.addEventListener('load', function() {


            var modulo = document.getElementById('modulo');
            var list = document.getElementById('list');
        
            window.app.Store.getTodos(function(response){

                for (let i = 0; i < response.data.docs.length; i++) {
                    // console.log(response.data.docs[i]);

                    /*
                    var li = '<li>' + response.data.docs[i].content + '</li>';
                    list.innerHTML += li;
                    */
                    
                    
                    var li = document.createElement('li');
                          
                    var div = document.createElement("div");
                    div.innerHTML = response.data.docs[i].content;

                    var list = document.getElementById("list");

                    li.appendChild(div)
                    list.appendChild(li)


                    /*
                    var li = document.createElement('li');
                    var div = document.createElement('div');
                    div.innerHTML = response.data.docs[i].content;

                    
                    div.appendChild(li);
                    list.appendChild(list);
                    */

                    
                    
                    
                    
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

                //


                //

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

                    /*
                    var li = '<li>' + param1.data.content + '</li>';
                    list.innerHTML += li;
                    */


                   var li = document.createElement('li');
                          
                   
                   var div = document.createElement("div");
                   div.innerHTML = param1.data.content;

                   var checkbox = document.createElement("input");
                   checkbox.classList.add("custom-control-input");
                   checkbox.setAttribute("type", "checkbox");
                   checkbox.setAttribute("indeterminate", false);


                   

                   var list = document.getElementById("list");

                
                   li.appendChild(div)
                   div.appendChild(checkbox);
                   list.appendChild(li)






                    

                })


            })
            // ++++++++++++++++++++++++ 


           

    

    });
})(window, document, window.app.Session);
