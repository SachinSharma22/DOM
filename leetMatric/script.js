document.addEventListener('DOMContentLoaded', function() {

    const searchButton = document.getElementById('search-btn');
    const userNameInput = document.getElementById('user-input');
    const statsContainer = document.querySelector('.stats-container');
    const easyProgressCircle = document.querySelector('.easy-progress');
    const mediumProgressCircle = document.querySelector('.medium-progress');
    const hardProgressCircle = document.querySelector('.hard-progress');

    const easyLabel = document.getElementById('easy-label');
    const mediumLabel = document.getElementById('medium-label');
    const hardLabel = document.getElementById('hard-label');
    const cardStatesContainer = document.querySelector('.stats-cards');


    // Return true or false based on a regex
    function validateUsername(username) {
        if(username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9]{3,16}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("Invalid Username");
        }
        return isMatching;

    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`
        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("unable to fetch the User details");
            }
            const parseData = await response.json();
            console.log("Logging Data: ", parseData);


            displayUserData(parseData);
        }
        catch(errror){
            statsContainer.innerHTML = `<p>No data Found</p>`
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }
    

    function updateProgress(solved, total, label, circle) {
        const progresDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progresDegree}%`);
        label.textContent = `${solved}/ ${total}`;
    }

    function displayUserData(parseData) {
        const totalQues = parseData.data.allQuestionCound[0].count;
        const totalEasyQues = parseData.data.allQuestionCound[1].count;
        const totalMediumQues = parseData.data.allQuestionCound[2].count;
        const totalHardQues = parseData.data.allQuestionCound[3].count;

        const solvedTotalQues = parseData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parseData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = parseData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = parseData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);
    }

    searchButton.addEventListener('click', function() {
        const userName = userNameInput.value;
        console.log("logging username: " , userName);
        if(validateUsername(userName)) {
            fetchUserDetails(userName);
        }
    })

})