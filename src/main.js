// selecting elements
const totalAmount = document.getElementById('total');

const donateBtn = document.getElementById('donate');
const historyBtn = document.getElementById('history')
const donationSection = document.getElementById('donation-section')
const historySection = document.getElementById('history-section')

const donateBtns = document.querySelectorAll('.donate-btn');
const donateInputs = document.querySelectorAll('.donate-input');

const donateNoakhali = document.getElementById('donate_noakhali');
const donateFeni = document.getElementById('donate_feni');
const aidQuota = document.getElementById('aid_quota');

const modal = document.getElementById('my_modal')

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
function updateHistory(amount, area){
    const date = new Date();
    const div = document.createElement('div');
    div.setAttribute('class', 'history-item')
    div.innerHTML = `
        <h2>${amount} Take is Donated for ${area}</h2>
        <p>${date}</p>
    `
    historySection.appendChild(div);
}

donateBtns.forEach((btn, index) => {
    
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const amount = donateInputs[index].value

        if(amount <= 0 || isNaN(amount)){
            alert("Plase enter a valid donation amount!")
        }else{
            const donationAmount = parseInt(amount);
            const area = btn.getAttribute('data-area');
            updateValues(donationAmount, area);
            handleModals();
            updateHistory(donationAmount, area);
            donateInputs[index].value = ''

        }       
    })
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