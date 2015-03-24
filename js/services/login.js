module.exports=function ($http,$resource,$location,rest, restConfig) {


	this.user = {
		mail: "",
		password: "",
		token: false
	};

	this.connect(data,function(user){console.log("Connexion réussie, token : "+user.token)});

	this.connect=function(response,callBack){
		var request = $http({
			method: "POST",
			data: $.param(response.posted),
			url: restConfig.server.restServerUrl+"user/connect",
			headers: self.headers
		});
		request.success(function(data, status, headers, config) {
			callback(data);//Connexion réussie
		}).error(function(data, status, headers, config){
			self.addMessage({type: "warning", content:"Erreur de connexion au serveur, statut de la réponse : "+status+"<br>"+data.message});
		});
	};

	this.disconnect = function(){
		this.user.nom = "";
		this.user.mail = "";
		this.user.token = false;
	};

};