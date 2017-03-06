function validateForm(){
	/* Escribe tú código aquí */
  var nombre = document.getElementById("name").value;
   var apellido = document.getElementById("lastname").value;
   var correo = document.getElementById("input-email").value;
   var contraseña = document.getElementById("input-password").value;

   var bici = document.getElementById("elije");
   var elecBici = bici.options[bici.selectedIndex].value;


   var letras = /[a-z]/;
   var mayusculas = /[A-Z]/;
   var expReg = /\w+@+[a-z]+\.+[a-z]/;
   //valido correo y nombre

   if(elecBici == "0"){
     alert("Seleccione una opcion")
   }

   else  if( nombre ==="" || apellido === "" || correo === "" || contraseña === ""){
     alert("Completar los campos obligatorios");
     return false ;
     //con return evito que la pag se recargue o se envien los datos
   }
     else if(!letras.test(nombre)){
       alert("Ingrese un nombre válido");
       return false;
   }
     else if(!mayusculas.test(nombre.charAt(0))){
       alert("El nombre debe empezar con mayúsculas");
       return false;
     }

   else if(!letras.test(apellido)){
     alert("El apellido debe contener letras");
     return false;
   }
   else if(!mayusculas.test(apellido.charAt(0))){
     alert("El apellido debe empezar con mayúsculas");
     return false;
   }

   else if(!expReg.test(correo)){
     alert("Ingrese un email valido");
     return false;

   }
   else if( contraseña.length < 6){
     alert("La contraseña debe tener mas de 5 caracteres")
     return false;
   }
  else if(contraseña === "password" || contraseña === "123456" || contraseña === "098754")
    alert("Caracteres no aceptados")
    return false;
 }
 //uso test para evaluar al dato ingresado, ! es para cuando no se cumpla mi expresion
 //todas las condiciones estan buscando que no se cumplan las expresiones

}
