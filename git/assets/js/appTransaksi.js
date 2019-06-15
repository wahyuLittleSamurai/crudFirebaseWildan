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

	var databaseRef = firebase.database().ref().child("transaksi");
	var table = document.querySelector('#dataTable3 tbody');
	var counter = 0;
	var newCounter = 0;
	var numberCounter = 1;
	var arrFirstChild = [];
	var arrSecondChild = [];
	databaseRef.on('value', snap => {
    while(table.hasChildNodes()) {
		table.removeChild(table.firstChild);
    }
	});
	
	databaseRef.on('value', function(snapshot){
		numberCounter = 1;
        if(snapshot.exists()){
            
            snapshot.forEach(function(data){
				
				var valueJson = JSON.stringify( snapshot.val(), null, 3 );
				var jsonValue = JSON.parse(valueJson);
				var firstKey = Object.keys(jsonValue)[counter];
				
				//console.log(firstKey);
				
				arrFirstChild.push(firstKey);
				
				delete jsonValue[firstKey];
				
				counter++;
			});
			console.log(arrFirstChild);
			
			arrFirstChild.forEach(function(firstChild){
				newCounter = 0;
				
				var databaseRefSecond = firebase.database().ref().child("transaksi").child(firstChild);
				databaseRefSecond.on('value', function(snap){
					if(snap.exists()){
						snap.forEach(function(data){
							var valueJsonSecond = JSON.stringify( snap.val(), null, 3 );
							//console.log(valueJsonSecond);
							
							var jsonValueSecond = JSON.parse(valueJsonSecond);
							var firstKeySecond = Object.keys(jsonValueSecond)[newCounter];
							
							console.log(firstKeySecond);
							
							var databaseRefLast = firebase.database().ref().child("transaksi").child(firstChild).child(firstKeySecond);
							databaseRefLast.on('value', function(lastSnap){
								if(lastSnap.exists()){
									var content='';
									
									lastSnap.forEach(function(lastData){
										var lastVal = lastData.val();
										console.log(lastVal);
										
										content +='<tr>';
										content += '<td>' + numberCounter + '</td>';
										content += '<td>' + lastVal.kodebarang + '</td>';
										content += '<td>' + lastVal.namabarang + '</td>';
										content += '<td>' + lastVal.kategori + '</td>';
										content += '<td>' + lastVal.hargasatuan + '</td>';
										content += '<td>' + lastVal.jenispengiriman + '</td>';
										content += '<td>' + lastVal.stok + '</td>';
										content += '<td>' + lastVal.jumlahbeli + '</td>';
										content += '<td>' + lastVal.masaberlaku + '</td>';
										content += '<td>' + lastVal.tanggaltransaksi + '</td>';
										content += '</tr>';
										
										numberCounter++;
										
									} );
									$('#dataTable3').append(content);
								}
							} );
							
							
							delete jsonValueSecond[firstKeySecond];
							
							newCounter++;

						});
					}
				} );
				
			} );
			
			
		}
			
	});
	
	
}


