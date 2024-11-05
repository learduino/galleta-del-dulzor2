function pregunta1 () {
    story.printCharacterText("¿quieres jugar?")
    story.showPlayerChoices("sí", "no")
    if (story.checkLastAnswer("sí")) {
    	
    } else if (story.checkLastAnswer("no")) {
        pregunta1()
    }
}
function pregunta2 () {
    story.printCharacterText("¿que prefieres?")
    story.showPlayerChoices("sí", "no")
    if (story.checkLastAnswer("sí")) {
    	
    } else if (story.checkLastAnswer("no")) {
        pregunta1()
    }
}
function pregunta3 () {
	
}
info.setScore(0)
info.setLife(3)
pregunta1()
