<?php
 defined('BASEPATH') OR exit('No direct script access allowed');
 
 class Item extends CI_Controller {
     function __construct(){
         parent::__construct();
		 
		 $this->load->helper('date');
		 $this->load->helper(array('url','form'));
     }
 
     //Load Halaman dashboard
	public function index() {
		$this->load->view('item.php'); 
	}
	
	function editItem()
	{
		$this->load->view('editItem.php');
	}
	
	
 }