window.addEventListener('load', () => {
    //Clearing personal details on reloading
    name.value = "";
    fathername.value = "";
    mothername.value = "";
    rollNo.value = "";

    //Clearing English marks on reloading
    sCode1.value = "";
    tMarks1.value = "";
    iMarks1.value = "";

    //Clearing Mathematics marks on reloading
    sCode2.value = "";
    tMarks2.value = "";
    iMarks2.value = "";

    //Clearing Physics marks on reloading
    sCode3.value = "";
    tMarks3.value = "";
    iMarks3.value = "";

    //Clearing Chemistry marks on reloading
    sCode4.value = "";
    tMarks4.value = "";
    iMarks4.value = "";

    //Clearing Computer Science marks on reloading
    sCode5.value = "";
    tMarks5.value = "";
    iMarks5.value = "";
});

//Selecting items from html
const html1 = document.querySelector('main');
const btn = document.querySelector('.btn');
const html2 = document.querySelector('.main-container');
const loader = document.querySelector('.loader');
const body = document.querySelector('body');

//Personal Details
let name = document.querySelector('#name');
let fName = document.querySelector('#fathername');
let mName = document.querySelector('#mothername');
let rollNo = document.querySelector('#rollno');

//Details from marksheet
let studName = document.querySelector('.Name');
let fname = document.querySelector('.F-name');
let mname = document.querySelector('.M-name');
let rollno = document.querySelector('.Roll-No');

//English Marks Details
let sCode1 = document.querySelector('#scode1');
let tMarks1 = document.querySelector('#tmarks1');
let iMarks1 = document.querySelector('#imarks1');

//Mathematics Marks Details
let sCode2 = document.querySelector('#scode2');
let tMarks2 = document.querySelector('#tmarks2');
let iMarks2 = document.querySelector('#imarks2');

//Physics Marks Details
let sCode3 = document.querySelector('#scode3');
let tMarks3 = document.querySelector('#tmarks3');
let iMarks3 = document.querySelector('#imarks3');

//Chemistry Marks Details
let sCode4 = document.querySelector('#scode4');
let tMarks4 = document.querySelector('#tmarks4');
let iMarks4 = document.querySelector('#imarks4');

//Computer Science Marks Details
let sCode5 = document.querySelector('#scode5');
let tMarks5 = document.querySelector('#tmarks5');
let iMarks5 = document.querySelector('#imarks5');


//Generate button
btn.addEventListener('click', () => {
    html1.style.display = 'none';
    html2.style.display = 'none';
    loader.style.display = 'flex';
    body.style.backgroundColor = 'white';
    setTimeout(() => {
        html2.style.display = 'block';
        loader.style.display = 'none';
        body.style.backgroundColor = 'rgb(233, 233, 233)';
    }, 5000);


    const sno = document.querySelector('.sno');
    sno.innerHTML = Math.floor(100000 + Math.random() * 900000);

    //Getting data from form
    studName.innerText = name.value;
    fname.innerText = fName.value;
    mname.innerText = mName.value;
    rollno.innerText = rollNo.value;

    //Create a table
    let table = document.querySelector('.tab');

    //Create 1st row for English

    let row1 = table.insertRow();
    let cell01 = row1.insertCell();
    let cell02 = row1.insertCell();
    let cell03 = row1.insertCell();
    let cell04 = row1.insertCell();
    let cell05 = row1.insertCell();
    let cell06 = row1.insertCell();
    let cell07 = row1.insertCell();

    cell01.innerHTML = sCode1.value;
    cell02.innerHTML = "ENGLISH";
    cell03.innerHTML = tMarks1.value;
    cell04.innerHTML = iMarks1.value;
    let totalMarks01 = parseInt(tMarks1.value) + parseInt(iMarks1.value);
    cell05.innerHTML = totalMarks01;
    cell06.innerHTML = numberToWords.toWords(totalMarks01).toUpperCase();

    if (totalMarks01 <= 100 && totalMarks01 > 90) {
        cell07.innerHTML = 'A';
    } else if (totalMarks01 <= 90 && totalMarks01 > 80) {
        cell07.innerHTML = 'B';
    } else if (totalMarks01 <= 80 && totalMarks01 > 70) {
        cell07.innerHTML = 'C';
    } else if (totalMarks01 <= 70 && totalMarks01 > 60) {
        cell07.innerHTML = 'D';
    } else if (totalMarks01 <= 60 && totalMarks01 > 50) {
        cell07.innerHTML = 'E';
    } else {
        cell07.innerHTML = 'F';
    }

    //Create 2nd row for Mathematics

    let row2 = table.insertRow();
    let cell11 = row2.insertCell();
    let cell12 = row2.insertCell();
    let cell13 = row2.insertCell();
    let cell14 = row2.insertCell();
    let cell15 = row2.insertCell();
    let cell16 = row2.insertCell();
    let cell17 = row2.insertCell();

    cell11.innerHTML = sCode2.value;
    cell12.innerHTML = "MATHEMATICS";
    cell13.innerHTML = tMarks2.value;
    cell14.innerHTML = iMarks2.value;
    let totalMarks02 = parseInt(tMarks2.value) + parseInt(iMarks2.value);
    cell15.innerHTML = totalMarks02;
    cell16.innerHTML = numberToWords.toWords(totalMarks02).toUpperCase();

    if (totalMarks02 <= 100 && totalMarks02 > 90) {
        cell17.innerHTML = 'A';
    } else if (totalMarks02 <= 90 && totalMarks02 > 80) {
        cell17.innerHTML = 'B';
    } else if (totalMarks02 <= 80 && totalMarks02 > 70) {
        cell17.innerHTML = 'C';
    } else if (totalMarks02 <= 70 && totalMarks02 > 60) {
        cell17.innerHTML = 'D';
    } else if (totalMarks02 <= 60 && totalMarks02 > 50) {
        cell17.innerHTML = 'E';
    } else {
        cell17.innerHTML = 'F';
    }

    //Create 3rd row for Physics

    let row3 = table.insertRow();
    let cell21 = row3.insertCell();
    let cell22 = row3.insertCell();
    let cell23 = row3.insertCell();
    let cell24 = row3.insertCell();
    let cell25 = row3.insertCell();
    let cell26 = row3.insertCell();
    let cell27 = row3.insertCell();

    cell21.innerHTML = sCode3.value;
    cell22.innerHTML = "PHYSICS";
    cell23.innerHTML = tMarks3.value;
    cell24.innerHTML = iMarks3.value;
    let totalMarks03 = parseInt(tMarks3.value) + parseInt(iMarks3.value);
    cell25.innerHTML = totalMarks03;
    cell26.innerHTML = numberToWords.toWords(totalMarks03).toUpperCase();

    if (totalMarks03 <= 100 && totalMarks03 > 90) {
        cell27.innerHTML = 'A';
    } else if (totalMarks03 <= 90 && totalMarks03 > 80) {
        cell27.innerHTML = 'B';
    } else if (totalMarks03 <= 80 && totalMarks03 > 70) {
        cell27.innerHTML = 'C';
    } else if (totalMarks03 <= 70 && totalMarks03 > 60) {
        cell27.innerHTML = 'D';
    } else if (totalMarks03 <= 60 && totalMarks03 > 50) {
        cell27.innerHTML = 'E';
    } else {
        cell27.innerHTML = 'F';
    }

    //Create 4th row for Chemistry

    let row4 = table.insertRow();
    let cell31 = row4.insertCell();
    let cell32 = row4.insertCell();
    let cell33 = row4.insertCell();
    let cell34 = row4.insertCell();
    let cell35 = row4.insertCell();
    let cell36 = row4.insertCell();
    let cell37 = row4.insertCell();

    cell31.innerHTML = sCode4.value;
    cell32.innerHTML = "CHEMISTRY";
    cell33.innerHTML = tMarks4.value;
    cell34.innerHTML = iMarks4.value;
    let totalMarks04 = parseInt(tMarks4.value) + parseInt(iMarks4.value);
    cell35.innerHTML = totalMarks04;
    cell36.innerHTML = numberToWords.toWords(totalMarks04).toUpperCase();

    if (totalMarks04 <= 100 && totalMarks04 > 90) {
        cell37.innerHTML = 'A';
    } else if (totalMarks04 <= 90 && totalMarks04 > 80) {
        cell37.innerHTML = 'B';
    } else if (totalMarks04 <= 80 && totalMarks04 > 70) {
        cell37.innerHTML = 'C';
    } else if (totalMarks03 <= 70 && totalMarks04 > 60) {
        cell37.innerHTML = 'D';
    } else if (totalMarks03 <= 60 && totalMarks04 > 50) {
        cell37.innerHTML = 'E';
    } else {
        cell37.innerHTML = 'F';
    }

    //Create 5th row for Computer science

    let row5 = table.insertRow();
    let cell41 = row5.insertCell();
    let cell42 = row5.insertCell();
    let cell43 = row5.insertCell();
    let cell44 = row5.insertCell();
    let cell45 = row5.insertCell();
    let cell46 = row5.insertCell();
    let cell47 = row5.insertCell();

    cell41.innerHTML = sCode5.value;
    cell42.innerHTML = "COMPUTER SCIENCE";
    cell43.innerHTML = tMarks5.value;
    cell44.innerHTML = iMarks5.value;
    let totalMarks05 = parseInt(tMarks5.value) + parseInt(iMarks5.value);
    cell45.innerHTML = totalMarks05;
    cell46.innerHTML = numberToWords.toWords(totalMarks05).toUpperCase();

    if (totalMarks05 <= 100 && totalMarks05 > 90) {
        cell47.innerHTML = 'A';
    } else if (totalMarks05 <= 90 && totalMarks05 > 80) {
        cell47.innerHTML = 'B';
    } else if (totalMarks05 <= 80 && totalMarks05 > 70) {
        cell47.innerHTML = 'C';
    } else if (totalMarks05 <= 70 && totalMarks05 > 60) {
        cell47.innerHTML = 'D';
    } else if (totalMarks05 <= 60 && totalMarks05 > 50) {
        cell47.innerHTML = 'E';
    } else {
        cell47.innerHTML = 'F';
    }

    //Pass criteria
    const result = document.querySelector('.Pass');
    let totalMarks = totalMarks01 + totalMarks02 + totalMarks03 + totalMarks04 + totalMarks05;
    if (totalMarks < 100) {
        result.innerHTML = "FAIL";
    } else {
        result.innerHTML = "PASS";
    }
})

const logout = document.querySelector('.logOut');
logout.addEventListener('click',()=>{
    loader.style.display = 'flex';
    html1.style.display='none';
    body.style.backgroundColor='white';
            setTimeout(()=>{
                loader.style.display='none';
                location.href = "/src/html/login.html";
            },3000);
});




