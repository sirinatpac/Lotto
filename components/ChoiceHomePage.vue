<template>
    <div class="main-body">
        <div class="container mx-auto px-4">
            <div class="s-box head-block p-5 flex flex-col justify-center items-center">
                <h2 class="text-4xl font-bold text-white text-center">ยินดีต้อนรับสู่ LOTTO</h2>
                <p class="text-white font-light">กรุณาเลือกเส้นทางในการเข้าใช้ระบบ</p>
            </div>
            <div class="s-box group grid grid-cols-1 md:grid-cols-2 gap-10">
                <NuxtLink to="/new-lotto" class="card shadow p-10 rounded-lg hover:bg-white group-hover:text-gray-900">
                    <nuxt-img class="img-cover" src="/img/img-01.svg" />
                    <h2 class="head-title text-2xl font-bold text-white">NEW LOTTO</h2>
                    <p class="head-desc font-extralight text-center">เพิ่มโพยหวย หวยลาว หวยฮานอย</p>
                </NuxtLink>
                <NuxtLink to="/admin" class="card shadow p-10 rounded-lg hover:bg-white group-hover:text-gray-900">
                    <nuxt-img class="img-cover" src="/img/img-02.svg" />
                    <h2 class="head-title text-2xl font-bold text-white">DASHBOARD</h2>
                    <p class="head-desc font-extralight text-center">เข้าสู่ระบบหลังบ้าน ใช้โดยผู้ดูแลระบบ</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main-body{
        background-color: var(--secondary-color);
        min-height: 100vh;
        padding-bottom: 40px;

        .card{
            background-color: var(--primary-color);
        }

        .img-cover{
            min-height: 280px;
            height: 100%;
            max-height: 280px;
            width: 80%;
            margin: 0 auto;
        }

        h2.head-title{
            text-align: center;
            font-family: 'Prompt', sans-serif;
        }

        .s-box{
            max-width: 900px;
            width: 100%;
            margin: 0 auto;
        }
        
        .head-block {
            padding: 2em 20px;
            padding-bottom: 3em;

            h2{
                margin-bottom: 10px;
            }
        }

        .head-title{
            margin-top: 1em;
            margin-bottom: 20px;
        }

        .head-desc{
            color: #9E6AFF;
        }
    }

    @media(max-width: 1024px){
         .main-body{
             .img-cover{
                 min-height: 250px;
                height: 100%;
                max-height: 250px;
                width: 100%;
             }
         }
    }
</style>

<script>
export default {
}
</script>
