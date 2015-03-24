module.exports=function($scope,rest,$timeout,$location,config,$route,save) {

	data.posted={"mail":"admin@local.fr","password":"0000"};
	this.connect(data,function(d){console.log("Connexion réussie, token : "+d.token)});

	this.connect=function(response,callBack){
		var request = $http({
			method: "POST",
			url: restConfig.server.restServerUrl+"user/connect",
			data: $.param(response.posted),
			headers: self.headers
		});
		request.success(function(data, status, headers, config) {
			callback(data);//Connexion réussie
		}).error(function(data, status, headers, config){
			self.addMessage({type: "warning", content:"Erreur de connexion au serveur, statut de la réponse : "+status+"<br>"+data.message});
		});
	}

}