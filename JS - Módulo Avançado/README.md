# Madruga

O que estudar... Javascript Módulo Avançado.

**Quantas horas tenho?** 3h

**Horas de vídeo aulas totais?** 1h 25m

- [x]  Aula 1
- [x]  Aula 2  Strict Mode

    No JS, é possível declarar uma variável igual py, largadona, sem 'var'. Se declarada laragadona, ela irá pertencer ao escopo global, mesmo se declarada em um escopo local. 

    Pra evitar isso, usamos o "use strict" - fazendo isso, forçamos o programador a declarar a variável. Seja com var, let ou const. 

    ~~Qual diferença então de declarar sem nada e declarar com var?~~ 

- [x]  Aula 3 **bind()**

    No jS, toda função tem o método bind(); 

    Pra que serve? para 'bindar' o this que existe na função. wtf... what do you mean? Veja o código abaixo:

    ```jsx
    const dog = {
        sound: "Au Au",
        speak: genericSpeak
    }

    function genericSpeak(){
        console.log(***this.sound);
    }

    dog.speak() // expected: "Au Au";
    ```

    A função `genericSpeak()` da um console.log em `this.sound`. Ok, o objeto Dog realmente tem um sound, tranquilo. Mas e se a gente executasse sem contexto? (sem o dog) e aí? 

    ```jsx
    genericSpeak(); // expected: undefined;
    ```

    Poxa... queria que eu passasse ali como Parâmetro o dog e aí o dog que falaria...

    Então, aí que entra o `bind();`

    ```jsx
    const bindedObject = genericSpeak().bind(dog);
    bindedObject() // expected: Au Au
    ```

    Irá ter como saída Au Au, visto que o objeto dog foi 'bindado' na função `generecSpeak()`, logo, o *`this`* da função, irá se referir ao cachorro, que foi passado como parâmetro no método `bind()`;

- [x]  Aula 4 Arrow Function ⇒

    Pra que serve? Pra tornar as coisas mais fáceis. Simples assim 😂 Não quer usar? Não usa, tá tudo certo. Maaas, tem uns poréns. Primeiro vamos ver a vantagem dela:

    ```jsx
    //Função anonima normal
    const dobro = function (x){
        return x * 2;
    }

    //Com Arrow Funtion () =>
    const dobro = (x) => {
        return x * 2;
    }

    //Simplificando ainda mais
    // Caso tenha só um parametro, pode simplificar dessa forma
    const dobro = x => x * 2;

    //Sem Parametro
    const dobro = () => {
        //something here
        //something here too...
    }
    ```

    Viu como simplifica? 

    Agora o porém da Arrow Function: O this não funciona pra ela. Não importa quem seja, o `this` não vai funcionar. Nem o `this`, nem o`bind()`, pois o bind vai 'bindar' alguém pro this, vai dar contexto pra ele. Mas, na arrow function, o this SEMPRE vai ser o WINDOW, SEMPRE! Já a função anônima normal, nop, o `this` **functiona perfeitamente, consequentemente o `bind()` também 🙂

- [x]  Aula 5 Callback

    Pra que serve? Bem, aqui foi introduzido o conceito de uma função receber uma função como parâmetro.  OK, e ai? **Bom, o callback é uma função passada como parametro que a gente quer pra ser executada depois de algo acontecer.** Exemplo: Após inserir um novo usuário, eu quero Listar os usuários. Porém, quero listar os usuários só depois que o usuário for inserido com sucesso, e, na web, sei que as coisas não funfam tão rápidas assim, ou seja, até inserir, pode ser que a funcao de listar acabe não listando o novo usuário cadastrado. Ou seja, pra garantir que isso não aconteça, o callback é utilziado.

    [Callback](https://pt.wikipedia.org/wiki/Callback)

- [x]  Aula 6 [Promises](https://github.com/Rayllanderson/treinamento-js/blob/master/JS%20-%20M%C3%B3dulo%20Avan%C3%A7ado/promise.js) 

    Pra que serve? a grosso modo, é um callback melhorado! Ao meu entender, é um callback mais sofisticado, com mais segurança e métodos interessantes. Exemplo:

    ```jsx
    const users = ['Felipe', 'Ray', 'João'];

    function print(u){
        console.log(users)
    }

    function add(u){
        let promise = new Promise(function (resolve, reject){
            setTimeout(()=>{
                users.push(u)
                let sucess = true;
                if(sucess){
                    resolve(); // executando resolve
                }else{
                    reject({msg : "Erro de qualquer coisa"}) //exec. reject passando obj
                }
            }, 2000);
        })
        return promise;
    }

    //Funcionamento de uma promise:
    add('João Lucas').then(print).catch((e)=>{
        console.log(e.msg) 
    })
    ```

    Ou seja, executando o resolve() significa que deu certo! Executando o reject, não deu. Ainda não sei se o resolve recebe parametros, mas o reject pode receber um objeto ou apenas mensagem mesmo. 

    O funcionamento é bem simples: `doSomething().then(sucessMethod()).catch(failMethod());`

    O then() Ele vai executar o método que a gente deseja executar depois de dar tudo certo (callback).  `then()` só aparece caso o método `resolve()` seja executado.

    O `catch(e)` captura e trata o erro, que pode receber ou não parâmetro.  O parâmetro nesse caso, é o reject, ou seja, o que a gente passou lá na hora do erro. O `catch()` só será executado, caso o método `reject()` seja executado.

- [x]  Aula 7 Async Await

    Pra que serve? Seguindo o flow do callback e promises, faz a mesma coisa, espera algo terminar para fazer a outra tarefa. na real, não sei a diferença real direta ou qual delas se usa no dia a dia.

    ```jsx
    //Funcionamento de uma promise:
    add('João Lucas').then(print).catch((e)=>{
        console.log(e.msg) 
    })

    //Funcionamento de uma função async await
    async function executar(){
        await add('João Lucas');
        print();
    }
    ```

    Temos que colocar o `async` na declaração da função, e então usar o `await` que vai dizer pra esperar a função terminar pra poder executar a próxima.

- [x]  Aula 8 [Filter](https://github.com/Rayllanderson/treinamento-js/blob/master/JS%20-%20M%C3%B3dulo%20Avan%C3%A7ado/filter.js)

    Pra que serve? Simples! é um `forEach()`com uma condição no meio. Se essa condição for true, vai gerar um novo array. É um método que já existe em todo array.

    exemplo:

    ```jsx
    const alunosComMenosDe30 = alunos.filter(function(a){ //função normal
        return a.idade < 30;
    });

    const alunosComMaisDe30 = alunos.filter( a => a.idade > 30); //arrow function
    ```

    Viu? é igual `forEach()` normal. Mas ao contrário do `forEach()`que é void, esse retorna um novo Array com os elementos que passaram na condição.

- [x]  Aula 9 [Map](https://github.com/Rayllanderson/treinamento-js/blob/master/JS%20-%20M%C3%B3dulo%20Avan%C3%A7ado/map.js)

    Pra que serve? Ao contrário do Map do Java em que guarda chave e valor, esse método map() do array aqui no JS vai fazer algo parecido com o `forEach()`.. A diferença é que o `forEach()` vai executar algo.. já o `Map()` vai CRIAR um **NOVO** array com retorno desejado. Like...

    ```jsx
    console.log(alunos.map((a) => {
        return `${a.nome} tem ${a.idade} anos`
    }));

    /*output
    	[
    	  'Ray tem 23 anos',
    	  'Maria tem 22 anos'
    	]
    */
    ```

    Perceba que o output tem '[ ]' ou seja, ele virá em forma de um NOVO objeto, diferente do filter, que apenas filtrava e retornava o mesmo 'esqueleto' do array original.

    Mais sobre...

    - **`[forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)`** — executes a provided function once for each array element.
    - **`[map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)`** — creates a new array with the results of calling a provided function on every element in the calling array.

- [x]  Aula 10 Valor vs Referência

    ```jsx
    let alunoA = {nome: 'João'};
    let alunoB = alunoA;
    alunoB.nome = 'Rafael';

    console.log(alunoA) // expected: 'João'. But was: 'Rafael'
    console.log(alunoB) // expected: 'Rafael'. And was: 'Rafael'
    ```

    Quando algo é atribuído por valor, uma cópia do valor é criada, e passa a ser um novo elemento. Coisas que são atribuídas por valor: tipos primitivos - boolean, number, string...

    Quando é atribuído por referência, ou seja, tudo que é modificado em um, vai ser modificado no outro.  Coisas que são atribuídas por referência: Objetos, Arrays, ...

    Como passar um **Array** por valor? criar uma cópia em vez de passar a referencia?

    `anyArray.slice()` Função que corta o array. Mas se não passar nada, vai trazer o array inteiro.

    `arrayA = [... arrayB];`  outro jeito de fazer a cópia. E como faz 

    E um Objeto, como faz?

    ```jsx
    let alunoA = {nome: 'João'};

    //primeira forma
    let alunoB = Object.assign({}, alunoA);

    //segunda forma
    let alunoB = {... alunoA};

    //não sei se conta, mas consegui desta forma:
    let alunoB = new Object({}, alunoA);
    ```

- [x]  Aula 11 [Reduce](https://github.com/Rayllanderson/treinamento-js/blob/master/JS%20-%20M%C3%B3dulo%20Avan%C3%A7ado/reduce.js)

    Pra que serve? Percorre o Array e gera um valor único. Whaat? Take this:

    ```jsx
    const alunos = [
        novoAluno('Ray', 23),
        novoAluno('José', 35), 
    ];

    const idadeGeralTurma = alunos.reduce((total, a) => { return total + a.idade}, 0)
    ```

    Sacou? através do array, ele vai gerar uma idade geral, vai somar todas as idades e vai retornar numa única variável. 

    `reduce()` recebe a função que vai calcular as paradas, sendo o total o acumulador, e a.idade o valor atual do array, no caso vai ser um loop, então vai ser 23 e 35, a idade dos alunos do array. E o 0 é o index, é de onde parte a contagem. Por exemplo: 0 + 23 + 35 = 58; 

- [x]  Aula 13 [Fetch](https://github.com/Rayllanderson/treinamento-js/blob/master/JS%20-%20M%C3%B3dulo%20Avan%C3%A7ado/fetch.js)

    Pra que serve? Pra consumir uma API. Ele é uma Promise, então tem os métodos `then()` e `catch()`

    ```jsx
    const url = 'api.urlFromAnyAPI.io';

    fetch(url).then((response) => { //reponse = reposta HTTP
        return response.json(); //retornando uma promise
    }).then( (data) => { // then() captura a promise acima
        console.log(data) //imprimindo json da api.
    })
    ```

    Com o JSON da API em mãos, basta agora acessar os atributos normal, como um objeto. `data.nome`, `data.anyOtherAtribute`

- [x]  Aula 14 Try-Catch

    Exatamente igual ao Java. Trata os erros.

    ```jsx
    try{
        doingSomething();
    }catch(err){
        console.log('An error has ocurred. Cause:' + err);
    }
    ```

    E, quase mesma coisa pra lançar exceções:

    ```jsx
    function doSomething(){
        throw "I'm throwing an error";
    }
    ```

    Por sua vez, também possui a função `finally()`, que funciona da mesma forma do Java, ou seja, o que está dentro do bloco, será executado independente de se der erro ou não.

$$FINISH!!! $$

**Pausas máximas:** 7

- [x]  Pausa 1
- [x]  Pausa 2
- [x]  Pausa 3
- [x]  Pausa 4
- [x]  Pausa 5
- [ ]  Pausa 6
- [ ]  Pausa 7
