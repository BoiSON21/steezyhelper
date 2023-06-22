<template>
    <div>
        <Header />
        <TrickSelection @trick-calculated="updateTrick" />
        <slot />
        <TrickDisplay :trick="calculatedTrick"/>
        <Footer />
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

<style>
.content {
    text-align: center;
    font-size: 10pt;
    margin: 0px !important;
}
</style>