import React, {useState} from 'react';

function Lista(){
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== ''){
            setTarefas([...tarefas, novaTarefa]);
            setNovaTarefa('');
        }
    };

    const removerTarefa = (index) => {
        const novasTarefas = [...tarefas];
            novasTarefas.splice(index, 1);
            setTarefas(novasTarefas);
    };

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} placeholder='Adicione uma nova tarefa'/>
            <button onClick={adicionarTarefa}>Adicionar</button>
            <ol>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>
                        {tarefa}{' '}
                        <button onClick={() => removerTarefa(index)}>x</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Lista;

