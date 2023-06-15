<template>
    <div>
        <Header @trick-calculated="updateTrick" />
        <slot />
        <TrickDisplay :trick="calculatedTrick" />
        <Footer />
    </div>
</template>

<script lang="ts">
import Header from '~/components/Header.vue';
import TrickDisplay from '~/components/TrickDisplay.vue';
import { Trick } from '~/types/types';

export default {
    components: {
        Header,
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
