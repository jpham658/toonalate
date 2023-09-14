import $ from "jquery";

window.addEventListener("mouseup", (event) => {
    console.log("Clicked!");
});

async () => {
    const response = await chrome.runtime.sendMessage({message: "screenshot"});
    console.log(response);
}