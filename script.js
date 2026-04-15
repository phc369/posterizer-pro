// script.js

document.addEventListener("DOMContentLoaded", function() {
    const uploadInput = document.getElementById("upload");
    const previewContainer = document.getElementById("preview");
    const qualityInput = document.getElementById("quality");
    const downloadButton = document.getElementById("download");
    let image;

    // Handle image upload
    uploadInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                image = new Image();
                image.src = e.target.result;
                image.onload = function() {
                    divideImage(image);
                };
            };
            reader.readAsDataURL(file);
        }
    });

    // Divide image into tiles
    function divideImage(image) {
        const tileSize = 100; // example tile size
        const rows = Math.ceil(image.height / tileSize);
        const cols = Math.ceil(image.width / tileSize);
        previewContainer.innerHTML = '';

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const canvas = document.createElement("canvas");
                canvas.width = tileSize;
                canvas.height = tileSize;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(
                    image,
                    col * tileSize,
                    row * tileSize,
                    tileSize,
                    tileSize,
                    0,
                    0,
                    tileSize,
                    tileSize
                );
                previewContainer.appendChild(canvas);
            }
        }
    }

    // Adjust quality settings
    qualityInput.addEventListener("change", function() {
        // Adjust the image quality based on user settings
        // This would generally require handling when exporting the final image
    });

    // Download images
    downloadButton.addEventListener("click", function() {
        // Implement download functionality
    });
});