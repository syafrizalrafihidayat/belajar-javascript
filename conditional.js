let mhs = {
    name: "syafrizal rafi hidayat",
    age: 20,
    major: "TRMG",
    skills: ['sysadmin'  ],
    poor: true, //miskin
}

//console.log ('mahasiswa boleh daftar : ' + mhs, age > 17);

// if (mhs.major == "TRPL") {
//     console.log (mhs.name + "jurusan TRMG")
// } else if (mhs.major == "TRKJ") {
//     console.log (mhs.name + "jurusan TRKJ")
// } else if (mhs.major == "TRPL") {
//     console.log (mhs.name + "jurusan TRPL")
// } else {
//     console.log (,mhs.name + "jurusan" + mhs.major )
// }
//console.log (mhs.major == "TRPL" ? mhs.name + "jurusan TRPL" : mhs.name + "bukan TRPL" )

//swicth case
switch (mhs.major) {
    case "TRMG":
        console.log (mhs.name + "jurusan TRMG");
        break;
    case "TRKJ":
        console.log (mhs.name + "jurusan TRKJ");
        break;
    case "TRPL":
        console.log (mhs.name + "jurusan TRPL");
        break;
    default:
        console.log (mhs.name + "bukan anak IDN");        
}        

//conditional function
//kriteria : umur kurang dari 21, miskin, skill lebih dari 2

function cekKelulusan (mhs) {
    let age = mhs.age;
    let miskin = mhs.poor; 
    let skillslength = mhs.skills.length; 
  if (age < 21 && miskin == true && skillslength > 2) {
    //peserta lulus
    console.log("Peserta Lulus")
  } else if (age < 21 && miskin == true && skillslength <= 2) {
    console.log('Tambah Skill dulu')
  } else {
    //peserta tidak lulus
    console.log("Tidak Lulus")
  }
   
}
cekKelulusan(mhs)

