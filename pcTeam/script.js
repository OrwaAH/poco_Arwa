let bilal = {
    firNm: "Bilal",
    secNm: "Suleiman",
    age: 28,
    country: "Afghanistan",
    thiNm: "Nickname: Survivor",
    eyeClr: "Black Eyes",
}

let ismet = {
    firNm: "Ismet",
    secNm: "Bakay",
    age: 38,
    country: "Turkey",
    thiNm: "NickName: Smiley Face",
    eyeClr: "Black Eyes",
}

let abdul = {
    firNm: "Abdul Fatah",
    secNm: "Sheirar",
    age: 33,
    country: "Afghanistan",
    thiNm: "Nickname: Friendly Guy",
    eyeClr: "Black Eyes",
}

let yulia = {
    firNm: "Yulia",
    secNm: "Kuts",
    age: 42,
    country: "Ukraine",
    thiNm: "Nickname: The Quiete",
    eyeClr: "Eye Color: Noisette",
}

let oguz = {
    firNm: "Oguz",
    secNm: "Yildiz",
    age: 37,
    country: "Turkey",
    thiNm: "Nickname: The Professional",
    eyeClr: "Black Eyes",
}

let emin = {
    firNm: "Emin",
    secNm: "Samid",
    age: 35,
    country: "Turkey",
    thiNm: "Nickname: The guy next door!",
    eyeClr: "Black Eyes",
}

let enes = {
    firNm: "Enes",
    secNm: "Bora",
    age: 38,
    country: "Turkey",
    thiNm: "Nickname: The Cool Teacher",
    eyeClr: "Green Eyes",
}

let sirkan = {
    firNm: "Serkan",
    secNm: "Tasgin",
    age: 45,
    country: "Turkey",
    thiNm: "Nickname: The Prof.",
    eyeClr: "Black Eyes",
}

let joythi = {
    firNm: "Jyothi",
    secNm: "Jogin",
    age: 35,
    country: "India",
    eyeClr: "Black Eyes",
}

let olina = {
    firNm: "Olena",
    secNm: "Smetiuk",
    age: 39,
    country: "Ukraine",
    eyeClr: "Green Eyes",
}

let ari = {
    firNm: "Ari",
    secNm: "Ni Luh",
    age: 35,
    country: "Indonesia",
    thiNm: "Nickname: The Helper",
    eyeClr: "Black Eyes",
}

let sattein = {
    firNm: "Sadettin",
    secNm: "Karatas",
    age: 34,
    country: "Turkey",
    thiNm: "Nickname: The Strong",
    eyeClr: "Black Eyes",
}

let shamil = {
    firNm: "Shamil",
    secNm: "Idrrisov",
    age: 51,
    country: "Russia",
    eyeClr: "Black Eyes",
}

let fatih = {
    firNm: "Fatih",
    secNm: "Yavuz",
    age: 33,
    country: "Turkey",
    thiNm: "Nickname: Hard Worker",
    eyeClr: "Eye Color: Noisette",
}

let baris = {
    firNm: "Baris",
    secNm: "Durucan",
    age: 45,
    country: "Turkey",
    thiNm: "Nickname: Mr.The General",
    eyeClr: "Eye Color: Noisette",
}

let murat = {
    firNm: "Murat",
    secNm: "Güldibi",
    age: 33,
    country: "Turkey",
    thiNm: "Nickname: The Polite",
    eyeClr: "Eye Color: Noisette",
}

let sevim = {
    firNm: "Sevim",
    secNm: "Gokturk",
    age: 40,
    country: "Turkey",
    thiNm: "Nickname: The Nice",
    eyeClr: "Black Eyes",
}

let shanai = {
    firNm: "Senay",
    secNm: "Atli",
    age: 35,
    country: "Turkey",
    thiNm: "Nickname: Fighter",
    eyeClr: "Eye Color: Noisette",
}

let arwa = {
    firNm: "Arwa",
    secNm: "Alhussein",
    age: 42,
    country: "Syria",
    eyeClr: "Eye Color: Brown",
}

let ali = {
    firNm: "Ali",
    secNm: "Göcmen",
    age: 35,
    country: "Turkey",
    eyeClr: "Eye Color: Green",
}

let tuba = {
    firNm: "Tuba",
    secNm: "Karaca",
    age: 37,
    country: "Turkey"
}

let hasan = {
    firNm: "Hasan",
    secNm: "Danaci",
    age: 41,
    country: "Turkey",
    thiNm: "Nickname: The Wise",
    eyeClr: "Eyes Color: Noisete",
}

let yusuf = {
    firNm: "Yusuf",
    secNm: "Ilhan",
    age: 38,
    country: "Turkey",
    thiNm: "Nickname: Cool & Smiley",
    eyeClr: "Eyes Color: Noisette",
}

let mustafa = {
    firNm: "Mustafa",
    secNm: "Konya",
    age: 32,
    country: "Turkey",
    eyeClr: "Black Eyes",
}


function myFunction(img_id) {
    if (img_id == 1) {
        document.getElementById(1).src = "images/gif0.webp";
        window.alert(`${bilal.firNm} ${bilal.secNm}\n ${bilal.age} years old.\n ${bilal.country} \n ${bilal.eyeClr} \n ${bilal.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(1).src = "images/00-Powercoders_Portrait_2.jpg";
        });

    }

    else if (img_id == 2) {
        document.getElementById(2).src = "images/gif1.gif";
        window.alert(`${ismet.firNm} ${ismet.secNm}\n ${ismet.age} years old.\n ${ismet.country} \n ${ismet.eyeClr} \n ${ismet.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(2).src = "images/01-Powercoders_Portrait_5.jpg";
        });
    }

    else if (img_id == 3) {
        document.getElementById(3).src = "images/gif2.gif";
        window.alert(`${abdul.firNm} ${abdul.secNm}\n ${abdul.age} years old.\n ${abdul.country} \n ${abdul.eyeClr} \n ${abdul.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(3).src = "images/03-Powercoders_Portrait_7.jpg";
        });
    }

    else if (img_id == 4) {
        document.getElementById(4).src = "images/gif3.gif";
        window.alert(`${yulia.firNm} ${yulia.secNm}\n ${yulia.age} years old.\n ${yulia.country} \n ${yulia.eyeClr} \n ${yulia.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(4).src = "images/05-Powercoders_Portrait_9.jpg";
        });
    }

    else if (img_id == 5) {
        document.getElementById(5).src = "images/gif4.gif";
        window.alert(`${oguz.firNm} ${oguz.secNm}\n ${oguz.age} years old.\n ${oguz.country} \n ${oguz.eyeClr} \n ${oguz.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(5).src = "images/13-Powercoders_Portrait_17.jpg";
        });
    }

    else if (img_id == 6) {
        document.getElementById(6).src = "images/gif5.gif";
        window.alert(`${emin.firNm} ${emin.secNm}\n ${emin.age} years old.\n ${emin.country} \n ${emin.eyeClr} \n ${emin.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(6).src = "images/17-Powercoders_Portrait_22.jpg";
        });
    }

    else if (img_id == 7) {
        document.getElementById(7).src = "images/gif6.gif";
        window.alert(`${enes.firNm} ${enes.secNm}\n ${enes.age} years old.\n ${enes.country} \n ${enes.eyeClr} \n ${enes.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(7).src = "images/19-Powercoders_Portrait_24.jpg";
        });
    }
    else if (img_id == 8) {
        document.getElementById(8).src = "images/gif7.gif";
        window.alert(`${sirkan.firNm} ${sirkan.secNm}\n ${sirkan.age} years old.\n ${sirkan.country} \n ${sirkan.eyeClr} \n ${sirkan.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(8).src = "images/21-Powercoders_Portrait_27.jpg";
        });
    }

    else if (img_id == 9) {
        document.getElementById(9).src = "images/gif8.gif";
        window.alert(`${joythi.firNm} ${joythi.secNm}\n ${joythi.age} years old.\n ${joythi.country} \n ${joythi.eyeClr}`);

        document.addEventListener("click", function () {
            document.getElementById(9).src = "images/22-Powercoders_Portrait_28.jpg";
        });
    }

    else if (img_id == 10) {
        document.getElementById(10).src = "images/gif9.gif";
        window.alert(`${olina.firNm} ${olina.secNm}\n ${olina.age} years old.\n ${olina.country} \n ${olina.eyeClr}`);

        document.addEventListener("click", function () {
            document.getElementById(10).src = "images/24-Powercoders_Portrait_30.jpg";
        });
    }

    else if (img_id == 11) {
        document.getElementById(11).src = "images/gif10.gif";
        window.alert(`${ari.firNm} ${ari.secNm}\n ${ari.age} years old.\n ${ari.country} \n ${ari.eyeClr} \n ${ari.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(11).src = "images/26-Powercoders_Portrait_32.jpg";
        });
    }

    else if (img_id == 12) {
        document.getElementById(12).src = "images/gif11.webp";
        window.alert(`${sattein.firNm} ${sattein.secNm}\n ${sattein.age} years old.\n ${sattein.country} \n ${sattein.eyeClr} \n ${sattein.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(12).src = "images/28-Powercoders_Portrait_34.jpg";
        });
    }

    else if (img_id == 13) {
        document.getElementById(13).src = "images/gif12.webp";
        window.alert(`${shamil.firNm} ${shamil.secNm}\n ${shamil.age} years old.\n ${shamil.country} \n ${shamil.eyeClr}`);

        document.addEventListener("click", function () {
            document.getElementById(13).src = "images/30-Powercoders_Portrait_36.jpg";
        });
    }

    else if (img_id == 14) {
        document.getElementById(14).src = "images/gif13.webp";
        window.alert(`${fatih.firNm} ${fatih.secNm}\n ${fatih.age} years old.\n ${fatih.country} \n ${fatih.eyeClr} \n ${fatih.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(14).src = "images/31-Powercoders_Portrait_37.jpg";
        });
    }

    else if (img_id == 15) {
        document.getElementById(15).src = "images/gif14.webp";
        window.alert(`${baris.firNm} ${baris.secNm}\n ${baris.age} years old.\n ${baris.country} \n ${baris.eyeClr} \n ${baris.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(15).src = "images/32-Powercoders_Portrait_38.jpg";
        });
    }

    else if (img_id == 16) {
        document.getElementById(16).src = "images/gif15.webp";
        window.alert(`${murat.firNm} ${murat.secNm}\n ${murat.age} years old.\n ${murat.country} \n ${murat.eyeClr} \n ${murat.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(16).src = "images/33-Powercoders_Portrait_39.jpg";
        });
    }

    else if (img_id == 17) {
        document.getElementById(17).src = "images/gif16.webp";
        window.alert(`${sevim.firNm} ${sevim.secNm}\n ${sevim.age} years old.\n ${sevim.country} \n ${sevim.eyeClr} \n ${sevim.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(17).src = "images/34-Powercoders_Portrait_40.jpg";
        });
    }

    else if (img_id == 18) {
        document.getElementById(18).src = "images/gif17.webp";
        window.alert(`${shanai.firNm} ${shanai.secNm}\n ${shanai.age} years old.\n ${shanai.country} \n ${shanai.eyeClr} \n ${shanai.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(18).src = "images/35-Powercoders_Portrait_41.jpg";
        });
    }

    else if (img_id == 19) {
        document.getElementById(19).src = "images/gif18.gif";
        window.alert(`${arwa.firNm} ${arwa.secNm}\n ${arwa.age} years old.\n ${arwa.country} \n ${arwa.eyeClr}`);

        document.addEventListener("click", function () {
            document.getElementById(19).src = "images/37-Powercoders_Portrait_43.jpg";
        });
    }
    else if (img_id == 20) {
        document.getElementById(20).src = "images/gif19.webp";
        window.alert(`${ali.firNm} ${ali.secNm}\n ${ali.age} years old.\n ${ali.country} \n ${ali.eyeClr}`);

        document.addEventListener("click", function () {
            document.getElementById(20).src = "images/40-Powercoders_Portrait_46.jpg";
        });
    }
    else if (img_id == 21) {
        document.getElementById(21).src = "images/gif20.webp";
        window.alert(`${tuba.firNm} ${tuba.secNm}\n ${tuba.age} years old.\n ${tuba.country}`);

        document.addEventListener("click", function () {
            document.getElementById(21).src = "images/07-Powercoders_Portrait_11.jpg";
        });
    }
    else if (img_id == 22) {
        document.getElementById(22).src = "images/gif21.webp";
        window.alert(`${hasan.firNm} ${hasan.secNm}\n ${hasan.age} years old.\n ${hasan.country} \n ${hasan.eyeClr} \n ${hasan.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(22).src = "images/09-Powercoders_Portrait_13.jpg";
        });
    }
    else if (img_id == 23) {
        document.getElementById(23).src = "images/gif22.webp";
        window.alert(`${yusuf.firNm} ${yusuf.secNm}\n ${yusuf.age} years old.\n ${yusuf.country} \n ${yusuf.eyeClr} \n ${yusuf.thiNm} `);

        document.addEventListener("click", function () {
            document.getElementById(23).src = "images/16-Powercoders_Portrait_21.jpg";
        });
    }
    else if (img_id == 24) {
        document.getElementById(24).src = "images/gif23.webp";
        window.alert(`${mustafa.firNm} ${mustafa.secNm}\n ${mustafa.age} years old.\n ${mustafa.country} \n ${mustafa.eyeClr}`);

        document.addEventListener("click", function () {
            document.getElementById(24).src = "images/11-Powercoders_Portrait_15.jpg";
        });
    }
}