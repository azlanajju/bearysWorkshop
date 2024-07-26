function copyFunction(btnId, inputId) {
  document.getElementById(btnId).innerHTML = "Copied!";
  var copyText = document.getElementById(inputId).innerText;
  
  var tempTextarea = document.createElement("textarea");
  tempTextarea.value = copyText;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  navigator.clipboard.writeText(tempTextarea.value);
  document.body.removeChild(tempTextarea);

  setTimeout(function() {
      resetCopyBtn(btnId);
  }, 3000);
}

function resetCopyBtn(btnId){
  document.getElementById(btnId).innerHTML = '<i class="fa fa-copy"></i>';
}
