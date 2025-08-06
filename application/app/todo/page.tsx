'use client'

import { useState } from 'react'

type Task = {
    id: number
    text: string
}

export default function TodoPage() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [input, setInput] = useState('')

    const addTask = () => {
        if (!input.trim()) return
        const newTask: Task = {
            id: Date.now(),
            text: input.trim(),
        }
        setTasks([...tasks, newTask])
        setInput('')
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <main style={{ padding: '2rem' }}>
            <h1>ToDoリスト</h1>

            <div style={{ marginBottom: '1rem' }}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="タスクを入力"
                />
                <button onClick={addTask} style={{ marginLeft: '0.5rem' }}>追加</button>
            </div>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ marginBottom: '0.5rem' }}>
                        {task.text}
                        <button
                            onClick={() => deleteTask(task.id)}
                            style={{ marginLeft: '1rem' }}
                        >
                            削除
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    )
}