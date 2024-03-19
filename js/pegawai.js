let frm = document.getElementById('pegawai');
let pilihJabatan = ["Manager", "Asisten Manager", "Staff"];
let pilihStatus = ["Menikah", "Belum Menikah"];

// Dropdown jabatan
let jabatanOpsi = `<option value=""> Pilih Jabatan</option>`;
for (let p in pilihJabatan){
    jabatanOpsi += `<option value"${pilihJabatan[p]}">${pilihJabatan[p]}</option>`;
}
frm.jabatan.innerHTML = jabatanOpsi;

// Dropdown Status
let statusOpsi = `<option value=""> Pilih Status</option>`;
for (let y in pilihStatus){
    statusOpsi += `<option value"${pilihStatus[y]}">${pilihStatus[y]}</option>`;
}
frm.status.innerHTML = statusOpsi;

// function tambah data pegawai
function tambahData(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;  
    


    let gajiPokok;
    switch (jabatan) {
        case "Manager":
            gajiPokok = 15000000; 
            break;
        case "Asisten Manager":
            gajiPokok = 10000000; 
            break;
        case "Staff":
            gajiPokok = 5000000; 
            break;
        default:
            gajiPokok = 0;
    }


    let tunjanganJabatan = gajiPokok * 0.15; 
    let bpjs = gajiPokok * 0.10; 
    let tunjanganKeluarga = (status === "Menikah") ? (gajiPokok * 0.20) : 0;
    let totalGaji = gajiPokok + tunjanganJabatan - bpjs + tunjanganKeluarga;

        
    let table = document.getElementById('dataBody');
    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${nama}</td>
        <td>${jabatan}</td>
        <td>${status}</td>
        <td>${gajiPokok}</td>
        <td>${tunjanganJabatan}</td>
        <td>${bpjs}</td>
        <td>${tunjanganKeluarga}</td>
        <td>${totalGaji}</td>
    `;



    // menampilkan data pegawai menggunakan sweetAlert
    swal({
        title:"Detail Data Pegawai",
        text:`
        Nama Pegawai : ${nama}
        Jabatan : ${jabatan}
        Status : ${status}
        Gaji Pokok : ${gajiPokok}
        Tunjangan Jabatan : ${tunjanganJabatan}
        BPJS : ${bpjs}
        Tunjangan Keluarga : ${tunjanganKeluarga}
        Total Gaji : ${totalGaji}
        `,
        icon: "success",
    });
    

    
}



