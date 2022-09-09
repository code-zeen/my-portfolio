const body = document.querySelector("body")
const exitBtn = document.querySelector(".exit-btn")
const closeBtn = document.querySelector(".close-btn")
const modalBackdrop = document.getElementById("modal-backdrop")
const modal = document.getElementById("modal")
const modalTitle = document.getElementById("modal-title")
const happyModal = document.getElementById("happy-modal")
const moshModal = document.getElementById("mosh-modal")
const recipesModal = document.getElementById("recipes-modal")
const happyBtn = document.getElementById("happy-btn")
const moshBtn = document.getElementById("mosh-btn")
const recipesBtn = document.getElementById("recipes-btn")
const moreBtn = document.querySelector(".more-btn")

exitBtn.addEventListener("click", deactivateModal)
closeBtn.addEventListener("click", deactivateModal)

function activateModal() {
  modalBackdrop.style.display = "block"
  modalTitle.scrollIntoView(true)
  console.log("modal activated")
}
function deactivateModal() {
  modalBackdrop.style.display = "none"
  console.log("modal deactivated")
}

happyBtn.addEventListener("click", function() {
  activateModal()
  modalTitle.textContent = "사이트 리뉴얼 : 해피피플"
  happyModal.style.display = "block"
  moshModal.style.display = "none"
  recipesModal.style.display = "none"
  moreBtn.setAttribute("href","subpages/happy-people/index.html")
})
moshBtn.addEventListener("click", function() {
  activateModal()
  modalTitle.textContent = "사이트 리뉴얼 : mosh!"
  happyModal.style.display = "none"
  moshModal.style.display = "block"
  recipesModal.style.display = "none"
  moreBtn.href="subpages/mosh/index.html"
})
recipesBtn.addEventListener("click", function() {
  activateModal()
  modalTitle.textContent = "사이트 리뉴얼 : 만개의 레시피"
  happyModal.style.display = "none"
  moshModal.style.display = "none"
  recipesModal.style.display = "block"
  moreBtn.href="https://google.com/"
})

function keyPress(e) {
  if (e.key === "Escape") {
    deactivateModal()
  }
}
body.addEventListener("keydown", keyPress)

modalBackdrop.addEventListener("click", function () {
  deactivateModal()
})
modal.addEventListener("click", function(e) {
  e.preventDefault()
  e.stopPropagation()
  e.stopImmediatePropagation
  return false
})