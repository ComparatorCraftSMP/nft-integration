let balance = 0;

document.querySelectorAll(".card").forEach(elem => {
    let purchased = false;


    elem.querySelector("button").addEventListener("click", buy);
    elem.querySelector(".purchase-zone").addEventListener("mouseover", buy);

    function buy(event) {
        if (purchased) return;
        purchased = true;
        console.log(elem)

        const button = elem.querySelector("button");

        button.innerText = "Connecting to your MetaMask wallet..."
        button.classList.remove("btn-primary");
        button.classList.add("btn-success");

        const progressContainer = document.createElement("div");
        progressContainer.classList.add("progress");

        const progress = document.createElement("div");
        progress.classList.add("progress-bar", "progress-bar-striped", "progress-bar-animated");

        progressContainer.appendChild(progress);

        elem.appendChild(progressContainer);

        let percent = 0;



        button.disabled = true;
        let intervalId = setInterval(() => {
            if (percent > 200) {
                clearInterval(intervalId);
                progressContainer.remove();
                button.remove();
                const text = document.createElement("h4");
                text.classList.add("card-text", "text-success");
                text.innerText = "You own this NFT!"
                elem.querySelector(".card-body").appendChild(text);

                const toast = document.createElement("div");
                toast.classList.add("toast", "show");
                toast.dataset["autohide"] = true;

                const toastHeader = document.createElement("div");
                toastHeader.classList.add("toast-header");

                toastHeader.innerHTML = `
                    <strong class="me-auto">NFT Purchase Complete</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                `

                const toastBody = document.createElement("div");
                toastBody.classList.add("toast-body");

                balance -= parseFloat(elem.dataset["price"]);

                const par1 = document.createElement("p");

                par1.innerText = `Our blockchain-based machine learning algorithms powered by advanced AI have determined that you want this NFT, so it has been automatically purchased for you.`;

                toastBody.appendChild(par1);

                const par2 = document.createElement("p");

                const label = document.createElement("strong");
                label.innerText = "Current balance:";
                par2.appendChild(label);

                const balanceElem = document.createElement("span");
                balanceElem.classList.add("text-danger");
                balanceElem.innerText = ` ${balance.toFixed(2)} ETH`;
                par2.appendChild(balanceElem);


                toastBody.appendChild(par2);

                toast.appendChild(toastHeader);
                toast.appendChild(toastBody);

                document.querySelector(".toast-container").prepend(toast);

                setTimeout(() => {
                    toast.remove();
                }, 15*1000)
            }
            
            if (percent > 100) {
                button.innerText = "Purchasing..."

            }

            percent += Math.random() * 7.5;
            progress.style.width = `${percent % 100}%`;
        }, 210);
    }
});
