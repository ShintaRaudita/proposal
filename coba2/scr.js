// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Selector dan event listener Anda bisa tetap dipertahankan di sini

    // Fungsi untuk mengambil data dari data.json
    function fetchData() {
        fetch("data.json")
            .then((response) => response.json())
            .then((data) => {
                // Gunakan data yang diambil dari data.json
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    // Panggil fungsi fetchData
    fetchData();

    // Fungsi-fungsi lainnya yang mungkin Anda miliki
});
