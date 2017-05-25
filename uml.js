var import1 = document.createElement('script');
import1.src = 'Chart.bundle.js';
document.head.appendChild(import1);

var import2 = document.createElement('script');
import2.src = 'utils.js';
document.head.appendChild(import2);

class BaseChart{

	constructor(area,settings){
		this.area = area;
		this.settings = settings;
	}

	draw_chart(area,settings){

		Chart.defaults.global.responsive = 'true';
		Chart.defaults.global.responsiveAnimationDuration = 50;
		Chart.defaults.global.maintainAspectRatio = 'true';

		new Chart(this.area, settings);
	}
	
}

class ConfiguredChart extends BaseChart{

	constructor(lab,arr){
		super();
		this.settings = {};
		this.data = {};
		this.datasets = new Array();
		this.datasetsData = {};
		this.datasetsData1 = {};
		this.datasetsData2 = {};
		this.options = {};
		this.title={};
		this.tooltips={};
		this.scales={};
		this.xAxes = new Array();
		this.yAxes = new Array();
		this.xt={};
		this.yt={};
		this.ticks={};
		this.lab = lab;
		this.arr = arr;
		this.bg = ['#ba7e7e','#9CB909','#8672AF','#54bed8','#d4d854','#54d889','#FFFF00','#2BFF00','#D400FF','#FF4F4F','#4FFF8A','#00099C','#FF4500','#FFD700','#FF69B4','#00FFFF','#FF4500','#FFD700','#FF69B4','#00FFFF','#728FCE','#8FCF72','#CF728F'];	
	}

	getdata()
	{
	this.data.labels = this.lab;
	this.datasetsData.data = this.arr;
	this.datasetsData.label = "JSON Data";
	this.datasetsData.backgroundColor = ['#ba7e7e','#C2FFFF','#8672AF','#54bed8','#d4d854','#54d889','#FFFF00','#2BFF00','#D400FF','#FF4F4F','#4FFF8A','#9CB909','#00099C','#FF4500','#FFD700','#FF69B4','#00FFFF','#FF4500','#FFD700','#FF69B4','#00FFFF','#728FCE','#8FCF72','#CF728F'];
	this.datasets.push(this.datasetsData);
	this.data.datasets = this.datasets;
	this.settings.data = this.data;
	return this.settings.data;
	}

	getstackdata()
	{
	this.data.labels = this.lab;
	this.datasetsData.data = this.arr[0];
	this.datasetsData.label = "Male";
	this.datasetsData.backgroundColor = this.bg[0];
	this.datasets.push(this.datasetsData);

	this.data.labels = this.lab;
	this.datasetsData1.data = this.arr[1];
	this.datasetsData1.label = "Female";
	this.datasetsData1.backgroundColor = this.bg[1];
	this.datasets.push(this.datasetsData1);

	this.data.datasets = this.datasets;
	this.settings.data = this.data;
	return this.settings.data;
	}

	getlinedata()
	{

			this.data.labels = this.lab;
			
			this.datasetsData.label="JSON Selected Data";
            this.datasetsData.fill= false;
            this.datasetsData.lineTension= 0.1;
            this.datasetsData.backgroundColor= "#000000";
            this.datasetsData.borderColor= "#000000";
            this.datasetsData.borderCapStyle= 'butt';
            this.datasetsData.borderDash= [];
            this.datasetsData.borderDashOffset= 0.0;
            this.datasetsData.borderJoinStyle= 'miter';
            this.datasetsData.pointBorderColor= "rgba(75,192,192,1)";
            this.datasetsData.pointBackgroundColor= "#fff";
            this.datasetsData.pointBorderWidth= 1;
            this.datasetsData.pointHoverRadius= 5;
            this.datasetsData.pointHoverBackgroundColor= "rgba(75,192,192,1)";
            this.datasetsData.pointHoverBorderColor= "rgba(220,220,220,1)";
            this.datasetsData.pointHoverBorderWidth= 2;
            this.datasetsData.pointRadius= 1;
            this.datasetsData.pointHitRadius= 10;
			this.datasetsData.data = this.arr;
            this.datasetsData.spanGaps= false;
            this.datasets.push(this.datasetsData);
         	this.data.datasets = this.datasets;

    this.settings.data = this.data;
	return this.settings.data;
	}

	getoptions()
	{
	this.options.responsive='false';
	this.options.maintainAspectRatio = 'true';
	this.options.responsiveAnimationDuration = 500;

	this.ticks.beginAtZero = 'true'
	this.yt.ticks = this.ticks;
	this.yAxes.push(this.yt);
	this.scales.yAxes=this.yAxes;
	this.options.scales = this.scales;
	this.settings.options = this.options;
	return this.settings.options;
	}

	getstackoptions()
	{
	this.title.display = 'true';
	this.options.title = this.title;
	this.options.responsive = 'true';
	
	this.tooltips.mode = 'index';
	this.tooltips.intersect = 'false';
	this.options.tooltips = this.tooltips;
	
	this.xt.stacked = 'true';
	this.xAxes.push(this.xt);
	
	this.ticks.beginAtZero = 'true'
	this.yt.ticks = this.ticks;
	this.yt.stacked = 'true';
	this.yAxes.push(this.yt);
	
	this.scales.xAxes=this.xAxes;
	this.scales.yAxes=this.yAxes;
	this.options.scales = this.scales;
	this.settings.options = this.options;
	return this.settings.options; }

}

class pie_chart extends ConfiguredChart{

	constructor(lab,arr,area){
		super();
		this.lab = lab;
		this.arr = arr;
		this.area =area;
	}

	create_settings (){

	var config = new ConfiguredChart(this.lab,this.arr);
	
	config.type='pie';
	config.data=config.getdata();

	super.draw_chart(this.area, config);
	}

}

class bar_chart extends ConfiguredChart{

	constructor(lab,arr,area){
		super();
		this.lab = lab;
		this.arr = arr;
		this.area =area;
	}

	create_settings (){

	var config = new ConfiguredChart(this.lab,this.arr);
	
	config.type='bar';
	config.data=config.getdata();
	config.options=config.getoptions();

	super.draw_chart(this.area, config);
	}
}

class line_chart extends ConfiguredChart{ 

	constructor(lab,arr,area){
		super();
		this.lab = lab;
		this.arr = arr;
		this.area =area;
	}

	create_settings (){

	var config = new ConfiguredChart(this.lab,this.arr);
	
	config.type='line';
	config.data=config.getlinedata();
	config.options=config.getoptions();

	super.draw_chart(this.area, config);
	}
}

class stack_chart extends bar_chart{

	constructor(lab,arr,area){
		super();
		this.lab = lab;
		this.arr = arr;
		this.area =area;
	}

	create_settings (){

	var config = new ConfiguredChart(this.lab,this.arr);
	
	config.type='bar';
	config.data=config.getstackdata();
	config.options=config.getstackoptions();

	super.draw_chart(this.area, config);
	}
}




