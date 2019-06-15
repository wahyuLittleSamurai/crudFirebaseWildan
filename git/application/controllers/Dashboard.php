<?php
 defined('BASEPATH') OR exit('No direct script access allowed');
 
 class Dashboard extends CI_Controller {
     function __construct(){
         parent::__construct();
		 
		 $this->load->helper('date'); 
		 $this->load->helper(array('url','form'));
     }
 
     //Load Halaman dashboard
	public function index() {
		$this->load->view('welcome_message.php');
	}
	public function getSensor()
	{
		$valueDataRead = $this->m_account->getSensor();
		
		$valueLux = NULL;
		$valuePakan = NULL;
		$valueTelur = NULL;
		foreach($valueDataRead as $post)
		{
			$valueLux = $post->lux;
			$valuePakan = $post->pakan;
			$valueTelur = $post->telur;
		}
		
		
		echo "{ \"lux\":\"".$valueLux."\",\"pakan\":\"".$valuePakan."\",\"telur\":\"".$valueTelur."\"
			}";
	}
	function dataFromArdu($lux, $pakan, $telur)
	{
		$data['lux'] = $lux;
		$data['pakan'] = $pakan;
		$data['telur'] = $telur;

		$this->m_account->updateSensor($data);
	}
 }