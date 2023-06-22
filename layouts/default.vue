<template>
    <div>
        <Header />
        <div class="content">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<style>
.content {
    text-align: center;
    font-size: 10pt;
    margin: 0px !important;
}
</style>