var inquirer=require("inquirer");
function family(name, position, age, language ){
	this.name=name;
	this.position=position,
	this.age=age;
	this.language=language;
	this.familyInfo=function(){
		console.log("Name:"+this.name+"\nPosition:"+this.position+"\nAge:"+this.age+"\nLanguage:"+this.language)
	};

}

inquirer.prompt([
{
name:"name",
message:"What is your name?"
},

{
name:"position",
message:"What do you do?"
},

{
name:"age",
message:"How old are you?"
},

{
name:"language",
message:"What language do you speak?"
}
	]).then(function(answers){
		var tika=new family(answers.name, answers.position, answers.age, answers.language);
	});

