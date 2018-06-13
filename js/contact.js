function validatenames() {
        let firstName = document.getElementById("firstName");
        let filterName = /[a-zA-Z]/;
        console.log("iojhdfg");
        if (!filterName.test(firstName.value)) {
            alert("Please provide a first name");
            firstName.focus;
            return false;
        }  
        
    }

    function validateEmail() {
        let email = document.getElementById("email");
        let filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		console.log("iojhdfg");
        if (!filter.test(email.value)) {
            alert("Please provide a valid email address");
            email.focus;
            return false;
        }else {
			window.open(adressOfAprovedForm,"_self")
		}
    }

let adressOfAprovedForm = "../index.html";