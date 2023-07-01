document.addEventListener('DOMContentLoaded', function() {

});

function createRequest() {
    let Request = false;
    if (window.XMLHttpRequest) {
        Request = new XMLHttpRequest();
    } else if {
        try {
            Request = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (CatchException) {
            Request = new ActiveXObject('Msxml.XMLHTTP');
        }
    }

    if (!Request) {
        alert('Can not create HTTP Request');
    }

    return Request;
}

function sendRequest(method, path, args, r_handler) {
    let Request = createRequest();

    if (!Request) {
        return;
    }

    Request.onreadystatechange = () => {
        if (Request.readystate == 4) {
            r_handler(Request);
        }

    }
}

