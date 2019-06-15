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
	//var databaseRef = firebase.database().ref().child("barang");
	
	document.getElementById('simpan').onclick = addPelanggan;
	
	function addPelanggan(){
		var nama = document.getElementById('nama').value;
		var alamat = document.getElementById('alamat').value;
		var email = document.getElementById('email').value;
		var telp = document.getElementById('telp').value;
		var password = document.getElementById('inputPassword').value;

		var data = 
		{
			namalengkap: nama,
			lokasi: alamat,
			email: email,
			nomer: telp,
			password: password,
			saldo: 0
		}

		var updates = {};
		updates[nama] = data;
		firebase.database().ref().child("Pelanggan").update(updates);

		alert('The user is created successfully!');
		
		document.getElementById('nama').value = "Nama";
		document.getElementById('alamat').value = "Alamat";
		document.getElementById('email').value = "Email";
		document.getElementById('telp').value = "+62";
		document.getElementById('inputPassword').value = "password";
		
		//window.location.href = 'http://192.168.4.184/newWildan/index.php/pelanggan';
  }
	

}


