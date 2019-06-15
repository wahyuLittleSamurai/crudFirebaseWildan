<?php
 defined('BASEPATH') OR exit('No direct script access allowed');
 
 class Pelanggan extends CI_Controller {
     function __construct(){
         parent::__construct();
		 
		 $this->load->helper('date');
		 $this->load->helper(array('url','form'));
     }
 
     //Load Halaman dashboard
	public function index() {
		$this->load->view('pelanggan.php'); 
	}
	function editPelanggan(){
		$this->load->view('editPelanggan.php');
	}
	
 }