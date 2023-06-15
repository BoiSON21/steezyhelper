<template>
    <div class="content trick">
      <p class="trick-name">Your trick: {{ Object.keys(trick).length > 0? trick.name : "" }}</p>
      <p>Description: {{ Object.keys(trick).length > 0? trick.description : "" }}</p>
      <p>Level: {{ Object.keys(trick).length > 0? trick.level : "" }}</p>
    </div>
</template>

<script lang="ts">
import { Trick } from '~/types/types';
import { PropType } from 'vue';

export default {
props: {
    trick: {
        type: Object as PropType<Trick>,
        default: {} as Trick
    }
}
}
</script>