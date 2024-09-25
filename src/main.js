// selecting elements
const totalAmount = document.getElementById('total');

const donateBtn = document.getElementById('donate');
const donationSection = document.getElementById('donation-section')
const historyBtn = document.getElementById('history')
const historySection = document.getElementById('history-section')

const donateNoakhali = document.getElementById('donate_noakhali');
const donateNoakhaliInput = document.getElementById('donate_noakhali_input');
const donateNoakhaliBtn = document.getElementById('donate_noakhali_btn')

const donateFeni = document.getElementById('donate_feni');
const donateFeniInput = document.getElementById('donate_feni_input');
const donateFeniBtn = document.getElementById('donate_feni_btn')

const aidQuota = document.getElementById('aid_quota');
const aidQuotaInput = document.getElementById('aid_quota_input');
const aidQuotaBtn = document.getElementById('aid_quota_btn')

const modal = document.getElementById('my_modal')
const closeModalBtn = document.getElementById('modal_close_btn')


// setting initial values
let totalAmountValue = 970000;
let donateNoakhaliValue = 10000;
let donateFeniValue = 8000;
let aidQuotaValue = 12000;

totalAmount.innerText = totalAmountValue;
donateNoakhali.innerText = donateNoakhaliValue;
donateFeni.innerText = donateFeniValue;
aidQuota.innerText = aidQuotaValue;



// for updating values
function updateValues(amount, area){
    totalAmountValue -= amount;
    totalAmount.innerText = totalAmountValue;

    if(area === 'noakhali'){
        donateNoakhaliValue += amount;
        donateNoakhali.innerText = donateNoakhaliValue;
    }
    else if(area === 'feni'){
        donateFeniValue += amount;
        donateFeni.innerText = donateFeniValue;
    }
    else if(area === 'protest'){
        aidQuotaValue += amount;
        aidQuota.innerText = aidQuotaValue;
    }
}


// update history
function updateHistory(amount, title){
    const date = new Date();
    const div = document.createElement('div');
    div.setAttribute('class', 'history-item')
    div.innerHTML = `
        <h2>${amount} Take is ${title}</h2>
        <p>${date}</p>
    `
    historySection.appendChild(div);
}

// handling donation
function handleDonation(inputElement, area, description){
    const amount = inputElement.value;

    if(amount <= 0 || isNaN(amount) === true){
        alert('Please enter a valid donation amount');
        return ;
    }
    const donationAmount = parseInt(amount)
    updateValues(donationAmount, area)
    handleModals();
    updateHistory(donationAmount, description)
    inputElement.value = ''
}

// add even listener for noakhali
donateNoakhaliBtn.addEventListener('click', (e) => {
    e.preventDefault()
    handleDonation(donateNoakhaliInput, 'noakhali', 'Donated for flood relief in Noakhali, Bangladesh')        
})

// add even listener for feni
donateFeniBtn.addEventListener('click', (e)=>{
    
    e.preventDefault()
    handleDonation(donateFeniInput, 'feni', 'Donated for flood relief in Feni, Bangladesh') 
})

// add even listener for aid quota
aidQuotaBtn.addEventListener('click', (e)=> {
    
    e.preventDefault();
    handleDonation(aidQuotaInput, 'protest', 'Aid for injured in the Quota Movement') 
})

// handling modals
const handleModals = () => modal.showModal()

// toggling donate and history button

historyBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden')
    
    donateBtn.classList.remove('btn-custom');
    donateBtn.classList.add('btn-custom-2');

    historyBtn.classList.add('btn-custom')
    historyBtn.classList.remove('btn-custom-2')

})


donateBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    historySection.classList.add('hidden')
    donationSection.classList.remove('hidden');

    historyBtn.classList.remove('btn-custom')
    historyBtn.classList.add('btn-custom-2')

    donateBtn.classList.remove('btn-custom-2');
    donateBtn.classList.add('btn-custom');

})