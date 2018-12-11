"use strict";

//----------------------- ALERTS ---------------------------------------------//

var alertCloseBtn = document.querySelectorAll('.alert > .close');
for (var i = 0; i < alertCloseBtn.length; i++) {
    alertCloseBtn[i].onclick = function hide() {
        var alert = this.parentElement;
        setTimeout(function () {
            alert.style.display = "none";
        }, 500);
    }
}
