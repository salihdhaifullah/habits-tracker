<template>
    <input 
        ref="inputRef" 
        class="h-[78px] w-[108px] text-center rounded-md outline-light-onPrimaryContainer" 
        :value="props.value"
        @click="(e) => (e.target as HTMLInputElement).value = ''"
        @blur="(e) => (e.target as HTMLInputElement).value = props.value.toString()"
        type="number" 
        @input="(e) => onChange(e as InputEvent)" @keydown="(e) => handleKeyDown(e)" :class="props.class"
        :min="props.min" 
        :max="props.max"
        @focus="(e) => props.focus && props.focus(e)" 
        />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface INumberFiledProps {
    value: number;
    min?: number;
    max?: number;
    class?: string;
    allowFloat?: boolean;
    focus?: (e: FocusEvent) => void;
}

const inputRef = ref<HTMLInputElement | null>(null);
const props = defineProps<INumberFiledProps>()
const emit = defineEmits(['update-value']);


const setValue = (n: number) => {
    emit("update-value", n)
    inputRef.value!.value = n.toString()
}

const onChange = (e: InputEvent) => {
    const newValue = Number();

    if (e.inputType === 'insertText' && e.data !== null) {
        const allowedDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (props.allowFloat) allowedDigits.push(".");

        if (!allowedDigits.includes(e.data)) {
            inputRef.value!.value = props.value.toString();
            return;
        }        
    } 

    if (inputRef.value!.value !== '') (props.min !== undefined || props.max !== undefined) ? enForceMinMax() : setValue(newValue);
}


const enForceMinMax = () => {
    const input = inputRef.value!;
    let newValue = Number(input.value);

    if (props.max !== undefined && newValue > props.max) newValue = props.value;
    else if (props.min !== undefined && newValue < props.min) newValue = props.value;

    setValue(newValue);
}


const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown" && (props.min !== undefined && props.max !== undefined)) {
        e.preventDefault();
        handleKeys(e.key === "ArrowUp", props.min!, props.max!)
    }
}

const handleKeys = (isUp: boolean, min: number, max: number) => {
    if (isUp) {
        if (props.value === max) setValue(min);
        else setValue(props.value + 1)
    } else {
        if (props.value === min) setValue(max)
        else setValue(props.value - 1)
    }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>