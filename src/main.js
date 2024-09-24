// selecting elements
const header = document.getElementById('header');
const nav = document.getElementById('nav');

const totalAmount = document.getElementById('total');
const donateBtn = document.getElementById('donate');
const historyBtn = document.getElementById('history')

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



// add blur for sticky 
if (window.scrollY > 100) {
        header.classList.add('backdrop-blur-md', 'bg-opacity-50'); 
    } else {
        header.classList.remove('backdrop-blur-md', 'bg-opacity-50');
}


// setting initial values
let totalAmountValue = 6500;
let donateNoakhaliValue = 1500;
let donateFeniValue = 800;
let aidQuotaValue = 1200;

totalAmount.innerText = totalAmountValue;
donateNoakhali.innerText = donateNoakhaliValue;
donateFeni.innerText = donateFeniValue;
aidQuota.innerText = aidQuotaValue;


// for updating values
function updateValues(amount, area){
    totalAmountValue -= amount;
    totalAmount.innerText = totalAmountValue;

    if(area === 'noakhali'){
        donateNoakhaliValue += amount
        donateNoakhali.innerText = donateNoakhaliValue
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


// handling modals
const handleModals = () => modal.showModal()


// add even listener for noakhali
donateNoakhaliBtn.addEventListener('click', (e) => {

    e.preventDefault()
    const donationAmount = parseInt(donateNoakhaliInput.value);

    if(donationAmount > 0){
        updateValues(donationAmount, 'noakhali')
        handleModals()
        donateNoakhaliInput.value = '';
        
    }else{
        alert('Please enter a valid donation amount')
    }
})

// add even listener for feni
donateFeniBtn.addEventListener('click', (e)=>{
    
    e.preventDefault()
    const donationAmount = parseInt(donateFeniInput.value);

    if(donationAmount > 0){
        updateValues(donationAmount, 'feni');
        donateFeniInput.value = '';
    }else{
        alert('Plese enter a valid donation amount')
    }

})

// add even listener for aid quota
aidQuotaBtn.addEventListener('click', (e)=> {
    
    e.preventDefault();
    const aidAmount = parseInt(aidQuotaInput.value);

    if(aidAmount > 0){
        updateValues(aidAmount, 'protest');
        aidQuotaInput.value = '';
    }else{
        alert("Please enter a valid aid amount")
    }
})