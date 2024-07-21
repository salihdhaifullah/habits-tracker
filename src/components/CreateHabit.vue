<script setup lang="ts">
import { ref } from 'vue';
import { UtilsService } from '../services/utils.service';
import { icons } from '../services/db.service';
import Icon from './martialDesign/Icon.vue';
import { CreateHabit, ICreateHabit } from '../services/habit.service';
import TimePicker from './martialDesign/TimePicker/TimePicker.vue';

const props = defineProps<{closeSheet: () => void}>();
const defaultData: ICreateHabit = {
    title: '',
    start: '',
    end: '',
    points: 1,
    repeat: [],
    icon: ''
}

const submit = async () => {
    await CreateHabit(JSON.parse(JSON.stringify(formData.value)));
    props.closeSheet();
    console.log(defaultData)
    formData.value = JSON.parse(JSON.stringify(defaultData));
}

const formData = ref<ICreateHabit>(JSON.parse(JSON.stringify(defaultData)))
</script>

<template>
    <div class="container mx-auto p-4">
        <form @submit.prevent="submit" class="space-y-2">
            <!-- Title -->
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" v-model="formData.title" id="title"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required />
            </div>

            <TimePicker @change="(v) => formData.start = v" :value="formData.start" :required="true" label="Start Time" />

            <TimePicker @change="(v) => formData.end = v" :value="formData.end" :required="true" label="End Time" />

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
                <select v-model="formData.repeat" id="repeat" multiple required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option v-for="day in UtilsService.weekDays" :key="day" :value="day">{{ day.toString() }}</option>
                </select>
            </div>

            <!-- Icon -->
            <div>
                <label for="icon" class="block text-sm font-medium text-gray-700">Icon</label>
                <select v-model="formData.icon" id="icon" required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option v-for="icon in icons" :key="icon" :value="icon">
                        <Icon>{{ icon }}</Icon>
                    </option>
                </select>
            </div>

            <!-- Submit Button -->
            <div>
                <button type="submit"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Submit</button>
            </div>
        </form>
    </div>
</template>