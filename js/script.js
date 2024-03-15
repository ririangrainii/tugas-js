// tugas:
    // lengkapi kode berikut dan tampilkan hasilnya pada HTML
    // 1. isian nama
    // 2. isian pekerjaan
    // 3. isian hobby

    function dataPerson(){
        // Mendapatkan nilai dari isian nama, pekerjaan, dan hobby
        let forms = document.getElementById('frm');
        let nama = forms.nama.value;
        let pekerjaan = forms.pekerjaan.value;
        let hobby = forms.hobby.value;

        // Jika inputan diisi atau tidak
        if (nama.trim() === '' || pekerjaan.trim() === '' || hobby.trim() === '') {
            let hasilElem = document.getElementById('hasil');
            hasilElem.innerHTML = `<p>Maaf, Nama, Pekerjaan, dan Hobby Anda Belum Terisi</p>`;
        } else {
        // Menampilkan hasil pada HTML
        let hasilElem = document.getElementById('hasil');
        hasilElem.innerHTML = `
            <p>Nama: ${nama}</p>
            <p>Pekerjaan: ${pekerjaan}</p>
            <p>Hobby: ${hobby}</p>
        `;
    }
}
    
    // Memanggil fungsi dataPerson saat tombol "Submit" ditekan
    let submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', dataPerson);