/* 
const buttonToggleModal = document.querySelector("#btn_pwd")

buttonToggleModal.addEventListener("click", function(){
    document.querySelector(".modal-wrapper").classList.toggle("show-modal")
})
*/
function showPwdModal() {
    const body = document.querySelector('body')
    const btnPwd = document.querySelector('.esqueci')

    btnPwd.addEventListener('click', function(e) {
        e.preventDefault()
        
        const modal = createModal()
        body.appendChild(modal)
        
        closeModal()
    })
}
showPwdModal()


function createModal(){

    const section = document.createElement('section')
    const divModal = document.createElement('div')
    const divModalHeader = document.createElement('div')
    const h3 = document.createElement('h3')
    const btnClose = document.createElement('button')
    const form = document.createElement('form')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const btnForm = document.createElement('button')

    section.classList.add('modal-wrapper')
    divModal.classList.add('modal')
    divModalHeader.classList.add('modal-header')
    
    h3.classList.add('modal-title')
    h3.innerText = 'Recuperar Senha'

    btnClose.classList.add('modal-close')
    btnClose.innerText = 'X'
    btnClose.id = 'closeBtn'

    form.classList.add('modal-form')

    label.classList.add('modal-label-email')
    label.htmlFor = 'email'
    label.innerText = 'E-mail:'

    input.classList.add('modal-input-pwd')
    input.name = 'e-mail'
    input.id = 'email'
    input.type = 'text'
    input.placeholder = 'Digite seu e-mail'

    btnForm.classList.add('modal-btn-solicita')
    btnForm.type = 'submit'
    btnForm.id = 'formBtn'
    btnForm.innerText = 'Solicitar Senha'

    form.append(label, input, btnForm)
    divModalHeader.append(h3, btnClose)

    divModal.append(divModalHeader,form)
    section.appendChild(divModal)

    return section
}
createModal()

function closeModal(){
    const modalWrapper = document.querySelector('.modal-wrapper')
    const closeBtn = document.querySelector('#closeBtn')

    closeBtn.addEventListener('click', function(){
        modalWrapper.remove()
    })
}
//console.log(createModal())

/* Desenvolva seu código aqui... 

<section class="modal-wrapper">
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">Esqueci minha senha</h3>
                    <button class="modal-close">X</button>
                </div>
                
                <form class="modal-form">
                    <label class="modal-label-email">E-mail</label>
                    <input class="modal-input-pwd" type="email" id="email" name="e-mail" maxlength="20" placeholder="Digite seu e-mail" required>
                    <button class="modal-btn-solicita">Solicitar senha</button>
                
                </form>
                

            </div>

        </section>
    
*/