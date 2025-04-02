document.addEventListener("DOMContentLoaded", function() {
    loadData();
    document.getElementById("inputForm").addEventListener("submit", function(e) {
        e.preventDefault();
        let formData = new FormData(this);
        fetch("simpan.php", { method: "POST", body: formData })
        .then(response => response.text())
        .then(data => {
            let notify = document.createElement("div");
            notify.innerHTML = '✅ ' + data;
            notify.style.position = 'fixed';
            notify.style.bottom = '20px';
            notify.style.right = '20px';
            notify.style.background = 'lime';
            notify.style.padding = '10px';
            notify.style.color = 'black';
            notify.style.borderRadius = '5px';
            document.body.appendChild(notify);
            setTimeout(() => notify.remove(), 3000);
            loadData();
            this.reset();
        });
    });
});
function loadData() {
    fetch("tampil.php").then(response => response.json()).then(data => {
        let tableBody = document.getElementById("dataTable");
        tableBody.innerHTML = "";
        data.forEach(item => {
            let row = `<tr><td>${item.nama}</td><td>${item.email}</td><td>${item.telepon}</td><td>${item.alamat}</td></tr>`;
            tableBody.innerHTML += row;
        });
    });
}