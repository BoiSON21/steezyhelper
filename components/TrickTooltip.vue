<template>
    <div class="trick-tooltip">
        <el-tooltip
            effect="dark"
            :content="trick.description"
            placement="top">
            <span class="trick-tooltip__title">{{ trick.name }}</span>
        </el-tooltip>
    </div>
</template>

<script lang="ts">
import { Trick } from '~/types/types';

export default {
    props: {
        trick: {
            type: Object as PropType<Trick>,
            default: {} as Trick
        }
    }
}
</script>

<style scoped>
.trick-tooltip {
  display: inline-block;
}

.trick-tooltip__title {
    background-color: var(--sh-button-primary-bg);
    color: var(--sh-optional-ft-color);
    padding: 4px 8px;
    border-radius: 10px;
}
</style>