<script setup lang="ts">
import { ref } from 'vue';

const submit = (e: Event) => {
    console.log(e)
    console.log(formData)
}

const formData = ref({
    title: '',
    start: '',
    end: '',
    points: 1,
    repeat: [],
    icon: '',
    description: '',
})

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const icons = ['icon1', 'icon2', 'icon3'];
</script>

<template>
    <div class="container mx-auto p-4">
        <form @submit.prevent="submit" class="space-y-4">
            <!-- Title -->
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" v-model="formData.title" id="title"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required />
            </div>

            <!-- Start Time -->
            <div>
                <label for="start" class="block text-sm font-medium text-gray-700">Start Time</label>
                <input type="time" v-model="formData.start" id="start"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required />
            </div>

            <!-- End Time -->
            <div>
                <label for="end" class="block text-sm font-medium text-gray-700">End Time</label>
                <input type="time" v-model="formData.end" id="end"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required />
            </div>

            <!-- Points -->
            <div>
                <label for="points" class="block text-sm font-medium text-gray-700">Points</label>
                <input type="number" v-model="formData.points" id="points" min="1" max="100"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required />
            </div>

            <!-- Repeat (Multi-select) -->
            <div>
                <label for="repeat" class="block text-sm font-medium text-gray-700">Repeat</label>
                <select v-model="formData.repeat" id="repeat" multiple
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option v-for="day in weekDays" :key="day" :value="day">{{ day }}</option>
                </select>
            </div>

            <!-- Icon -->
            <div>
                <label for="icon" class="block text-sm font-medium text-gray-700">Icon</label>
                <select v-model="formData.icon" id="icon"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option v-for="icon in icons" :key="icon" :value="icon">{{ icon }}</option>
                </select>
            </div>

            <!-- Description -->
            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <textarea v-model="formData.description" id="description" rows="3"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>

            <!-- Submit Button -->
            <div>
                <button type="submit"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Submit</button>
            </div>
        </form>
    </div>
</template>