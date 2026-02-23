
let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');

const allCard = document.getElementById('allCards');
const main = document.querySelector('main')


const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

function calculateCount() {
    total.innerText = allCard.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedList.innerText = rejectedList.length;

}
calculateCount();

function toggle(id){
    allBtn.classList.remove('bg-blue-500' , 'text-white');
    interviewBtn.classList.remove('bg-blue-500' , 'text-white');
    rejectedBtn.classList.remove('bg-blue-500' , 'text-white');

    allBtn.classList.add('bg-white' , 'text-gray-500');
    interviewBtn.classList.add('bg-white' , 'text-gray-500');
    rejectedBtn.classList.add('bg-white' , 'text-gray-500');

    const selected = document.getElementById(id);

    selected.classList.remove('bg-white' , 'text-gray-500');
    selected.classList.add('bg-blue-500' , 'text-white');
}