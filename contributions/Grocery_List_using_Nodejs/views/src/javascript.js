add = document.getElementById("add");

function update() {
    let tit;

    title = document.getElementById('title');
    if (title != null) {
        tit = title.value;
    } else {
        tit = null;
    }
    document.getElementById('title').value = ""
    description = document.getElementById('description').value;
    document.getElementById('description').value = ""
    let itemJSONArry = [];

    if (localStorage.getItem('itemsJson') == null) {
        itemJSONArry.push([tit, description]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJSONArry));
    } else {
        itemJSONArryStr = localStorage.getItem('itemsJson');
        itemJSONArry = JSON.parse(itemJSONArryStr);
        itemJSONArry.push([tit, description]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJSONArry));

    }


    load();
}



add.addEventListener('click', update);
load();

function load() {
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJSONArryStr = localStorage.getItem('itemsJson');
    itemJSONArry = JSON.parse(itemJSONArryStr);

    if (localStorage.getItem('itemsJson') == null) {
        itemJSONArry = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJSONArry));

    }

    if (itemJSONArry != null) {
        itemJSONArry.forEach((element, index) => {
            str += ` 
    <tr>
    <th scope="row">${index+1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td>
        <button class="btn btn-sm btn-primary" onclick="deletes(${index+1});">Delete</button></td>
</tr>
        `
        });
        tableBody.innerHTML = str;
        var verfi = document.getElementById("list-alert").classList;
        if (verfi.contains("bg-warning") || true && itemJSONArry != null) {

            document.getElementById("list-alert").classList.remove("bg-warning");
            document.getElementById("list-alert").classList.add("badge", "bg-success");
            document.getElementById("list-alert").innerHTML = "Items In list"

        }
    } else {

        itemJSONArry.forEach((element, index) => {
            str += ` 
    <tr>
    <th scope="row">${index+1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td>
        <button class="btn btn-sm btn-primary" onclick="deletes(${index+1});">Delete</button></td>
</tr>
        `
        });
        tableBody.innerHTML = str;

        document.getElementById("list-alert").classList.add("badge", "bg-warning");

        document.getElementById("list-alert").innerHTML = "Empty list."
    }

}

function deletes(item) {
    item = item - 1;
    itemJSONArrystr = localStorage.getItem('itemsJson');
    itemJSONArry = JSON.parse(itemJSONArrystr);
    itemJSONArry.splice(item, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJSONArry));
    load();
}

function deleteList() {

    localStorage.clear();
    load();
    document.getElementById("list-alert").classList.remove("bg-success");
    document.getElementById("list-alert").classList.add("bg-warning");
    document.getElementById("list-alert").innerHTML = "Empty list."

}