// $(function () {
let navbarElement = $("#main-navbar");
let sidebarElement = $("#sidebarMenu");
let sidebarLogoElement = $("#sidebar-logo");
if (!window.matchMedia('(max-width: 992px)').matches) {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 800) {
            if (navbarElement.is(":visible")) {
                navbarElement.hide();
                sidebarElement.show();
            }
        }
        if (scroll < 800) {
            if (!navbarElement.is(":visible")) {
                navbarElement.show();
                sidebarElement.hide();
            }
        }

    });
}

// f12 key engelleme
$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});
// });


// sağ click engelleme
/* document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
 }); */


let kisiselBilgiCheckBox = document.getElementById('kisiselBilgiCheck');
let ihbarTcDiv = document.getElementById('ihbarTcDiv');
let ihbarAdDiv = document.getElementById('ihbarAdDiv');
let ihbarSoyadDiv = document.getElementById('ihbarSoyadDiv');
let ihbarDogumTarihDiv = document.getElementById('ihbarDogumTarihDiv');
let ihbarTelefonDiv = document.getElementById('ihbarTelefonDiv');

kisiselBilgiCheckBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        ihbarTcDiv.style.display = 'none';
        ihbarAdDiv.style.display = 'none';
        ihbarSoyadDiv.style.display = 'none';
        ihbarDogumTarihDiv.style.display = 'none';
        ihbarTelefonDiv.style.display = 'none';
    } else {
        ihbarTcDiv.style.display = 'block';
        ihbarAdDiv.style.display = 'block';
        ihbarSoyadDiv.style.display = 'block';
        ihbarDogumTarihDiv.style.display = 'block';
        ihbarTelefonDiv.style.display = 'block';
    }
});


function TCNoKontrol(TCNO) {
    var tek = 0,
        cift = 0,
        sonuc = 0,
        TCToplam = 0,
        i = 0;

    if (TCNO.length != 11) return false;
    if (isNaN(TCNO)) return false;
    if (TCNO[0] == 0) return false;

    tek = parseInt(TCNO[0]) + parseInt(TCNO[2]) + parseInt(TCNO[4]) + parseInt(TCNO[6]) + parseInt(TCNO[8]);
    cift = parseInt(TCNO[1]) + parseInt(TCNO[3]) + parseInt(TCNO[5]) + parseInt(TCNO[7]);

    tek = tek * 7;
    sonuc = Math.abs(tek - cift);
    if (sonuc % 10 != TCNO[9]) return false;

    for (var i = 0; i < 10; i++) {
        TCToplam += parseInt(TCNO[i]);
    }

    if (TCToplam % 10 != TCNO[10]) return false;

    return true;
}