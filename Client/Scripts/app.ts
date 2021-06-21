/*
File name : app.ts
Student’s Name : Irin Nahar
StudentID: 301173198
Date: 21/06/2021
course : COMP 229
lab: Mid term
*/
//IIFE -- Immediately Invoked Function Expression
"use strict";

(function(){

    function confirmDelete()
    {
      // confirm deletion
      $("a.delete").on("click", function(event){
        if(!confirm("Are you sure?"))
        {
          event.preventDefault();
          location.href = '/books';
        }       
      });
    }

    function Start():void
    {
        console.log("App Started");
        
        confirmDelete();  
    }

    window.addEventListener("load", Start);

})();

