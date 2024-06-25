import tkinter as tk
from tkinter import messagebox
from subprocess import Popen, CREATE_NEW_CONSOLE
import time

# Função para iniciar o servidor
def start_server():
    global server_process
    server_process = Popen(["powershell.exe", "Start-Process", "powershell.exe", "-ArgumentList", "'npm run dev'", "-NoNewWindow"], creationflags=CREATE_NEW_CONSOLE)

# Função para mostrar a messagebox e fechar a janela do tkinter
def show_message_and_close():
    messagebox.showinfo("Servidor NPM", "Servidor iniciado...")
    root.destroy()

# Configuração da janela do tkinter
root = tk.Tk()
root.withdraw()  # Esconde a janela principal

# Iniciar o servidor ao iniciar o programa
start_server()

time.sleep(3)
# Mostrar a messagebox e esperar a interação do usuário
show_message_and_close()

# Iniciar o loop da interface gráfica
root.mainloop()
