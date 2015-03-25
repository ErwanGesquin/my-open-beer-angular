module.exports=function ($http,$resource,$location,rest) {


	this.user = {
		mail: "",
		password: "",
		token: false
	};


	this.connect = function(){
		rest.connect(this.user,function(data){
			console.log(data);
		} );
	};

	this.disconnect = function(){
		this.user.nom = "";
		this.user.mail = "";
		this.user.token = false;
	};

};