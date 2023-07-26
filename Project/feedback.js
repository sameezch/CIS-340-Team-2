"use strict";

let feedback = "";
let message = "";
let newFeedback = "";
let ulNode = "";
let form = "";
let employeeName = ""
let feedbackHead = ""

// function to add the given feedback to the ul
function submitFeedback() {
    feedback = document.getElementById("textareaId").value;
    // if no entry in textarea creates alert saying text required
    if  (feedback == "") {
        alert("Please enter feedback into the textbox to submit.")
    // entry found in textarea so will send it on 
    } else {
        document.getElementById("feedbackListHeadID").style.display = "flex";
        employeeName = document.getElementById("inputNameId").value;
    // console.log(employeeName)
    // console.log(feedback.value)
        ulNode = document.getElementById("feedbackListId");
        newFeedback = document.createElement("li")
        // if no entry in name box then adds anonymous otherwise appends name to feedback
        if (employeeName == "") {
            newFeedback.appendChild(document.createTextNode(feedback + " - Anonymous"))
            ulNode.appendChild(newFeedback)
        } else{
            newFeedback.appendChild(document.createTextNode(feedback + " - " + employeeName))
            ulNode.appendChild(newFeedback)
        }
    }
}
// clears the text area
function clearTextarea (form) {
    form.reset();
}