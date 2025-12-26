/* ===== FLOW CONTROL ===== */
function go(n){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById("s"+n).classList.add("active");
}

/* ===== STEP 3 WAIT BUTTON ===== */
setTimeout(()=>{
  let b=document.getElementById("waitBtn");
  if(b){
    b.disabled=false;
    b.innerText="I'm Ready 🌸";
    b.onclick=()=>go(4);
  }
},5000);

/* ===== TYPEWRITER FULL MESSAGE ===== */
const text=`Sun yaar…
Mujhe pata hai humare beech aaj-kal kuch theek nahi chal raha,
shayad kuch hai bhi nahi.
Par main bas itna chahta hoon ki tu jo chahe, wo tujhe mil jaaye.
Chahe main teri chahne wali list mein hoon ya nahi,
bas tu hamesha khush rahe 🤍

Pata hai humari starting kahan se hui thi? 😂
Ek chhoti si meetup, achanak se…
aur tu, main, pata nahi kaise ek random GC mein aa gaya tha.
Tab socha bhi nahi tha ki wahan koi aisa hoga
jo mere saath 1.5 saal tak chalega.
Aur haan yaar… 1.5 saal ho gaye,
pata hi nahi chala.

Tujhe wo date yaad hai?
June 17 — jab tu mujhe mili thi,
jab humari baatein start hui thi.

Wo song yaad hai tujhe?
“Haan, maanga jo mera hai, jaata kya tera hai?
Maine kaun si tujhse jannat maang li?
Kaisa Khuda hai tu, bas naam ka hai tu
Rabba, jo teri itni si bhi na chali”

Phir meri life mein wo breakup hua…
jab mujhe dhokha mila.
Us time tu hi thi jo mere saath thi.
Dheere-dheere baatein hui, dosti hui,
aur pata hi nahi chala kab kya ho gaya.
Sach bolun… mujhe pyaar ho gaya tha.
Aur shayad aaj bhi hai.

Kuch aisi rahi humari kahani
2024 se 2025 tak.
Agar hum saath rahe
to 2026 mein aur bhi achhe moments banayenge 🤍

Ly ❤️‍🩹
Happpppppyyyy Birthday meri Shraddha 🎂❤️
Again and again.`;

/* TYPEWRITER LOGIC */
let i=0,done=false;
const obs=new MutationObserver(()=>{
  if(document.getElementById("s6").classList.contains("active") && !done){
    done=true;
    (function type(){
      if(i<text.length){
        document.getElementById("typeText").innerText+=text.charAt(i++);
        setTimeout(type,35); // typing speed 35ms
      }
    })();
  }
});
obs.observe(document.body,{subtree:true,attributes:true});

/* ===== END SHOW ===== */
function endShow(){
  document.getElementById("s7").classList.add("fade");
  setTimeout(()=>go(8),1500); // cake show
}
