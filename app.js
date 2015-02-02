// JavaScript Document
;(function ($, window, undefined) {
	
})(jQuery, this);

$(document).ready(function() {
	$("#register").submit(function(e) {
		e.preventDefault();
		Register();
		
	});
	$("#login").submit(function(e) {
		e.preventDefault();
		Login();
		
	});


})

function getAlerts(){
	var Alert = Parse.Object.extend("Alert");
	var query = new Parse.Query(Alert);	
	
	query.descending("createdAt");
	query.limit(10);
	query.find({
		success: function(results) {
			$("#alertList").html("");
			var template = Handlebars.compile($("#single-alert-template").html());
			$(results).each(function(i,e){
				var q = e.toJSON();
				$("#alertList").append(template(q))
				
			})
			
		},
		
		error: function(error){
			console.log(error.message);	
		}
	})
}


function getUserDetails(){
	var query = new Parse.Query(Parse.User);
    query.equalTo("user", user);
	query.find({
  	success: function(user) {
		
		
  }
});
	
}

function Register() {
	var email = $("#email").val();
	var password = $("#password").val();
	var firstName = $("#firstName").val();
	var lastName = $("#lastName").val();

	var user = new Parse.User();
	user.set("username", email);
	user.set("password", password);
	user.set("firstName", firstName);
	user.set("lastName", lastName);
  
	user.signUp(null, {
  	success: function(user) {
		alert("Registration Successful");
  	},
  	error: function(user, error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
	
}

function Login() {
var email = $("#loginEmail").val();
var password = $("#loginPassword").val();
Parse.User.logIn(email, password, {
  success: function(user) {
	alert("Welcome, " + email);

  },
  error: function(user, error) {
	  alert("Error");
  }
});

}

 window.onload = function () {
           
        }


