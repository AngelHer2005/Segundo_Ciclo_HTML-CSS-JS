import subprocess

texto = """El poema se titula 'Maravillas en el Reino de los Cuentos'...
En el reino de cuentos, los personajes nos saludan,.
Cenicienta, Caperucita, en el bosque se escuchan.
El dragón feroz, el príncipe valiente,.
en este reino mágico, todo es emocionante y entretenido.
...
Los cuentos de hadas y fábulas, a la hora de dormir nos llaman,.
en este mundo de sueños, nuestra imaginación se dispara."""

import pyttsx3
engine = pyttsx3.init()
voz=engine.getProperty("voices")
engine.setProperty("voice",voz[0].id)
engine.save_to_file(texto, '5,4.mp3')
engine.runAndWait()

subprocess.run(['ffmpeg', '-i', '5,4.mp3', 'output.mp4'])