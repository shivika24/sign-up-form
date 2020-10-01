    var list=[];
    //to get previous data stored in local storagre if-any
    getFromLocalstorage()

    //form-validation
     function validate()
     {    
         let name=document.getElementById("name");
         let birthday=document.getElementById("myDate");
         let place=document.getElementById("mySelect");
         var ele = document.getElementsByName('gender');
         var gender="";
         for(i = 0; i < ele.length; i++) { 
                  if(ele[i].checked) 
                  gender=ele[i].value; 
              } 
         let about=document.getElementById("about");
         let password=document.getElementById("password")
         if(NotEmpty(name.value,"UserName")&&alphabet(name.value))
         {
             if(NotEmpty(birthday.value,"Birthday"))
             {
                 if(countryselect(place.value)&&NotEmpty(place.value,"City"))
                 {
                     if(NotEmpty(gender,"Gender"))
                     {
                         if(NotEmpty(about.value,"About")&&alphaNumeric(about.value))
                         {
                             if(NotEmpty(password.value,"Password")&&alphaNumeric(password.value)&&checkPassword(password.value,7,12))
                             {
                                 const user={
                                     name:name.value,
                                     birthday:birthday.value,
                                     place:place.value,
                                     gender:gender,
                                     about:about.value,
                                     password:password.value
                                 };
                                 list.push(user)
                                 addToLocalstorage(list); 
                                 alert("Form Submitted Successfully")
                                 location.reload();
                             }                                                      
                         }
                     }
                 }               
             }
         }
         return false;
     }
     
    //password-toggle
    function toggle() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    }
    //add to local storage
    function addToLocalstorage(list) {
      localStorage.setItem('user', JSON.stringify(list));
      display(list);
    }
  
    //get data from local storage
    function getFromLocalstorage() {
      const getList = localStorage.getItem('user');
      if (getList) {
        list = JSON.parse(getList);
        display(list)
      }
    }

    //password validation
     function checkPassword(password,min,max)
     {
       var passwordLength = password.length;
       if (passwordLength >= max || passwordLength < min)
       {
         alert("Password  length be between "+min+" to "+max);
         return false;
       }
       return true;
     }

     //to check if any field is empty
     function NotEmpty(val,field)
     {
         if(val.length>0)
         return true;
         else
         {
         alert(field+" field Can Not Be Empty");
         return false;
         }
     }

     //dropdown selection
     function countryselect(ucountry)
     {
     if(ucountry == "Default")
     {
     alert('Select your country from the list');
     return false;
     }
     else
     {
     return true;
     }
     }

     //to check only alphabet are there
     function alphabet(name)
     { 
     var letters = /^[a-zA-Z ]*$/;;
     if(name.match(letters))
     {
     return true;
     }
     else
     {
     alert('Username must have alphabet characters only');
     return false;
     }
     }

     //to check alphabet and numbers are there
     function alphaNumeric(val)
     { 
     var letters = /^[a-z\d\-_\s]+$/i;
     if(val.match(letters))
     {
      return true;
     }
     else
     {
      alert('This Field must have alphanumeric characters only');
      return false;
     }
     }

     //add elements in row of the
     function display(list)
     {
         let table=document.getElementById("table");
         list.forEach(function(item) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
          cell1.innerHTML = `${item.name}`;
          cell2.innerHTML = `${item.birthday}`;
          cell3.innerHTML = `${item.place}`;
          cell4.innerHTML = `${item.gender}`;
          cell5.innerHTML = `${item.about}`;
          cell6.innerHTML = `${item.password}`;
      });
     }
document.getElementById("my_captcha_form").addEventListener("submit",function(evt)
  {
  
  var response = grecaptcha.getResponse();
  if(response.length == 0) 
  { 
    //reCaptcha not verified
    alert("please verify you are humann!"); 
    evt.preventDefault();
    return false;
  }
  //captcha verified
  //do the rest of your validations here
  
});
