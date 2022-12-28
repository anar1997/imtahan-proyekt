/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showHesabMenu() {
    var el = document.querySelector(".hesab-menu");
    if (el.style.display === "none") {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  }

  function trash(event){
    event.target.parentElement.parentElement.style.display="none"
  }

  document.getElementById("newsectionbtn").onclick = function() {
    var container = document.getElementById("container");
    var count = container.childElementCount;
    // var section = document.getElementById("mainsection");
    // container.appendChild(section.cloneNode(true));
  //  create element
    const elDiv= document.createElement("div");
   const elDiv1=document.createElement("div");
   const elA1=document.createElement("a");
   const elLabel=document.createElement("label");
   const elLabel1=document.createElement("label");
   const elTextarea=document.createElement("textarea");
   const elIcon=document.createElement("ion-icon");
   const elIcon1=document.createElement("ion-icon");
   const elIcon2=document.createElement("ion-icon");
   const elIcon3=document.createElement("ion-icon");
   const elInput=document.createElement("input");
   const elInput1=document.createElement("input");
   // add class
   elDiv.classList.add("col-3");
   elDiv.classList.add("div-textarea-1");
   elDiv1.classList.add("p-image");
   elIcon.classList.add("i-image-1");
   elIcon.classList.add("upload-button");
   elIcon1.classList.add("trash");
   elIcon1.classList.add("margin-left");
   elIcon2.classList.add("checkmark-circle");
   elIcon2.classList.add("checked");
   elIcon3.classList.add("checkmark-circle");
   elIcon3.classList.add("unchecked");
   elLabel.classList.add("custom-checkbox");
   elInput1.classList.add("file-upload");
    // add atribute
   elA1.setAttribute("href", "#");
    elIcon.setAttribute("name", "image");
    elIcon1.setAttribute("name", "trash");
    elIcon1.setAttribute("onclick", "trash(event)");
    elIcon2.setAttribute("name", "checkmark-circle");
    elIcon3.setAttribute("name", "close-circle-outline");
    elTextarea.setAttribute("placeholder", "Cavabınızı daxil edin.");
    elTextarea.setAttribute("cols","30");
    elTextarea.setAttribute("rows","10");
    elInput.setAttribute("type", "checkbox")
    elInput1.setAttribute("type", "file");
    elInput1.setAttribute("id",`file-input-${count+1}`);
    elLabel1.setAttribute("for", `file-input-${count+1}`);
    //add appendCHild
    elDiv1.appendChild(elLabel1);
    elDiv1.appendChild(elInput1);
    elA1.appendChild(elIcon1);
    elLabel.appendChild(elInput);
    elLabel.appendChild(elIcon2);
    elLabel.appendChild(elIcon3);
    elLabel1.appendChild(elIcon);
    //add appendChild-2
    elDiv.appendChild(elDiv1);
    elDiv.appendChild(elA1);
    elDiv.appendChild(elLabel);
    elDiv.appendChild(elTextarea); 

    container.appendChild(elDiv);
    
  }






  