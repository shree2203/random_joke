document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
   let number = document.querySelector('#num').value;
   const xhr = new XMLHttpRequest();

   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`,true);
   
   xhr.onload = function() {
      if(this.status === 200){
         const response = JSON.parse(this.responseText);
         let output = '';

         if(response.type === 'success'){
            response.value.forEach(function(joke){
               output += `<li>${joke.joke}</li>`;
            });
            
         }else {
            const response = this.responseText;
            output += '<li>something went wrong</li>';
         }
         
         document.querySelector('.li-joke').innerHTML = output;
      }
   }

   xhr.send();

   e.preventDefault();
}