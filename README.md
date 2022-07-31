# To-Do List ignite 📌

## Entendimento sobre as funcionalidades 📝

* Adicionar tarefas
* Checar tarefas concluídas 
* Deletar tarefas

![Sem Título](https://user-images.githubusercontent.com/65836646/182036869-62d8aa04-dce2-4998-9343-54ffc6843bda.png)

---
### 📝handleInputValue:

```js
  const [inputValue, setInputValue] = useState("");
  const [taskValue, setTaskValue] = useState<Array<inputProps>>([]);

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
```
A Função HandleinputValue está responsável por acessar o valor digitado pelo usuário no input(target). Com o valor digitado no input,
precisamos criar a estrutura dos nossos dados para popularmos a `taskValue`

### 📝handleAddTaskValue:

```js
 const handleAddTaskValue = (event: FormEvent) => {
    event.preventDefault();
    const randomId = Math.random();

    if (!inputValue) {
      return;
    }

    setTaskValue([
      ...taskValue,
      { name: inputValue, id: randomId, isChecked: false },
    ]);

    setInputValue("");
  };
```

A partir desse momento, a função handleAddTaskValue será responsável pela montagem do array de tarefas. Cada tarefa será um objeto dentro do array.
Começando  pela primeira funcionalidade da função, notamos que precisamos utilizar o `event.preventDefault() ` para evitar que a página recarregue quando dermos
o envio do formulário.

Em sequencia, temos uma forma *não tão recomendada* de gerar id randômicos para que cada objeto possua um id único. Também temos uma verificação 
de se algo foi digitado no input, se não, não iremos prosseguir com a funcionalidade.

Uma das partes mais interessantes aqui, é o `setTaskValue` , que basicamente está recebendo todos os elementos que já existem no array([...taskValue]) e está 
passando um novo objeto para popular os nossos dados.

Um outro detalhe é o `setInputValue("")` que apenas está limpando o input depois que o valor é submetido.

### 📝handleIsChecked:

```js

  const handleIsChecked = (id: number) => {
    const mappedList = taskValue.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: !task.isChecked };
      } else {
        return task;
      }
    });

    setTaskValue(mappedList);
  };
  
  ```
  Essa função é responsável por mapear a lista de tarefas e retornar todas as tarefas, porém com a key isChecked de *id correspondente* alterada para o valor booleano contrário (true ou false)
  Essa função esta sendo chamada no onClick de cada tarefa renderizada condicionalmente em tela.
  
### 📝handleAmountOfChecked: 

```js
const handleAmountOfChecked = () => {
    const filterCompleted = taskValue.filter((task) => {
      if (task.isChecked) {
        return task;
      }
    });

    setIsCompleted(filterCompleted.length);
  };

  useEffect(() => {
    handleAmountOfChecked();
  }, [taskValue]);
  ```
  
  Essa funcionalidade é responsável por trazer a quantidade de elementos checados(concluídos). Estamos filtrando todos os elementos, cuja key isChecked está como true.
  Estamos retornando esses elementos para o filtro e verificando a quantidade(length) de elementos desse filtro.
  
  
  ### 📝handleDeleteTask:
  
  ```js
   const handleDeleteTask = (id: number) => {
    const taskWithoutDeletedOne = taskValue.filter((task) => {
      if (task.id !== id) {
        return task;
      }
    });

    setTaskValue(taskWithoutDeletedOne);
  };
  ````
  Por fim, para deletar uma tarefa, vamos utilizar o filtro para retornar todas as tarefas que sobraram no array, depois do onClick na tarefa específica(a que deverá ser deletada), através do id
  
