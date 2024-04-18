const table = document.getElementById("userTableData")

let kullanuciListesi= [
    { id: 1, isim: "Yunus Emre", soyisim:"KOCA", Telefon:"5530893555", TC:"1234567891"  },
    { id: 2, isim: "Sena", soyisim:"OCAK", Telefon:"232393555", TC:"12323423421"  }
  
   
  ];


getUserList();
function getUserList (){
    table.innerHTML = "";
    for (let user of kullanuciListesi){
        let kullanicilar = `
        <tr>
        <td>
          
                <input type="text" class="form-control" id="first_name_" value="${user.isim}">
            
        </td>
        <td>
            <input type="text" class="form-control" id="last_name_" value="${user.soyisim}">
        </td>
        <td>
            <input type="text" class="form-control" id="telefon_" value="${user.Telefon}">
        </td>
        <td>
            <input type="text" class="form-control" id="user_tc_" value="${user.TC}">
        </td>
        <td>
            <div class="btnTable">
                <a onclick= 'editask(${user.id},"${user.isim}","${user.soyisim}","${user.Telefon}" ,"${user.TC}")'  href="#" class="btn btn-warning  me-2"> <i class="fa-solid fa-pen-to-square  "></i> </a>
                <a onclick = "deleteUser(${user.id})" id= "deleteBtn" href="#" class="btn btn-danger"><i class="fa-solid fa-trash-can   "></i> </a>
            </div>
        </td>
    </tr>`;
    table.insertAdjacentHTML("beforeend", kullanicilar); // insertadjacentHtml w3school dan bak beforeend son eleman olarak ekler
    }
}
// user ekleme
let userIsim = document.querySelector("#first_name");
let userSoyisim = document.querySelector("#last_name");
let userTelefon = document.querySelector("#tel-no");
let userTc = document.querySelector("#tc-no");

let userfirstnameUpdate = document.querySelector("#first_nameUpdate");
let lastnameUpdate = document.querySelector("#last_nameUpdate");
let userTelUpdate = document.querySelector("#tel-noUpdate");
let userTcUpdate = document.querySelector("#tc-noUpdate");


let editId = "";
let isEditMode = false;
let nameUpdate = document.querySelector("#first_nameUpdate");



document.querySelector("#Kaydet").addEventListener("click",newUserAdd);


function newUserAdd (event){
    if (userIsim.value == "" ||userSoyisim.value == "" || userTelefon.value == ""){
        alert("Lütfen zorunlu alanlari doldurunuz");
    }
    else {
        kullanuciListesi.push ({
                     id: kullanuciListesi.length +1, "isim":userIsim.value , "soyisim":userSoyisim.value, "Telefon":userTelefon.value ,"TC":userTc.value
            })
        // if (!isEditMode){
        //     //ekleme
        //     kullanuciListesi.push({
        //         id: kullanuciListesi.length +1, "isim":userIsim.value , "soyisim":userSoyisim.value, "Telefon":userTelefon.value ,"TC":userTc.value
        //    });
        

        // }
        // else {
        //     for (let user of kullanuciListesi){
        //         if(user.id == editId){
        //             user.isim = nameUpdate.value
        //         }
        //         isEditMode = false;
        //     }
        // }
       
        userIsim.value = "";
        userSoyisim.value = "";
        userTc.value = "";
        userTelefon.value = "";
     
        getUserList ();
        event.preventDefault();

    }
};

// kullanici silme 

function deleteUser (id){
  
   let deletedid;
   for (let index in kullanuciListesi){
    if (kullanuciListesi[index].id == id)
        deletedid = index;

   }
   kullanuciListesi.splice (deletedid,1);
   getUserList();
   alert ("Silme İşlemi başarıyla gerçekleşti.")
}

// kullanici guncelleme 
function editask (userid, userName, LastnameUser, userTelefonNumber, userTCnumber){
    console.log(userid, userName, LastnameUser, userTelefonNumber, userTCnumber)
   
    editId = userid;
    isEditMode = true;
    userfirstnameUpdate.value = userName;
    userfirstnameUpdate.focus();
    userfirstnameUpdate.classList.add("active");

    lastnameUpdate.value = LastnameUser;
    lastnameUpdate.focus();
    lastnameUpdate.classList.add("active");

    userTelUpdate.value = userTelefonNumber;
    userTelUpdate.focus();
    userTelUpdate.classList.add("active");


    userTcUpdate.value = userTCnumber;
    userTcUpdate.focus();
    userTcUpdate.classList.add("active");



    console.log("edit id:", editId)
    console.log("edit mode:", isEditMode)
    console.log(userfirstnameUpdate.value, lastnameUpdate.value , userTelUpdate.value,  userTcUpdate.value )

}
document.querySelector("#duzenle").addEventListener("click",updateUser);



function updateUser (event){
    if (userfirstnameUpdate.value == "" || lastnameUpdate.value == "" || userTelUpdate.value == "" ){
        alert("Lütfen zorunlu alanlari doldurunuz");
    }
    else {
        if (!isEditMode){
            //ekleme
            // kullanuciListesi.push({
            //     "id":kullanuciListesi.length +1, "isim":userfirstnameUpdate.value,"soyisim":lastnameUpdate.value, "Telefon":userTelUpdate.value ,"TC":userTcUpdate.value
            // })
            alert ("Ekleme işlemleri yan taraftan olmaktadır.")
        }
         {
            for (let user of kullanuciListesi){
                // console.log("abc" , user)
                // console.log( "asdadsa" , editId)

                if (user.id == editId){
                   console.log(userfirstnameUpdate.value)
                    user.isim = userfirstnameUpdate.value;
                    user.soyisim = lastnameUpdate.value;
                    user.Telefon = userTelUpdate.value;
                    user.TC = userTcUpdate.value;
                    
                }
                isEditMode = false;
                console.log(kullanuciListesi)
            }
        }
        userfirstnameUpdate.value = "";
        lastnameUpdate.value = "";
        userTelUpdate.value = "";
        userTcUpdate.value = "";
        getUserList();
        event.preventDefault();
    }
}