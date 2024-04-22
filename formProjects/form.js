const form = document.getElementById("form");
const tbody = document.querySelector("tbody");
const todoArrey=[];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoBox={
        task:document.getElementById("task").value,
        priority:document.getElementById("priority").value
    }
    todoArrey.push(todoBox);

    tbody.innerHTML="";
    for(let i=0;i<=todoArrey.length;i++)
    {
        const tr =document.createElement("tr");
        const td1 =document.createElement("td");
        const td2 =document.createElement("td");
        const td3 =document.createElement("td");
        const deleteBtn =document.createElement("button");

        td1.innerText=todoArrey[i].task;
        td2.innerText=todoArrey[i].priority;
        deleteBtn.innerText='Delete';
        deleteBtn.addEventListener("click", () => {
            todoArrey.splice(i, 1); 
            tbody.removeChild(tr); 
        });
        td3.appendChild(deleteBtn)
        tr.append(td1,td2,td3);
        tbody.append(tr);

    }


})