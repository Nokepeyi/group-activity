
const input1Element = document.getElementById("name");
const input2Element = document.getElementById("age");
const input3Element = document.getElementById("subject");

const cardDiv = document.getElementById("card");

function updateCard(){
    const name = input1Element.value;
    const age = Number(input2Element.value);
    const subject = input3Element.value;

    if (!name || !age || !subject)
        cardDiv.innerHTML = "<div>Please fill in all fields</div>";
    cardDiv.className = "empty";
    return;

    let message =  `Hello ${name}! You are ${age} years old. You love ${subject}!`;

    if (age < 18){
        cardDiv.className = "young";
    } else{
        cardDiv.className = "adult";
    }

    cardDiv.innerHTML = `<div>${message}</div>`;
}

input1Element.addEventListener("input", updateCard);
input2Element.addEventListener("input", updateCard);
input3Element.addEventListener("input", updateCard);

updateCard();