<template>
    <Modal :is-open="context.isOpen" :handle-close="() => context.isOpen = false">
        <div
            class="flex flex-col w-fit p-4 bg-light-surfaceContainerHigh select-none gap-6 text-start rounded-lg shadow-md-elevated h-fit">
            <h1 class="text-light-onSurfaceVariant text-xl">Enter time</h1>
            <div class="flex w-full justify-center items-center flex-col gap-16">
                <NumberClock />
                <Clock />
            </div>
        </div>
    </Modal>

    <label :for="id" class="block text-sm font-medium text-gray-700">{{ props.label}}</label>
    <input 
        type="time" @click="() => context.isOpen = true" :id="id" :required="props.required" :value="props.value"
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        @change="(e) => HandleChange((e.target as HTMLInputElement).value)" 
        />
</template>

<script lang="ts" setup>
import { ulid } from 'ulid';
import Modal from '../Modal.vue';
import Clock from './Clock.vue';
import NumberClock from './NumberClock.vue';
import context from './state';

interface ITimePickerProps {
    label: string;
    required?: boolean;
    value: string;
}

const id = ulid()
const props = defineProps<ITimePickerProps>()
const emit = defineEmits<{ change: [string] }>()

const HandleChange = (s: string) => {
    emit("change", s)
}
</script>
