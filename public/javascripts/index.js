window.onload = function () {
    var placeholder = document.querySelector(".mui-placeholder");
    var input = document.querySelector(".mui-input-clear");
    placeholder.onclick = function () {
        this.style.width = "20px";
        input.focus();
    }
    input.onblur = function () {
        input.value="";
        placeholder.style.width = "100%";
    }

}