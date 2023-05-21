/********************************************************************************** 
 * WEB700 – Assignment 1* I declare that this assignment is my own work in accordance with Seneca Academic Policy.*
 * No part of this assignment has been copied manually or electronically from any other source* (including web sites) or distributed to other students.*
 * * Name: _SIMRAN YADAV_______ Student ID: _114467228_____________ Date: ______20-05-2023__________**
 *******************************************************************************/
console.log("Hello World!");

var ServerVerbs = [ "GET","GET", "GET","POST","GET", "POST"];
var ServerPaths = ["/", "/about", "/contact","/login", "/panel","/logout"];
var ServerResponses= ["Welcome to WEB700 Assignment 1", "This Assignment was prepared by Simran Yadav", 
"Student Name: syadav44@myseneca.ca",
"User Logged In",
"Main Panel",
"Logout Complete" ];

function HttpRequest(HttpVerb ,Path){
    for (let i = 0; i < ServerVerbs.length; i++) {
        if(ServerVerbs[i]==HttpVerb && ServerPaths[i]==Path){
            return "200: "+ServerResponses[i]
        }
      } 
      return "404: Unable to process HttpVerb request for Path"
}

function Mathfunction(Max,Min){
    return Math.floor(Math.random() * (Max - Min) + Min);
}
function AutomateTests(){
var TestVerbs = [ "GET", "POST"];
var TestPaths = [ "/", "/about", "/contact","/login", "/panel","/logout","/randompath1","/randompath2"];

function RandomRequest (){
    RandVerb=Mathfunction(0,5)
    RandPath=Mathfunction(0,12)
    console.log(HttpRequest(TestVerbs[RandVerb],TestPaths[RandPath]))
}

setInterval(RandomRequest,1)
}

AutomateTests()