document.addEventListener("DOMContentLoaded", function () {
    // Proses Registrasi
    const form = document.getElementById("registrationForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const telepon = document.getElementById("telepon").value;
            const alamat = document.getElementById("alamat").value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const tanggal = document.getElementById("tanggal").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Password tidak cocok!");
                return;
            }

            // Simpan data ke localStorage
            let anggota = JSON.parse(localStorage.getItem("anggota")) || [];
            anggota.push({ nama, email, telepon, gender });
            localStorage.setItem("anggota", JSON.stringify(anggota));

            alert("Registrasi berhasil!");
            window.location.href = "anggota.html";
        });
    }

    // Menampilkan data anggota
    const anggotaTable = document.getElementById("anggotaTable");
    if (anggotaTable) {
        let anggota = JSON.parse(localStorage.getItem("anggota")) || [];
        anggota.forEach((user, index) => {
            let row = anggotaTable.insertRow();
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.nama}</td>
                <td>${user.email}</td>
                <td>${user.telepon}</td>
                <td>${user.gender}</td>
            `;
        });
    }
});