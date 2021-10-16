$('#buttonRegister').on('click', checkInput)
var username = document.getElementById('txtusername')
var password = document.getElementById('txtpassword')
var email = document.getElementById('txtemail')
var password1 = document.getElementById('txtpassword1')
function checkInput() {
  if (username.value == '') {
    setError(username, 'User Name cannot be blank')
  } else {
    setSuccess(username)
  }
  if (email.value == '') {
    setError(email, 'E-Mail cannot be blank')
  } else if (!isEmail(email.value)) {
    setError(email, 'Please Enter a Valid Email')
  } else {
    setSuccess(email)
  }
  if (password.value == '') {
    setError(password, 'Password cannot be blank')
  } else {
    setSuccess(password)
  }
  if (password1.value == '') {
    setError(password1, 'Confirm Password cannot be blank')
  } else if (password.value != password1.value) {
    setError(password1, 'Password does not match')
  } else {
    setSuccess(password1)
  }
}

function setError(input, message) {
  const form = input.parentElement
  const small = form.querySelector('small')
  form.className = 'form-control error'
  small.innerText = message
}

function setSuccess(username) {
  username.parentElement.className = 'form-control success'
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

var smallee = document.getElementById('cpass')
password1.addEventListener('blur', function () {
  // var parent = password1.parentElement;
  var pass = password.value
  var pass1 = password1.value
  if (password.value != '') {
    if (pass.localeCompare(pass1) == 0) {
      smallee.innerHTML = 'Verified'
      smallee.className = 'success'
    } else {
      smallee.className = 'error'
      smallee.innerHTML = 'Password Mismatch'
    }
  }
  // console.log(small.innerHTML);
})
