document.addEventListener('DOMContentLoaded', function () {
    const urlForm = document.getElementById('url-form');
    const resultSection = document.getElementById('result-section');
    const resultDiv = document.getElementById('result');

    urlForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const urlInput = document.getElementById('url').value;

        // You can replace this with your code to analyze the URL
        // For this example, we'll just display a message.
        const analysisResult = `You entered: ${urlInput}`;

        resultDiv.textContent = analysisResult;
        resultSection.style.display = 'block';
    });
});