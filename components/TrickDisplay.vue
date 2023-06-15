<template>
    <div class="content trick">
      <div class="selected-trick">Your trick: 
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