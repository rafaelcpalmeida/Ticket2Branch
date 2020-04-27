let ticketTitle = null;
let branchName = null;

document.addEventListener('DOMContentLoaded', function () {
    ticketTitle = document.getElementById("ticket-title");
    branchName = document.getElementById("branch-name");
    ticketTitle.onkeyup = () => {
        branchName.value = ticketTitle.value.split(" ").join("-").toLowerCase();
    }
});