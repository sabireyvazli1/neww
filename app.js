const nameINP = document.querySelector(".nameINP");
const surnameINP = document.querySelector(".surnameINP");
const passwordINP = document.querySelector(".passwordINP");
const IDINP = document.querySelector(".IDINP");
const deleteIdINP = document.querySelector(".deleteIdINP");
const forrm = document.querySelector(".forrm");
const forrm2 = document.querySelector(".forrm2");

forrm.addEventListener("submit", function(e){
    e.preventDefault();
    let obj = {};
    obj.ad = nameINP.value;
    obj.soyad = surnameINP.value;
    obj.parol = passwordINP.value;
    obj.id = IDINP.value;

    // Use Axios to send data to your backend
    axios.post("https://users-jb5u.onrender.com/student", obj);
});

forrm2.addEventListener("submit", function (e){
    e.preventDefault();

    const idToDelete = deleteIdINP.value;
    axios.delete(`https://users-jb5u.onrender.com/student/${idToDelete}`);
});