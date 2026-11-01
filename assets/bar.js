var params = new URLSearchParams(window.location.search);

var ROUTES = {
    home: 'home.html',
    services: 'app.html',
    qr: 'app.html',
    more: 'app.html',
    moreid: 'card.html',
    id: 'id.html',
    shortcuts: 'app.html',
    pesel: 'app.html',
    scanqr: 'app.html',
    showqr: 'app.html',
    gen: 'app.html',
    card: 'card.html'
};

function sendTo(key) {
    var safeKey = String(key || 'home');
    var qs = params.toString();
    var file = ROUTES[safeKey] || (safeKey.endsWith('.html') ? safeKey : safeKey + '.html');

    if (!file || file === 'undefined.html') {
        file = 'home.html';
    }

    var href = file + (qs ? `?${qs}` : '');
    location.href = href;
}

document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"));
    });
});

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        return 1;
    }

    if (/android/i.test(userAgent)) {
        return 2;
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 3;
    }

    return 4;
}

if (getMobileOperatingSystem() == 2) {
    var bottomBar = document.querySelector('.bottom_bar');
    if (bottomBar) {
        bottomBar.style.height = '70px';
    }
}
