// function myFunction(button) {
//     // Get the text field
//     var copyText = button.previousElementSibling.document;
  
//     // Select the text field
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); // For mobile devices

//     // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText.value);

//     // Alert the copied text
//     alert("Link Copied!");
// }

// function myFunction() {
//     // Get the text field
//     var copyText = document.getElementById("copylink","copylink1", "copylink2", "copylink3", "copylink4", "copylink5", "copylink6", "copylink7" ,"copylink8" ,"copylink9" ,"copylink10", "copylink11", "copylink12", "copylink13", "copylink14","copylink15","copylink16","copylink17","copylink18","copylink19","copylink20","copylink21","copylink22","copylink23","copylink24","copylink25","copylink26");
  
//     // Select the text field
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); // For mobile devices

//     // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText.value);

//     // Alert the copied text
//     alert("Link Copied!");
// }



// function myFunction() {
//     // Get the text field
//     var copyText = document.getElementById('copylink');
  
//     // Select the text field
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); // For mobile devices

//     // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText.value);

//     // Alert the copied text
//     alert("Link Copied!");
// }


// This is by far NOT the best approach, but it is easy to understand and implement so start with this
// Change all the ids of the buttons to be unique, if you have 2 or more ids that are the same this will break
// REMOVE the onclick from the html
 
window.addEventListener("load", () => {
    //This code will ONLY run when the document has loaded
    // get a reference to our first input (let's say it has id copyLink1)
    const firstButton = document.getElementById("copylink1");
    // Attach a click listener to this input
    firstButton?.addEventListener("click", () => {
      // The input is clicked and we copy the link from it by passing it to the function
      copyLinkFromElement(firstButton);
    });
     // get a reference to our first input (let's say it has id copyLink2)
    const secondButton = document.getElementById("copylink2");
    secondButton?.addEventListener("click", () => {
      // The input is clicked and we copy the link from it by passing it to the function
      copyLinkFromElement(secondButton);
    });
    // Repeat for all inputs
  })
   
  function copyLinkFromElement(element) {
    
    element.select();
    element.setSelectionRange(0, 99999); // For mobile devices
   
    // Copy the text inside the text field
    navigator.clipboard.writeText(element.value);
   
    // Alert the copied text
    alert("Link Copied!");
  }