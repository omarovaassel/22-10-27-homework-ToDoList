let newTaskInput = document.querySelector("#new_task_input");
let newTaskBtn = document.querySelector("#new_task_btn");

// const drawTasks = () => {
//     let listSection = document.querySelector("#list_section");
//     listSection.innerHTML = ""; // очищает список
//
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     for(let i = 0; i < tasks.length; i++){
//         listSection.innerHTML += `
//             <div class="list_item row">
//                 <div class="row" style="margin: 0">
//                     <input type="checkbox" class="task_checkbox" ${tasks[i].done ? "checked" : ""} onClick='onChange(this)'>  <!-- сохраняем галочки на задачах и показываем их -->
//                     <span class="task_text"> ${tasks[i].text} </span>
//                 </div>
//
//                 <div class="row" style="margin: 0; gap: 10px">
//                     <button class="btn red-bg" onclick="removeTask(${i})">x</button> <!--  i в этом случае будет давать возможность определить какой индекс у элемента, который мы хотим удалить -->
//                     <button class="btn yellow-bg" onclick="editTask(${i})">...</button>
//                 </div>
//             </div>
//         `;
//     }
// }
//
// drawTasks();

newTaskBtn.addEventListener("click", () => {
    let newTask = {
        text: newTaskInput.value,
        done: false
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

    sessionStorage.setItem("tasks", newTaskInput.value);
    window.open("page-second.html")
    // window.location.href = "page-second.html";
    // drawTasks();
});

// удаление задачи
// function removeTask(i){
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.splice(i, 1); //удалить из массива элемент с индексом, который в строке 20
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     drawTasks();
// }
//
//
// //сохранение статуса checkbox
// function save(on){
//     localStorage.setItem('task_checkbox', on.toString());
// }
//
// function load(){
//     return localStorage.getItem('task_checkbox') === 'true';
// }
//
// function onChange(checkbox){
//     const value = checkbox.checked;
//     save(value);
// }
//
// const initialValue = load();
// document.querySelector('.task_checkbox').checked = initialValue;
