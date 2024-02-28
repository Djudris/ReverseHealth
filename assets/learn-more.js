document.addEventListener('DOMContentLoaded', function () {
    let summary = document.getElementById('summary');
    let collapseText = summary.querySelector('.collapse');
    let collapseButton = summary.querySelector('#collapseButton');

    function isTextClamped(element) {
        return element.scrollHeight > element.clientHeight;
    }

    if (!isTextClamped(collapseText)) {
        collapseButton.style.display = 'none';
    } else {
        collapseButton.style.display = 'inline';
    }

    collapseButton.addEventListener('click', function (event) {
        let isCollapsed = collapseText.classList.contains('show');
        if (isCollapsed) {
            collapseText.classList.remove('show');
            collapseText.style.display = '-webkit-box';
            collapseButton.textContent = 'Learn More...';
            collapseButton.classList.add('collapsed');
        } else {
            // If the text is collapsed, expand it
            collapseText.classList.add('show');
            collapseText.style.display = 'block';
            collapseButton.textContent = '';
            collapseButton.classList.remove('collapsed');
        }
    });
});