document.addEventListener("DOMContentLoaded", function () {
    // Selector dan event listener Anda bisa tetap dipertahankan di sini

    // Fetch data dari data.json
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            // Gunakan data yang diambil dari data.json
            console.log(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    // Fungsi-fungsi lainnya yang mungkin Anda miliki
    

});
