- am incercat sa tin componenta App cat mai curata, aceasta returneaza o singura instanta a aplicatiei (TodoApp)
- componenta TodoApp controleaza state-ul celorlalte componente => va randa un TodoForm si un TodoList (aceasta va contine itemele listei - TodoItem)
- am folosit Material UI pentru grid si componente
- am folosit localStorage pentru a salva todo-urile

Schema componente:

- App
  - TodoApp
    - TodoForm
    - EditTodoForm
    - TodoList
      -Todo

Aplicatia are 6 componente: 
    - App: componenta principala, pe care am mentinut-o cat mai simpla - aceasta randeaza componenta TodoApp 
    - TodoApp: in aceasta componenta am definit toate metodele pe care le-am pasat prin intermediul props celorlalte componente 
    - TodoList: aceasta componenta randeaza o lista cu toate todo-urile (am definit o functie care parcurge toate todo-urile din localStorage si le randeaza) 
    - TodoForm: aceasta componenta randeaza un form in urma a carui submit adauga un nou todo
    - EditTodoForm
    - Todo
