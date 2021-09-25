<template>
    <div>
        <div class="site-header h-16">
            <div class="container mx-auto md:container md:mx-auto px-4 h-full">
                <div class="logo-block flex justify-center items-center h-full">
                    <LottoLogo />
                </div>
            </div>
        </div>
        <div class="head-space h-16"></div>
    </div>
</template>

<style lang="scss" scoped>
    .site-header{
        background-color: var(--primary-color);
        position: fixed;
        top: 0;
        width: 100%;
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
    }
</style>

<script>
import LottoLogo from './LottoLogo.vue'
export default {
  components: { LottoLogo },
}
</script>
