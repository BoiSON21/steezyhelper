<template>
    <div class="cselect">
        <p>{{ label }}</p>
        <Multiselect
            :model-value="value"
            @update:modelValue="$emit('update:value', $event)"
            mode="tags"
            :options="options"
            :close-on-select="false"
            :searchable="true"
            :create-option="true"
            class="multiselect"
        />
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

<script lang="ts">
import Multiselect from '@vueform/multiselect/src/Multiselect';

export default {
    components: {
        Multiselect
    },
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>