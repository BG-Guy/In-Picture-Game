gQuests = [
    {id: 0, opts:['A basketball', 'An orange'], correctOptIndex:1 }, 
    {id: 1, opts:['An apple', 'A watermellon'], correctOptIndex:1 },
    {id: 2, opts:['An avocado', 'A banana'], correctOptIndex:0 },
    {id: 3, opts:['A cherry', 'A parrot'], correctOptIndex:0 }
]

var gCurrQuestId = 0

initGame()
function initGame() {
    renderQuest(gQuests[gCurrQuestId])
}

function renderQuest(quest) {
    var elQuest1 = document.querySelector('.q1')
    var elQuest2 = document.querySelector('.q2')
    var strHTML1 = ''
    var strHTML2 = ''
    var opt1 = quest.opts[0]
    var opt2 = quest.opts[1]
    strHTML1 += `<p id=${0} onclick="checkAnswer(this)">${opt1}</p>`
    strHTML2 += `<p id=${1} onclick="checkAnswer(this)">${opt2}</p>`
    elQuest1.innerHTML = strHTML1
    elQuest2.innerHTML = strHTML2
    document.querySelector('.img').src = `./${gCurrQuestId}.jpg`
    
}

function checkAnswer(elQuest) {
    var clickedAns = parseInt(elQuest.id)
    var correctAns = parseInt(gQuests[gCurrQuestId].correctOptIndex)
    var elMsg = document.querySelector('.msg')
    if (gCurrQuestId === gQuests.length - 1 && clickedAns === correctAns ) {
        elMsg.style = 'visible'

    }
    if (clickedAns === correctAns) {
        gCurrQuestId++
        renderQuest(gQuests[gCurrQuestId])
    }
}

function displsyMsg () {
    
}