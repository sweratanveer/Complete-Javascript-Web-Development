// ===========================
// ATM function start karne ke liye
// ===========================
function startATM() {

    // Correct PIN set kiya
    let correctPin = "1234";

    // Starting balance set kiya
    let balance = 10000;

    // PIN attempts count karne ke liye
    let attempts = 0;

    // Jab tak 3 attempts complete nahi hote, loop chalega
    while (attempts < 3) {

        // User se PIN input lena
        let pin = prompt("Add your pin:");

        // Agar PIN sahi ho
        if (pin === correctPin) {
            alert("Your pin is correct");
            break; // loop exit ho jaye
        } else {
            // Agar PIN galat ho to attempts increase karo
            attempts++;
            alert("PIN Wrong Remaining Attempts: " + (3 - attempts));
        }
    }

    // ⚠️ Agar 3 dafa galat PIN enter ho jaye
    if (attempts === 3) {
        alert("ATM Blocked "); // alert me show karenge, page par nahi
        return; // function stop ho jaye
    }

    //  Menu loop - multiple transactions ke liye
    while (true) {

        //  User ko menu options show karna
        let choice = prompt(
            "Choose the option:\n1. Withdraw\n2. Deposit\n3. Check Balance\n4. Exit"
        );

        switch (choice) {

            //  Agar user withdraw select kare
            case "1":

                // 🖊️ Withdraw amount lena
                let withdrawAmount = Number(prompt("Enter the Amount (Multiple of 500):"));

                //  Check karo amount 500 ka multiple hai ya nahi
                if (withdrawAmount % 500 !== 0) {
                    alert("Amount must be multiple of 500");

                //  Check karo balance se zyada to nahi
                } else if (withdrawAmount > balance) {
                    alert("Insufficient Balance");

                } else {
                    //  Balance se paisa minus karo
                    balance -= withdrawAmount;
                    alert("Withdraw successfull \nCurrent Balance: " + balance);
                }
                break;

            //  Agar user deposit select kare
            case "2":

                //  Deposit amount lena
                let depositAmount = Number(prompt("Enter the amount of deposit:"));

                //  Balance me paisa add karna
                balance += depositAmount;
                alert("Deposit done \nCurrent Balance: " + balance);
                break;

            // Agar user balance check kare
            case "3":
                alert("Your balance is: " + balance);
                break;

            //  Exit option
            case "4":
                alert("Thank You!\nFinal Balance: " + balance);
                console.log("Final Balance:", balance); // console me bhi show
                return; // menu loop exit
              
            //  Invalid input
            default:
                alert("Invalid Option, Try again");
        }
    }
}

//Page load hote hi ATM automatic start ho jaye
window.onload = function() {
    startATM(); // function call
};