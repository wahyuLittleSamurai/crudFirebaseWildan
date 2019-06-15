window.onload = function() {

	var config = {

		apiKey: "AIzaSyCm62vJSJoYSH7xe1BVnsFR2hhmeSSGNJk",
		authDomain: "projectwildan-a10fb.firebaseapp.com",
		databaseURL: "https://projectwildan-a10fb.firebaseio.com",
		projectId: "projectwildan-a10fb",
		storageBucket: "projectwildan-a10fb.appspot.com",
		messagingSenderId: "47066847249",
		appId: "1:47066847249:web:8f1236e8cab737d5"

	};

	firebase.initializeApp(config);

	var databaseRef = firebase.database().ref().child("kurir");
	var table = document.querySelector('#dataTable3 tbody');
	var counter = 1;
	databaseRef.on('value', snap => {
    while(table.hasChildNodes()) {
		table.removeChild(table.firstChild);
    }
	});
	
	var deleteData = "Delete";
	var editData = "Edit";
	databaseRef.on('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';
			counter = 1;
            snapshot.forEach(function(data){
                var val = data.val();
				console.log(val);
                content +='<tr>';
				content += '<td>' + counter + '</td>';
                content += '<td>' + val.email + '</td>';
                content += '<td>' + val.kodekurir + '</td>';
                content += '<td>' + val.nama + '</td>';
                content += '<td>' + val.telephone + '</td>';
				content += '</tr>';
				counter++;
            });
            $('#dataTable3').append(content);
			
        }
    });
	

}


