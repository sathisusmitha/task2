// function loadjson(file,callback) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json")z;
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState===4 && xhr.status=="200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null);
// }

// loadjson("data.json",function(text){
// 	let data = JSON.parse(text); //serialised data
// 	console.log(data);
// 	basic(data.details);
// 	careerinfo(data.careerobjective);
// 	education(data.educationalqualification);
// 	skills(data.techinicalskills);
// })


function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
careerinfo(data.careerobjective);
education(data.educationalqualification);
skills(data.techinicalskills);
languages(data.languagesknown);
})

var child1 = document.querySelector(".child1");

function basic(det){

	var image1 = document.createElement("img");
	image1.src=det.image;
	child1.appendChild(image1);


	var name = document.createElement("h4");
	name.textContent = det.name;
	child1.appendChild(name);

	var email = document.createElement("h4");
	email.textContent=det.email;
	child1.appendChild(email);

	var number = document.createElement("h4");
	number.textContent=det.number;
	child1.appendChild(number);



	var address1 = document.createElement("p");
	address1.textContent=det.address;
	child1.append(address1);

}

var child2 = document.querySelector(".child2");

function careerinfo(info1){
	var heading1 = document.createElement("h2");
	heading1.textContent="Careerobjective :";
	child2.appendChild(heading1);


	var heading2 = document.createElement("p");
	heading2.textContent=info1.info;
	child2.appendChild(heading2);

}

function education(edu){
	var heading3 = document.createElement("h2");
	heading3.textContent="Educational qualification:";
	child2.appendChild(heading3);


	var table1 = document.createElement("table");
	table1.border="1";
	child2.appendChild(table1);

	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML=tabledata;
}

function skills(skillinfo){
	var hd = document.createElement("h2");
	hd.textContent="Techinical skills:";
	child2.appendChild(hd);


	for(i=0;i<skillinfo.length;i++){
		

		var skillul = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child2.appendChild(skillul);

	}
}
	function languages(linfo){
	var hd1 = document.createElement("h2");
	hd1.textContent="Languages known:";
	child2.appendChild(hd1);


	for(i=0;i<linfo.length;i++){
		

		var skillul = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent=linfo[i].info1;
		skillul.appendChild(skillli);
		child2.appendChild(skillul);




}
}