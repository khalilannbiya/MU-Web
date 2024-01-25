alert("Selamat Datang !! Fans MU");

let nama = prompt("Siapa Nama mu ?");
if (!nama) {
  nama = "Fulan";
}

const halo = document.getElementById("js");

halo.innerHTML = "Haloo" + " " + nama + " " + "Selamat Datang !!";
