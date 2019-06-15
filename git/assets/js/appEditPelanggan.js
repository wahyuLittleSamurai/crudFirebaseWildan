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
	
	document.getElementById('simpan').onclick = editPelanggan;
	
	var data = sessionStorage.getItem('key');
	var jsonValue = JSON.parse(data);

	console.log(data);
	
	var email = jsonValue.email;
	var alamat = jsonValue.lokasi;
	var namaLengkap = jsonValue.namalengkap;
	var telp = jsonValue.nomer;
	var password = jsonValue.password;
	var saldo = jsonValue.saldo;
	
	document.getElementById('nama').value = namaLengkap;
	document.getElementById('alamat').value = alamat;
	document.getElementById('email').value = email;
	document.getElementById('telp').value = telp;
	document.getElementById('inputPassword').value = password;
	
	function editPelanggan(){
		var namaBaru = document.getElementById('nama').value;
		var alamatBaru = document.getElementById('alamat').value;
		var emailBaru = document.getElementById('email').value;
		var telpBaru = document.getElementById('telp').value;
		var passwordBaru = document.getElementById('inputPassword').value;

		var data = 
		{
			namalengkap: namaBaru,
			lokasi: alamatBaru,
			email: emailBaru,
			nomer: telpBaru,
			password: passwordBaru,
			saldo: saldo
		}

		var updates = {};
		updates[namaLengkap] = data;
		firebase.database().ref().child("Pelanggan").update(updates);

		alert('The item is created successfully!');
		
		document.getElementById('nama').value = "Nama";
		document.getElementById('alamat').value = "Alamat";
		document.getElementById('email').value = "Email";
		document.getElementById('telp').value = "+62";
		document.getElementById('inputPassword').value = "password";
		
		sessionStorage.removeItem('key');
	}
}


