<template>
    <div>
        <TrickSelection @trick-calculated="updateTrick" />
        <p>Trust the process <br/> Learning to skate is hard</p>
        <TrickDisplay :trick="calculatedTrick"/>
    </div>
</template>

<script lang="ts">
import TrickDisplay from '~/components/TrickDisplay.vue';
import TrickSelection from '~/components/TrickSelection.vue';
import { Trick } from '~/types/types';

export default {
    components: {
        TrickSelection,
        TrickDisplay
    },
    data() {
    return {
      calculatedTrick: {} as Trick
    };
    },
    methods: {
        updateTrick(trick: Trick) {
        this.calculatedTrick = trick;
        }
    }
}
</script>