<template>
    <div class="multiselect">
        <p>{{ label }}</p>
        <el-select
            :model-value="value"
            @update:modelValue="$emit('update:value', $event)"
            multiple
            collapse-tags
            collapse-tags-tooltip
            placeholder="select"
        >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({
    value: {
        type: Array,
        required: true
    },
    options: {
        type: Array as () => { value: string, label: string }[],
        required: true
    },
    label: {
        type: String,
        required: true
    }
});

</script>