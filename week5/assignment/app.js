// 1. js 파일에서 접근해야하는 html dom 요소들 선언하기
const myHandText = document.getElementById('my-hand-text');
const myHandIcon = document.getElementById('my-hand-icon');

const computerText = document.getElementById('computer-hand-text');
const computerIcon = document.getElementById('computer-hand-icon');

const result = document.getElementById('display-result');

const rockBtn = document.getElementById('rock')
const scissorsBtn = document.getElementById('scissors')
const paperBtn = document.getElementById('paper')

//리셋버튼, 점수 계산 함수에 필요한 변수
const resetBtn = document.getElementById("reset-button");

const myScore = document.getElementById("my-score");
const computerScore = document.getElementById("computer-score");

const darkBtn = document.getElementById("theme-button")

const bodyColor = document.getElementById("body-color")
const contentColor = document.getElementById("contents-wrapper")
const rockBorder = document.getElementById("rock")
const scissorBorder = document.getElementById("scissors")
const paperBorder = document.getElementById("paper")


//2. 선언한 dom 요소에 클릭이벤트 주기
rockBtn.addEventListener('click', displayMyChoice);
scissorsBtn.addEventListener('click', displayMyChoice);
paperBtn.addEventListener('click', displayMyChoice);


//3. 함수가 실행될 때, 이벤트가 발생한 dom 객체에 접근하기(e.target)
function displayMyChoice(e){
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target;

    //4)-1 innerHTML 실습할 때 typeof 사용해서 객체 타입 보여주기
    // console.log(clickedBtn);
    // console.log(clickedIcon);

    //4. innerHTML, innerText 실습
    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon.className;

    startGame(clickedBtn);  
}

function getComChoice(){
    //배열의 [0]에는 text, [1]에는 className
    const randomValue = {
        0: ["rock", "fa-regular fa-hand-back-fist"],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2: ["paper", "fa-regular fa-hand"],
    };

    const randomIndex=Math.floor(Math.random()*3);
    //Math.random : 0과 1 사이의 난수를 생성
    //Math.floor : 소수점 이하 버림

    return randomValue[randomIndex];
}

function displayComChoice(result){
    computerText.innerText = result[0];
    computerIcon.className = result[1];

    console.log(computerIcon.className);

}

function calculateScore() {
    if (result.innerText == "win") {
        myScore.innerText = parseInt(myScore.innerText) + 3;
    }
    else if (result.innerText == "lose") {
            computerScore.innerText = parseInt(computerScore.innerText) + 3;
        }
    else {
        myScore.innerText = parseInt(myScore.innerText) + 1;
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
    }
    console.log(result);
}


function startGame(myChoice) {
    let resultArr = getComChoice();
    let comChoiceText = resultArr[0];
    
    switch (myChoice[0]+comChoiceText[0][0]){
        case "rs":
        case 'sp':
        case 'pr':
            result.innerText="win";
            break;
        
        case "rr":
        case 'ss':
        case 'pp':
            result.innerText="tie";
            break;
        
        case "rp":
        case "sr":
        case "ps":
            result.innerText="lose";
            break;
    }
    displayComChoice(resultArr);
    calculateScore();
}


/*여기서부터 과제
리셋버튼 만들어서 점수 초기화 시키기랑 결과에 따른 점수 표시하기*/
resetBtn.addEventListener("click", resetScore);

function resetScore(e) {
    myScore.innerText = 0;
    computerScore.innerText = 0;
    result.innerText = " "
}

darkBtn.addEventListener("click", darkTheme);

function darkTheme(e) {
    bodyColor.style.backgroundColor = "black";
    contentColor.style.backgroundColor = "black";
    bodyColor.style.color = "white";
    contentColor.style.border = "white 4px solid";
    rockBorder.style.border = "white 4px solid";
    scissorBorder.style.border = "white 4px solid";
    paperBorder.style.border = "white 4px solid";
    rockBorder.style.borderRadius = "50%";
    scissorBorder.style.borderRadius = "50%";
    paperBorder.style.borderRadius = "50%";
}
















