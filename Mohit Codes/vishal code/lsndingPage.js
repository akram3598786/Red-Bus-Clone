let from, to, onwardDate, returnDate;
    function searchBtn() {
        from = document.querySelector("#input-label-from").value;
        to = document.querySelector("#input-label-to").value;
        onwardDate = document.querySelector("#input-label-onward-date").value;
        // returnDate = document.querySelector("#input-label-return-date").value;

        localStorage.setItem("from",from);
        localStorage.setItem("to",to);
        localStorage.setItem("onwardDate",onwardDate);
        // localStorage.setItem("returnDate",returnDate);
    }