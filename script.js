//your JS code here. If required.
 function displayResult() {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let phoneNumber = document.getElementById("phoneNumber").value;
        let emailId = document.getElementById("emailId").value;

        let result = "Name: " + firstName + " " + lastName + "\n" +
                     "Phone: " + phoneNumber + "\n" +
                     "Email: " + emailId;

        alert(result);
      }