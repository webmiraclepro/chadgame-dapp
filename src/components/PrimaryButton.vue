<template>
    <div class="flex justify-center">
        <div class="border border-secondary pr-1 py-1">
            <div class="btn-custom font-bold text-white -ml-2 py-3 px-8">
                <slot />
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "PrimaryButton",
}
</script>

<style>
    .btn-custom {
        background: linear-gradient(90.5deg, #FFAC3B 15.01%, #FB505E 97.83%);
    }
</style>