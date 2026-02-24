let interviewList = [];
let rejectedList = [];
let deletedList = [];
let currentStatus = "all";

let total = document.getElementById("total");
let total2 = document.getElementById("total2");
let interviewCount = document.getElementById("interview");
let rejectedCount = document.getElementById("rejected");

const allCard = document.getElementById("allCards");
const main = document.querySelector("main");
const filter = document.getElementById("filtered-section");
const noCards = document.querySelector(".no-cards");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

function calculateCount() {
    total.innerText = allCard.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    if (currentStatus === "interview-btn") {
        total2.innerText = interviewList.length;
    } else if (currentStatus === "rejected-btn") {
        total2.innerText = rejectedList.length;
    } else {
        total2.innerText = allCard.children.length;
    }
}
calculateCount();

function toggle(id) {
    allBtn.classList.remove("bg-blue-500", "text-white");
    interviewBtn.classList.remove("bg-blue-500", "text-white");
    rejectedBtn.classList.remove("bg-blue-500", "text-white");

    allBtn.classList.add("bg-white", "text-gray-500");
    interviewBtn.classList.add("bg-white", "text-gray-500");
    rejectedBtn.classList.add("bg-white", "text-gray-500");

    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove("bg-white", "text-gray-500");
    selected.classList.add("bg-blue-500", "text-white");

    if (id == "interview-btn") {
        allCard.classList.add("hidden");
        filter.classList.remove("hidden");
        renderInterview();
        checkEmptyState(filter);
    } 
    else if (id == "all-btn") {
        allCard.classList.remove("hidden");
        filter.classList.add("hidden");
        checkEmptyState(allCard);
    } 
    else if (id == "rejected-btn") {
        allCard.classList.add("hidden");
        filter.classList.remove("hidden");
        renderReject();
        checkEmptyState(filter);
    }

    calculateCount();
}

function checkEmptyState(container) {
    if (container.children.length === 0) {
        noCards.classList.remove("hidden");
    } else {
        noCards.classList.add("hidden");
    }
}

main.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-success")) {
        const parenNode = event.target.closest(".infos");
        if (!parenNode) return;

        const companyName = parenNode.querySelector(".company-name").innerText;
        const positionName =
            parenNode.querySelector(".position-name").innerText;
        const positionDetails =
            parenNode.querySelector(".position-details").innerText;
        const positionDescription =
            parenNode.querySelector(".position-des").innerText;
        const status = parenNode.querySelector(".btn-status").innerText;
        parenNode.querySelector(".btn-status").innerText = "INTERVIEW";

        parenNode.querySelector(".btn-status").classList.remove("bg-blue-100");
        parenNode.querySelector(".btn-status").classList.remove("bg-red-200");
        parenNode.querySelector(".btn-status").classList.add("bg-green-200");

        const cardInfo = {
            companyName,
            positionName,
            positionDescription,
            positionDetails,
            status: "INTERVIEW",
        };

        let jobExist = interviewList.find(
            (item) => item.companyName === cardInfo.companyName,
        );
        if (!jobExist) {
            interviewList.push(cardInfo);
        }
        rejectedList = rejectedList.filter(
            (item) => item.companyName != cardInfo.companyName,
        );
        if (currentStatus == "rejected-btn") {
            renderReject();
        }
        calculateCount();
    } else if (event.target.classList.contains("btn-error")) {
        const parenNode = event.target.closest(".infos");
        if (!parenNode) return;

        const companyName = parenNode.querySelector(".company-name").innerText;
        const positionName =
            parenNode.querySelector(".position-name").innerText;
        const positionDetails =
            parenNode.querySelector(".position-details").innerText;
        const positionDescription =
            parenNode.querySelector(".position-des").innerText;
        const status = parenNode.querySelector(".btn-status").innerText;
        parenNode.querySelector(".btn-status").innerText = "REJECTED";

        parenNode.querySelector(".btn-status").classList.remove("bg-green-200");
        parenNode.querySelector(".btn-status").classList.remove("bg-blue-100");
        parenNode.querySelector(".btn-status").classList.add("bg-red-200");

        const cardInfo = {
            companyName,
            positionName,
            positionDescription,
            positionDetails,
            status: "REJECTED",
        };

        let jobExist = rejectedList.find(
            (item) => item.companyName === cardInfo.companyName,
        );
        if (!jobExist) {
            rejectedList.push(cardInfo);
        }
        interviewList = interviewList.filter(
            (item) => item.companyName != cardInfo.companyName,
        );
        if (currentStatus == "interview-btn") {
            renderInterview();
        }
        calculateCount();
    } else if (event.target.classList.contains("btn-delete")) {
        const card = event.target.closest(".bg-white");
        if (!card) return;

        const parenNode = card.querySelector(".infos");
        const companyName = parenNode.querySelector(".company-name").innerText;

        interviewList = interviewList.filter(
            (item) => item.companyName !== companyName,
        );
        rejectedList = rejectedList.filter(
            (item) => item.companyName !== companyName,
        );

        card.remove();

        if (currentStatus === "interview-btn") {
            renderInterview();
            checkEmptyState(filter);
        } else if (currentStatus === "rejected-btn") {
            renderReject();
            checkEmptyState(filter);
        }
        else{
            checkEmptyState(allCard);
        }

        calculateCount();
    }
});

function renderInterview() {
    filter.innerHTML = "";
    for (let inter of interviewList) {
        let div = document.createElement("div");
        div.className = "bg-white w-full flex justify-between p-6 rounded-xl";
        div.innerHTML = `
        <div class="infos left flex-1">
                        <h5 class="company-name text-blue-950 font-semibold text-xl">
                            ${inter.companyName}
                        </h5>
                        <p class=" position-name text-gray-500">${inter.positionName}</p>
                        <br /> 
                        <p class= "position-details text-gray-500">${inter.positionDetails}
                        </p>
                        <br />
                        <div
                            class="badge  mb-2 btn-status bg-green-200 text-blue-950 font-semibold"
                        >
                            ${inter.status}
                        </div>
                        <p class="position-des text-gray-500 mb-5">
                            ${inter.positionDescription}
                        </p>

                        <div class="flex">
                            <button class="btn btn-outline btn-success mr-2">
                                INTERVIEW
                            </button>
                            <button class="btn btn-outline btn-error">
                                REJECTED
                            </button>
                        </div>
                    </div>
                    <div class="right">
                        <button class="btn btn-delete btn-secondary btn-soft rounded-full">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
        `;
        filter.appendChild(div);
    }
    checkEmptyState(filter);
}
function renderReject() {
    filter.innerHTML = "";
    for (let inter of rejectedList) {
        let div = document.createElement("div");
        div.className = "bg-white w-full flex justify-between p-6 rounded-xl";
        div.innerHTML = `
        <div class="infos left flex-1">
                        <h5 class="company-name text-blue-950 font-semibold text-xl">
                            ${inter.companyName}
                        </h5>
                        <p class=" position-name text-gray-500">${inter.positionName}</p>
                        <br /> 
                        <p class= "position-details text-gray-500">${inter.positionDetails}
                        </p>
                        <br />
                        <div
                            class="badge  mb-2 btn-status bg-red-200 text-blue-950 font-semibold"
                        >
                            ${inter.status}
                        </div>
                        <p class="position-des text-gray-500 mb-5">
                            ${inter.positionDescription}
                        </p>

                        <div class="flex">
                            <button class="btn btn-outline btn-success mr-2">
                                INTERVIEW
                            </button>
                            <button class="btn btn-outline btn-error">
                                REJECTED
                            </button>
                        </div>
                    </div>
                    <div class="right">
                        <button class="btn btn-delete btn-secondary btn-soft rounded-full">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
        `;
        filter.appendChild(div);
    }
    checkEmptyState(filter);
}
