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

	var databaseRef = firebase.database().ref().child("daftar_belanja");
	var table = document.querySelector('#dataTable3 tbody');
	var counter = 1;
	var newCounter = 1;
	databaseRef.on('value', snap => {
    while(table.hasChildNodes()) {
		table.removeChild(table.firstChild);
    }
	});
	
	databaseRef.on('value', function(snapshot){
        if(snapshot.exists()){
            
            snapshot.forEach(function(data){
				
				var valueJson = JSON.stringify( snapshot.val(), null, 3 );
				var jsonValue = JSON.parse(valueJson);
				var firstKey = Object.keys(jsonValue)[counter-1];
				
				console.log(firstKey);
				
				var newDatabaseRef = firebase.database().ref().child("daftar_belanja").child(firstKey);
				
				newDatabaseRef.on('value', function(snap){
					if(snap.exists()){
						var content = '';
						newCounter = 1;
						snap.forEach(function (data){
							var val = data.val();
							console.log(val);
							
							content +='<tr>';
							content += '<td>' + newCounter + '</td>';
							content += '<td>' + val.kodebarang + '</td>';
							content += '<td>' + val.namabarang + '</td>';
							content += '<td>' + val.kategori + '</td>';
							content += '<td>' + val.hargasatuan + '</td>';
							content += '<td>' + val.jumlahbeli + '</td>';
							content += '<td>' + val.berat + '</td>';
							content += '<td>' + val.distributor + '</td>';
							content += '<td>' + val.jenispengiriman + '</td>';
							content += '<td>' + val.stok + '</td>';
							content += '<td>' + val.masaberlaku + '</td>';
							content += '<td>' + val.tanggalmasuk + '</td>';
							content += '</tr>';
							
							newCounter++;
						});
						$('#dataTable3').append(content);
					}
					
				});
				
				delete jsonValue[firstKey];
				
				
				counter++;
            });
            
			
        }
    });
	

}


