
//Add your code under this line

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const form = document.getElementById('checkout-form')
const inputCard = document.querySelector('#inputCard')
const alertTrigger = document.getElementById('submit-btn')
const summaryCard = document.querySelector('.card')
const summaryList = document.querySelector('.card > ul')

var order = { name: '', email: '', card: '' }


const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    ` <div>${message}</div>`,
    ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
    ].join('')
    alertPlaceholder.append(wrapper)
    }

    function isNumeric (n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
        }
        inputCard.addEventListener('input', event => {
        if (!inputCard.value) {
        return event.preventDefault() // stops modal from being shown
        } else {
        inputCard.value = inputCard.value.replace(/-/g, '')
        let newVal = ''
        for (var i = 0, nums = 0; i < inputCard.value.length; i++) {
        if (nums != 0 && nums % 4 == 0) {
        newVal += '-'
        }
        newVal += inputCard.value[i]
        if (isNumeric(inputCard.value[i])) {
        nums++
        }
        }
        inputCard.value = newVal
        }
        })


let validate = function(){
  val = true;
  let email = document.getElementById('inputEmail4')
  let name = document.getElementById('inputName')
  let card = document.getElementById('inputCard')
  
  if (!email.value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )){
    email.setAttribute("class", "form-control is-invalid");
    val = false;
  }
  else{
      email.setAttribute("class", "form-control is-valid");
      order.email = email.value
  }

  if (name.value.length == 0)
  {
    name.setAttribute("class","form-control is-invalid")
    val = false
  }
  else{
    name.setAttribute("class", "form-control is-valid");
    order.name = name.value
  }

  if (!card.value.match(/^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/))
  {
    card.setAttribute("class","form-control is-invalid")
    val = false
  }
  else{
    card.setAttribute("class", "form-control is-valid");
    order.card = card.value
  }

  if (val){
    form.classList.add("collapse")

    for (const [key, value] of Object.entries(order)) {
        summaryList.innerHTML += '<li class="list-group-item"> <b>' + `${key}` + ': </b>' + `${value}` +'</li>'
    }
    summaryCard.classList.remove("collapse")
    alertPlaceholder.innerHTML = ""
    alert('<i class="bi-cart-check-fill"></i> You have made an order!', 'success')
  }
  return val;
}

form.addEventListener('submit', event => {
    //if (!form.checkValidity()) {
    if (!validate()) {
    alertPlaceholder.innerHTML = ''
    alert('<i class="bi-exclamation-circle"></i> Something went wrong!','danger')
    }
    event.preventDefault()
    event.stopPropagation()
    //form.classList.add('was-validated')
    }, false )