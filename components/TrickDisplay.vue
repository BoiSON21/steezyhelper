<template>
    <div class="trick-display">
      <div class="trick-selected">Your trick: 
        <div class="trick-name"> {{ Object.keys(trick).length > 0? trick.name : "" }} </div>
      </div>
      <p>{{ Object.keys(trick).length > 0? trick.description : "" }}</p>
      <p>{{ Object.keys(trick).length > 0? "Level: " + trick.level : "" }}</p>
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

<style>
.trick-display {
    text-align: center;
    font-size: 10pt;
    margin: 0px !important;
}

.trick-selected {
    font-size: 16pt;
    margin: 0px !important;
}

.trick-name {
    font-size: 20pt;
    background: var(--sh-button-primary-bg);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>