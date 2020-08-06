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

var newfile = loadjson("task3.json");
newfile.then(data1=>{
	console.log(data1);
	view1(data1.card1);
	view2(data1.card2);
})
var child1 = document.querySelector(".child1");

function view1(det){

	var image1 = document.createElement("img");
	image1.src=det.image;
	child1.appendChild(image1);


	var name1 = document.createElement("h4");
	name1.textContent = det.name;
	child1.appendChild(name1);

var rollno1 = document.createElement("h4");
	rollno1.textContent = det.rollno;
	child1.appendChild(rollno1);

                var button1 = document.createElement('BUTTON');  
                button1.textContent=det.button;
child1.appendChild(button1);
button1.onclick = function(){
 myfn();
 function myfn(){

window.location = "task1.html";

 }
};

	child1.appendChild(document.createElement("br"));
		child1.appendChild(document.createElement("br"));

}
var child2= document.querySelector(".child2");

function view2(det){

	var image2 = document.createElement("img");
	image2.src=det.image;
	child2.appendChild(image2);


	var name2 = document.createElement("h4");
	name2.textContent = det.name;
	child2.appendChild(name2);

var rollno2 = document.createElement("h4");
	rollno2.textContent = det.rollno;
	child2.appendChild(rollno2);

                var button2 = document.createElement('BUTTON');  
                button2.textContent=det.button;
child2.appendChild(button2);
button2.onclick = function(){
 myfn2();
 function myfn2(){

window.location = "data.html";

 }
}
}
