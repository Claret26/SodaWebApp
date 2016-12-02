$( document ).ready(function() {
    var config = {
		    apiKey: "AIzaSyAKdweiacwRtC4-IfvON-RASEc22UJ5D_g",
		    authDomain: "pedi-tu-almuerzo-c34ef.firebaseapp.com",
		    databaseURL: "https://pedi-tu-almuerzo-c34ef.firebaseio.com",
		    storageBucket: "pedi-tu-almuerzo-c34ef.appspot.com",
		    messagingSenderId: "848893801760"
		  };
});
var auths = firebase.auth();
auths.signInWithEmailAndPassword(email, password).catch(function(error) {
			 if(error){
			 	alert("errooor");
			 }else{
			 	(" no  errooor");
			 }
});