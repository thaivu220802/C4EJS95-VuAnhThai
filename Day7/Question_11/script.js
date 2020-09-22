// 11.2.	Get (Read) the ‘Upper it!!’ button

const button = document.getElementById("upper_btn");

// 11.4. Get (Read) ‘Enter your name’ input

const input = document.getElementById("name_input");


// 11.7.	Get (Read) the ‘Your result will appear here’ tag

const result = document.getElementById("result_div");

//11.3.	Catch event when ‘Upper it!!!!’ button is clicked
// 11.5. Get (Read) user name from the input
// 11.6.	Convert user’s name to uppercase
button.onclick = () => {
    console.log("Upper it !!! Just clicked.");
    console.log(`User's name: ${input.value}`);
    console.log(`User's name in uppercase: ${input.value.toUpperCase()}`)
    result.innerHTML = input.value.toUpperCase();
}
