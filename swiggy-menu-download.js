const final = [];
[...document.querySelectorAll(".styles_itemImage__DHHqs")].map(_ => final.push({"name": _.alt, "src": _.src.replace('e_grayscale,', '').replace('w_300,', 'w_1500').replace('h_300,', 'h_1500')}))

function imagedownlader2(imagSrcAltObj) {
    window.URL = window.URL || window.webkitURL;

    var xhr = new XMLHttpRequest(),
    a = document.createElement('a'), file;
    
    xhr.open('GET', imagSrcAltObj.src, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        file = new Blob([xhr.response], { type : 'image/jpeg' });
        a.href = window.URL.createObjectURL(file);
        a.download = imagSrcAltObj.name;  // Set to whatever file name you want
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    xhr.send();
}

final.forEach(function(_,i) {
    setTimeout(
        function() {
            imagedownlader2(_);
        }, 1000 * (i+1)
    )
})