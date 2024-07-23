$(document).ready(function(){
	
	if(localStorage.getItem("wkey")){
	  let timerInterval;
	  Swal.fire({
	  title: "Access Denied!",
	  html: "You have no <b></b> access here!.",
	  timer: 8000,
	  timerProgressBar: true,
	  didOpen: () => {
	  Swal.showLoading();
	  const timer = Swal.getPopup().querySelector("b");
	  timerInterval = setInterval(() => {
	  timer.textContent = `${Swal.getTimerLeft()}`;
	  }, 100);
	  },
	  willClose: () => {
	  clearInterval(timerInterval);
	  }
	  }).then((result) => {
	  /* Read more about handling dismissals below */
	  if (result.dismiss === Swal.DismissReason.timer) {
	  console.log("You are not allowed here!");
	  }
	  });
	}

    

})