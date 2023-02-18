var solakPhaseHps = [
    {
        start: "2,000,000",
        phaseOne: "1,500,000",
        phaseTwo: "800,000",
        phaseThree: "200,000"
    },
    {
        start: "3,000,000",
        phaseOne: "2,250,000",
        phaseTwo: "1,200,000",
        phaseThree: "300,000"
    },
    {
        start: "4,000,000",
        phaseOne: "3,000,000",
        phaseTwo: "1,600,000",
        phaseThree: "400,000"
    },
    {
        start: "5,000,000",
        phaseOne: "3,750,000",
        phaseTwo: "2,00,000",
        phaseThree: "500,000"
    },
    {
        start: "6,000,000",
        phaseOne: "4,500,000",
        phaseTwo: "2,400,000",
        phaseThree: "600,000"
    },
    {
        start: "7,000,000",
        phaseOne: "5,250,000",
        phaseTwo: "2,800,000",
        phaseThree: "700,000"
    },
    {
        start: "8,000,000",
        phaseOne: "6,000,000",
        phaseTwo: "3,200,000",
        phaseThree: "800,000"
    },

]

var p1;
var p2;
var p3;


async function getHpData() {
    const selectedValue = document.getElementById("teamSize").value;
    const phaseHp = solakPhaseHps[selectedValue];

    document.getElementById("totalHp").innerHTML = phaseHp.start;
    document.getElementById("p1").innerHTML = phaseHp.phaseOne;
    document.getElementById("p2").innerHTML = phaseHp.phaseTwo;
    document.getElementById("p3").innerHTML = phaseHp.phaseThree;
}