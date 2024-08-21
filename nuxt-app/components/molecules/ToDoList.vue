<script setup>
import { ref, onMounted } from 'vue';

const newTask = ref('');
const tasks = ref([]);

// Voeg een taak toe
function addTask() {
  if (newTask.value.trim() === '') {
    alert('You must write something!');
    return;
  }

  tasks.value.push({ text: newTask.value, checked: false });
  newTask.value = '';
  saveData();
}

// Schakel de 'checked' status van een taak
function toggleTask(index) {
  tasks.value[index].checked = !tasks.value[index].checked;
  saveData();
}

// Verwijder een taak
function removeTask(index) {
  tasks.value.splice(index, 1);
  saveData();
}

// Sla de taken op in de localStorage
function saveData() {
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
}

// Laad de taken uit de localStorage
function loadData() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks);
  }
}

// Laad taken bij het opstarten van de component
onMounted(() => {
  loadData();
});
</script>

<template>
  <div class="container">
    <div class="todo-app">
      <div class="row">
        <input
            v-model="newTask"
            @keyup.enter="addTask"
            type="text"
            placeholder="Add your text"
        />
        <button @click="addTask">add</button>
      </div>
      <ul>
        <li
            v-for="(task, index) in tasks"
            :key="index"
            :class="{ checked: task.checked }"
            @click="toggleTask(index)"
        >
          {{ task.text }}
          <span @click.stop="removeTask(index)">×</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.todo-app {
  width: 100%;
  max-width: 540px;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 2rem;
}


.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #edeef0;
  border-radius: 30px;
  padding-left: 20px;
  margin-bottom: 25px;
}

input {
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  padding: 10px;
}

button {
  border: 0;
  outline: 0;
  padding: 16px 50px;
  background: #ff5945;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 40px;
}

ul li {
  list-style: none;
  font-size: 17px;
  padding: 12px 8px 12px 50px;
  user-select: none;
  cursor: pointer;
  position: relative;
}

ul li::before {
  content: '';
  position: absolute;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-image: url('/images/unchecked.png');
  top: 12px;
  left: 8px;
}

ul li.checked {
  color: #555;
  text-decoration: line-through;
}

ul li.checked::before {
  background-image: url('/images/checked.png');
}

ul li span {
  position: absolute;
  right: 0;
  top: 5px;
  width: 40px;
  height: 40px;
  font-size: 22px;
  color: #555;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
}

ul li span:hover {
  background: #edeef0;
}

@media (min-width: 64rem) {
  .todo-app {
    margin-top: 4rem;
  }
}
</style>
