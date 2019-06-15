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

	var databaseRef = firebase.database().ref().child("barang");
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
                content +='<tr>';
				content += '<td>' + counter + '</td>';
                content += '<td>' + val.kategori + '</td>';
                content += '<td class="namabarang">' + val.namabarang + '</td>';
                content += '<td>' + val.kodebarang + '</td>';
                content += '<td>' + val.hargasatuan + '</td>';
                content += '<td>' + val.stok + '</td>';
                content += '<td>' + val.masaberlaku + '</td>';
                content += '<td><a href="#"><i class="fa fa-trash"></i></a> ';
				content+= '<a href="#"><i class="fa fa-edit"></i></a></td>';
				content += '</tr>';
				counter++;
            });
            $('#dataTable3').append(content);
			$(".fa-trash").click(function() {
				var $row = $(this).closest("tr");    
				var $text = $row.find(".namabarang").text(); 
				
				firebase.database().ref().child("barang").child($text).remove();
				alert('The user' +$text+ ' is deleted successfully!');
			});
			$(".fa-edit").click(function() {
				var $row = $(this).closest("tr");    
				var $text = $row.find(".namabarang").text(); 
				
				var databaseRef = firebase.database().ref().child("barang").child($text);
				databaseRef.on( 'value', snap=> {
					 //databaseFirebase.innerText = JSON.stringify( snap.val(), null, 3 );

					 var valueJson = JSON.stringify( snap.val(), null, 3 );
					 
					 console.log(valueJson);
					
					 sessionStorage.setItem('key', valueJson);
					 
					 window.location.href = 'http://192.168.4.184/newWildan/index.php/item/editItem';

				});
		 
			});
        }
    });
	

}


