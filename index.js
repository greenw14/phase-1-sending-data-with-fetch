// Add your code here

   function submitData(firstName, email) {
       const confgObj = {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
           },
       body: JSON.stringify({
           "name": firstName,
           "email": email
       })
    };
    return fetch("http://localhost:3000/users" , confgObj)
   .then(res => res.json())
  .then(body => addNewContact(body.id))
  
  .catch(response => 'Unauthorized Access')
}
function addNewContact(newID){
    document.getElementsByTagName("body")[0].innerHTML = newID;
    document.body.append(message)
}
submitData("Name" , "name@name.com");