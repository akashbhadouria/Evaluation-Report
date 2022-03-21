// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",data);

function data() {
    event.preventDefault();
    var image = document.querySelector("#image").value;
    image.src = "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png";
   

    var name = document.querySelector("#name").value;
    var batch = document.querySelector("#batch").value;
    var score = document.querySelector("#dsa").value;
    var cs = document.querySelector("#cs").value; 
    var coding = document.querySelector("#coding").value;

    // console.log(image,name,batch,score,cs,coding);
    // Creating the new row
    var tr = document.createElement("tr");
// Creating the new col
    var img = document.createElement("img");
    img.src = image;

    
    var td2 = document.createElement("td");
    td2.innerText = name;
    
    var td3 = document.createElement("td");
    td3.innerText = batch;

    var td4 = document.createElement("td");
    td4.innerText = score;

    var td5 = document.createElement("td");
    td5.innerText = cs;

    var td6 = document.createElement("td");
    td6.innerText = coding;

    var td7 = document.createElement("td");
    var total_score = 30;
    var obtained_score = (Number(score) + Number(coding) + Number(cs));
    var ans = obtained_score / total_score*100;

    td7.innerText = ans;
    // (( obtained_score/ total_score));

    var td8  = document.createElement("td");
    if(ans > 50) {
        td8.textContent = "Regular";
        td8.style.backgroundColor = "green"
    } else {
         td8.textContent = "Async";
         td8.style.backgroundColor = "red"
    }


    tr.append(img, td2, td3, td4, td5, td6, td7, td8);
    
    document.querySelector("tbody").append(tr);
}