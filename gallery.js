const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

const imgSrcs = [
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657815006/take-a-seat/seat/dora-14_lo2shc.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657815005/take-a-seat/seat/dora-11_xnbfxj.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657815003/take-a-seat/seat/dora-10_rzxgyg.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657815002/take-a-seat/seat/dora-17_xukfai.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657815001/take-a-seat/seat/dora-12_ti8hx5.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814998/take-a-seat/seat/dora-8_zctbhe.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814994/take-a-seat/seat/dora-9_oy1oco.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814994/take-a-seat/seat/dora-7_ircbe9.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814994/take-a-seat/seat/dora-13_kconec.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814993/take-a-seat/seat/dora-2_mqxmag.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814989/take-a-seat/seat/dora-22_lgshga.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814988/take-a-seat/seat/dora-5_uzlflm.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814986/take-a-seat/seat/dora-16_atnemd.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814982/take-a-seat/seat/dora-6_uxpyyy.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814979/take-a-seat/seat/dora-1_r2jreu.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814978/take-a-seat/seat/dora-3_otsf6j.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814977/take-a-seat/seat/dora-23_xkuqs8.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814974/take-a-seat/seat/dora-21_zhzcas.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814974/take-a-seat/seat/dora-20_kh3uxq.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814968/take-a-seat/seat/dora-18_nm4egq.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814967/take-a-seat/seat/dora-24_zzjpmh.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814966/take-a-seat/seat/dora-4_n1jubm.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814963/take-a-seat/seat/dora-19_o65syn.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814961/take-a-seat/seat/dora-27_ui71yr.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814959/take-a-seat/seat/dora-26_o3ps8a.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814959/take-a-seat/seat/dora-25_zlrfmu.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814958/take-a-seat/seat/dora-29_ult5ey.jpg",
    "https://res.cloudinary.com/dyuhtpg5y/image/upload/w_400,f_auto,q_auto/v1657814957/take-a-seat/seat/dora-28_vi6zq2.jpg",
];

function generateHTML([h, v], index) {
    const length = imgSrcs.length;
    if (index >= length) {
        index = Math.floor(Math.random() * length);
    }
    console.log(index, "***");
    return `
<div class="item height${h} v${v}">
  <img alt="" loading="lazy" src="${imgSrcs[index]}">
  <div class="item__overlay">
    <button>View →</button>
  </div>
</div>
`;
}

function randomNumber(limit) {
    console.log(Math.floor(Math.random() * limit) + 2);
    return Math.floor(Math.random() * limit) + 2;
}

function handleClick(e) {
    const src = e.currentTarget.querySelector("img").src;
    overlayImage.src = src;
    overlay.classList.add("open");
}

function close() {
    overlay.classList.remove("open");
}

const digits = Array.from(
    {
        length: imgSrcs.length,
    },
    () => [randomNumber(3), randomNumber(4)]
).concat([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
]);

const html = digits.map(generateHTML).join("");
gallery.innerHTML = html;

const items = document.querySelectorAll(".item");

items.forEach((item) => item.addEventListener("click", handleClick));

overlayClose.addEventListener("click", close);
