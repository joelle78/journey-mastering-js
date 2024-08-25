<script defer setup>
import { ref, onMounted, onUnmounted } from 'vue';

const newTask = ref('');
const tasks = ref([]);

function addTask() {
  if (newTask.value.trim() === '') {
    alert('You must write something!');
    return;
  }

  tasks.value.push({ text: newTask.value, checked: false });
  newTask.value = '';
  saveData();
}

function toggleTask(index) {
  tasks.value[index].checked = !tasks.value[index].checked;
  saveData();
}

function removeTask(index) {
  tasks.value.splice(index, 1);
  saveData();
}

// Sla de taken op in de localStorage
function saveData() {
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
}

function loadData() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks);
  }
}

onMounted(() => {
  loadData();
});

onUnmounted(() => {
  saveData();
});
</script>


<template>
  <div class="container">
    <div class="todo-app" aria-label="todo-list-app">
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
  background: var(--yellow, #F0DC55);
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
  color: var(--grey, #C5C5C5);
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
  color: var(--grey, #C5C5C5);
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
}

ul li span:hover {
  background: #ffffff;
}

@media (min-width: 64rem) {
  .todo-app {
    margin-top: 4rem;
  }
}
</style>
