const form = document.getElementById("form")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById("task").value;
    let priority = document.getElementById("priority").value;
    let namePrint=document.getElementById("namePrint");
    let PriorityPrint=document.getElementById("PriorityPrint");
    namePrint.innerText=name;
    PriorityPrint.innerText=priority;

    


    console.log(name);
})