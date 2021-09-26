<template>
        <div class="main-body">
            <div class="container mx-auto px-4 py-8">
                <div class="container loginbox px-4 py-8 flex justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="relative input-component mb-5">
                        <nuxt-img class="img-cover" provider="imagekit" src="/img/img-01.svg" />
                    </div>
                    <div>
                        <div class="s-box head-block p-5 flex flex-col justify-center items-center">
                            <h2 class="text-4xl font-bold text-white text-center">LOGIN</h2>
                            <p class="text-white font-light">เข้าสู่ระบบ</p>
                        </div>
                        <div class="relative h-10 my-4 input-component empty">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                class="h-10 w-full px-2 transition-all bg-transparent border-white rounded-md"
                            />
                            <label for="email" class="absolute p-1 left-2 transition-all loginbox px-1">
                                E-mail
                            </label>
                        </div>
                        <div class="relative h-10 my-4 input-component empty">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                class="h-10 w-full px-2 transition-all bg-transparent border-white rounded-md"
                            />
                            <label for="password" class="absolute p-1 left-2 transition-all loginbox px-1">
                                Password
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
 .main-body{
    background-color: var(--secondary-color);
    min-height: 100vh;
    padding-bottom: 40px;

    .img-cover{
        min-height: 280px;
        height: 100%;
        max-height: 280px;
        width: 80%;
        margin: 0 auto;
    }

    .loginbox{
        background-color: var(--primary-color);
    }
    
    label {
        top: 0%;
        transform: translateY(-50%);
        font-size: 11px;
        color: #ab8af1;
    }
    .empty input:not(:focus) + label {
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
    }
    input:not(:focus) + label {
        color: rgba(255, 255, 255, 0.322);
    }
    input {
        border-width: 1px;
}
    input:focus {
        outline: none;
        border-color: #ab8af1;
}
 }
</style>

<script>
export default {
}
</script>