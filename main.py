def pregunta1():
    story.print_character_text("¿quieres jugar?")
    story.show_player_choices("sí", "no")
    if story.check_last_answer("sí"):
        pass
    elif story.check_last_answer("no"):
        pregunta1()
def pregunta2():
    story.print_character_text("¿?")
    story.show_player_choices("sí", "no")
    if story.check_last_answer("sí"):
        pass
    elif story.check_last_answer("no"):
        pregunta1()
pregunta1()