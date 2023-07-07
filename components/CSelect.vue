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
            :create-option="false"
            class="multiselect"
        />
    </div>
</template>

<script lang="ts" setup>
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
<style>
.cselect p {
    margin: 20px 0px 5px 0px;
}

.multiselect {
    font-family: "HelveticaNeueBlack", sans-serif !important;
    color: black;
    width: 50vw !important;
}

.multiselect-tag {
    color: var(--sh-optional-ft-color) !important;
    --ms-tag-bg: var(--sh-button-primary-bg) !important;
}

@media (max-width: 768px) {
    .multiselect {
        width: 80vw !important;
        opacity: 1 !important;
    }
}
</style>