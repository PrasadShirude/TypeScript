/**
var data:string = "Jay Ganesh.."
console.log(data)

var isDone : boolean = false
console.log(isDone)

var num : number = 11
console.log(num)

var arr:number[] = [11,21,51];
console.log(arr)

var brr:any[] = [1,true,"free"];
console.log(brr[1])

// Union types
function printId(id: number | string)
{
    if(typeof id == "string")
    {
        console.log(id.toUpperCase());
    }
    else
    {
        console.log(id);
    }
}

printId(11)


function welcomePeople(x: string[]|string)
{
    if(Array.isArray(x))
    {
        console.log("Hello "+x[0]+x.join(" and "));
    }
    else
    {
        console.log("Welcome lone traveller "+x);
    }
}
var x:string[] = ['Prasad','Ramesh','Shirude'];
//var x :number[] = [1,2,3];
//var x:string = "Prasad"
welcomePeople(x)


let myVar:any;

myVar = "ganesh";

console.log(myVar);


var isValid:boolean = false;

var message = isValid ? "isvalid" : "is not valid";
console.log(message);
*/
var Character = /** @class */ (function () {
    function Character(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    Character.prototype.greet = function (name) {
        if (name) {
            return "Hi " + name + "! my name is " + this.fullname;
        }
        else {
            return "Hi my name is " + this.fullname;
        }
    };
    return Character;
}());
var spark = new Character("Prasad", "Shirude");
var msg = spark.greet();
console.log(msg);
msg = spark.greet("Peace");
console.log(msg);
