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
		var kategori = document.getElementById("kategori");
		var valKategori = kategori.options[kategori.selectedIndex].value;
		var barang = document.getElementById('barang').value;
		var kodeBarang = document.getElementById('kodeBarang').value;
		var hargaSatuan = document.getElementById('hargaSatuan').value;
		var stok = document.getElementById('stok').value;
		var dateTime = document.getElementById('dateTime').value;

		var data = 
		{
			kategori: valKategori,
			namabarang: barang,
			kodebarang: kodeBarang,
			hargasatuan: hargaSatuan,
			stok: stok,
			masaberlaku: dateTime
		}

		var updates = {};
		updates[barang] = data;
		firebase.database().ref().child("barang").update(updates);

		alert('The item is created successfully!');
		
		kategori.value = "Makanan";
		document.getElementById('barang').value = "Barang";
		document.getElementById('kodeBarang').value = "Kode Barang";
		document.getElementById('hargaSatuan').value = "Harga/ Satuan";
		document.getElementById('stok').value = "Stok";
		document.getElementById('dateTime').value = "mm/dd/yyyy";
		
		//window.location.href = 'http://192.168.4.184/newWildan/index.php/pelanggan';
  }
	

}


