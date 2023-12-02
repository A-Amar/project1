
const products = Array.from(document.querySelectorAll('.product-row'))

for (let i = 0; i < products.length; i++) {
  const htmlProductRow = products[i]

  const htmlBtnPlus = htmlProductRow.querySelector('.counter-plus') //appel-bouton_+
  const htmlBtnMinus = htmlProductRow.querySelector('.counter-minus')//recuperation-bouton_-
  const htmlQty = htmlProductRow.querySelector('.counter-qty')
  const htmlPrice = htmlProductRow.querySelector('.product-price')
  const htmlTotal = htmlProductRow.querySelector('.product-total')
  const htmlBtnDelete = htmlProductRow.querySelector('.product-delete')
  const htmlBtnLike = htmlProductRow.querySelector('.product-like')

  let qtyValue = htmlQty.innerText
  let priceValue = htmlPrice.innerText

  
  if (qtyValue) {
    qtyValue = Number(qtyValue.trim())
  }
  
  if (priceValue) {
    priceValue = Number(priceValue.toLowerCase().replace('cfa', ''))
  }


  htmlBtnPlus.addEventListener('click', () => {
    qtyValue = qtyValue + 1

    htmlQty.innerText = qtyValue
    htmlTotal.innerText = (qtyValue * priceValue) + " CFA"
    calculateSubTotal()
  })

  htmlBtnMinus.addEventListener('click', () => {
    if (qtyValue - 1 > 0) {
      qtyValue = qtyValue - 1
    } else {
      qtyValue = 0
    }

    htmlQty.innerText = qtyValue
    htmlTotal.innerText = (qtyValue * priceValue) + " CFA"
    calculateSubTotal()
  })

  htmlBtnDelete.addEventListener('click', function() { // bouton delete
    htmlProductRow.remove()
    calculateSubTotal()
  })

  htmlBtnLike.addEventListener('click', function() {
    if (htmlProductRow.classList.contains('liked')) {
      htmlProductRow.classList.remove('liked')
      htmlBtnLike.innerHTML = '<i class="bi bi-heart"></i>'//link heart from bootsrap
   
    } else {
      htmlProductRow.classList.add('liked')
      htmlBtnLike.innerHTML = '<i class="bi bi-heart-fill"></i>' //link heart from bootsrap
    }
    
  })


}

//  totaltotal-function
function calculateSubTotal() {
  const totals = Array.from(document.querySelectorAll('.product-total'))
  const htmlSubTotal = document.querySelector('#subTotal')

  let subTotal = 0
  for(let i = 0; i < totals.length; i++) {
    const total =  totals[i]
    let totalValue = total.innerText

    if (totalValue) {
      totalValue = Number(totalValue.toLowerCase().replace('cfa', ''))
      subTotal += totalValue
    }
  }

  htmlSubTotal.innerText = subTotal + ' CFA'
}

calculateSubTotal()