const dobInput = document.querySelector("#dobInput");
const luckyNoInput = document.querySelector("#luckyNoInput");
const checkBtn = document.querySelector("#checkBtn");
const message = document.querySelector(".message");
checkBtn.addEventListener("click",checkClickListener);

function checkClickListener(){
    let sum = calculateSumOfDob(dobInput.value)
    let luckyNo = Number(luckyNoInput.value);
    compareNumbers(sum , luckyNo);
}


function calculateSumOfDob(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0;i<dob.length;i++){
        sum = sum + Number(dob[i]);
    }
    return sum;
}

function compareNumbers(sum , luckyNo){
    if(sum && luckyNo){
        if(sum % luckyNo == 0){
            message.innerText = "Your birthday is lucky.";
        }
        else{
            message.innerText = "Your birthday is not lucky.";
        }
    }
    else{
        message.innerText = "Fill both the fields appropriatly.";
    }
}