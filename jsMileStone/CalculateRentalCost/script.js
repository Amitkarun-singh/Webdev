/*12. Calculate rental cost
A car rental company needs to calculate the cost of a rental based on the number of days rented and the type of car. They require a function that takes in the number of days rented and car type and returns the rental cost.The total cost would be the rental cost multiplied by thd number of days rented.
The rental costs are
. Economy = Rs. 4000 /- per day.
. Midsize = Rs. 10,000 /- per day.
. Luxury = Rs. 20,000 /- pdr day.*/

function totalCost(){
    let type=document.getElementById("types").value;
    let days=document.getElementById("days").value;
    let totalcost=0;
    if(type==="economy"){
        totalcost=4000*days;
        document.getElementById("output").innerText="The total cost is:- " + totalcost;
    }else if(type==="eidsize"){
        totalcost=10000*days;
        document.getElementById("output").innerText="The total cost is:- " + totalcost;
    }else if(type==="luxury"){
        totalcost=20000*days;
        document.getElementById("output").innerText="The total cost is:- " + totalcost;
    }
}