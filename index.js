const oyEl = document.getElementById("oy")
const kunEl = document.getElementById("kun")
const soatEl = document.getElementById("soat")
const daqiqaEl = document.getElementById("daqiqa")
const soniyaEl = document.getElementById("soniya")

const talabalikningTugashMuddati = new Date("Jule 1, 2024 00:00:00").getTime()

sanoqYangilanishi()

function sanoqYangilanishi() {
  const hozirgiVaqt = new Date().getTime();
  const farqQiluvchiVaqt = talabalikningTugashMuddati - hozirgiVaqt;
  console.log(farqQiluvchiVaqt);

  const soniya = 1000;
  const daqiqa = soniya * 60;
  const soat = daqiqa * 60;
  const kun = soat * 24;
  const oy = kun * 30;

  const o = Math.floor(farqQiluvchiVaqt/ oy);
  const k = Math.floor((farqQiluvchiVaqt % oy)/ kun);
  const st = Math.floor((farqQiluvchiVaqt % kun)/ soat);
  const d = Math.floor((farqQiluvchiVaqt % soat)/ daqiqa);
  const sya = Math.floor((farqQiluvchiVaqt % daqiqa)/ soniya);

  oyEl.innerText = o;
  kunEl.innerText = k;
  soatEl.innerText = st;
  daqiqaEl.innerText = d;
  soniyaEl.innerText = sya;
  setTimeout(sanoqYangilanishi, 1000)
}