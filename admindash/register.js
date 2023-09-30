 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";


import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";


        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyB1tTXr-IhfwQH4o9CuwER22eJ-hyLMlVE",
          authDomain: "cryp2shop-b847d.firebaseapp.com",
          projectId: "cryp2shop-b847d",
          storageBucket: "cryp2shop-b847d.appspot.com",
          messagingSenderId: "742822556553",
          appId: "1:742822556553:web:2ad76b057206f517b4a758",
          measurementId: "G-PCEE8ZTZZR"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        const auth = firebase.auth()
        const database = firebase.database()

        //register function
        function register() {
            email = document.getElementById('email').value
            full_name = document.getElementById('full_name').value
            password = document.getElementById('password').value
           date_of_birth = document.getElementById('date_of_birth').value
           phone_number = document.getElementById('number').value
           address = document.getElementById('address').value
           address_line2 = document.getElementById('address_line2').value
         country = document.getElementById('country').value
        city = document.getElementById('city').value
         region= document.getElementById('region').value
         usdt = document.getElementById('usdt').value
         bank_name = document.getElementById('bank_name').value
        account_number = document.getElementById('account_number').value
       id_tyope = document.getElementById('id_type').value
         id_number = document.getElementById('id_number').value

         if (validate_email(email) == false || validate_password(password) == false){
            alert('Email or Password error ')
            return
         }
         
         if (validate_field(full_name) == false ){
            alert('Field error')
            return
         }
//firebase will alert user with this
         auth.createUserWithEmailAndPassword(email, password)
         .then(function() { 
            var user = auth.currentUser
            var database_ref = database.ref()
            var user_data = {
                email : email,
                full_name : full_name,
                phone_number : number,
                id_type : id_type,
                last_login : Date.now()
            }

            database_ref.child('users/' + user.uid).set(user_date)

            alert('user created')
         })
         .catch(function(error) {
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
         })
        }

        

        function validate_email(email){
           expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
            if (expression.test(email) == true){
                return true
            }
            else{
                return false
            }
        }

        function validate_password(password){
            if (password < 6){
                return false
            }
            else {
                return true
            }
        }



    function validate_field(field){
            if (password == null){
                return false
            }

            if (password <= 0){
                return false
            }

            else {
                return true
            }
        }