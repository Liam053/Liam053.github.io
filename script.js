function loadSection(sectionId) {
    var section = document.getElementById(sectionId);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', sectionId + '.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                section.innerHTML = xhr.responseText;
                section.classList.add('visible');
            } else {
                console.error('Error loading content:', xhr.status);
            }
        }
    };
    xhr.send();
}