function store(){ //stores items in the localStorage
    var name = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phn').value;
    var key = document.getElementById('key').value;
  const details = {
        name: name,
        phoneNumber: phoneNumber,
    }
  window.localStorage.setItem(key,JSON.stringify(details));  
    //converting object to string
    display()
  }
  function removeItem(){ //deletes item from localStorage
    var key = document.getElementById('removeKey').value; //gets key from user
      localStorage.removeItem(key) //passes key to the removeItem method
      console.log("remove items");
  }
  
  function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
      console.log("clear records");
  }
  
  window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("detailsForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
  }