// tugas:
    // lengkapi kode berikut dan tampilkan hasilnya pada HTML
    // 1. isian nama
    // 2. isian pekerjaan
    // 3. isian hobby

    function dataPerson(){
        // Mendapatkan nilai dari isian nama, pekerjaan, dan hobby
        let forms = document.getElementById('frm');
        let nama = document.getElementById("frm").nama.value;
        let pekerjaan = document.getElementById("frm").pekerjaan.value;
        let hobby = document.getElementById("frm").hobby.value;

        // Jika inputan diisi atau tidak
        let input = "Selamat Datang!" + "<br> Nama : "  + nama + "<br> Pekerjaan : " + pekerjaan + "<br> Hobby : " + hobby;
        let no_input = "Maaf isi kolom terlebih dahulu";
        let hasil = nama && pekerjaan && hobby != "" ? input : no_input;

        // Menampilkan hasil pada HTML
         document.getElementById('hasil').innerHTML = hasil;
    }