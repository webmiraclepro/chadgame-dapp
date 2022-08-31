<template>
    <div class="flex relative items-center justify-center">
        <img class="w-4/5 lg:w-full justify-center" :src="backImg" />
        <div class="flex flex-row rounded-full absolute text-xl bg-white px-6 py-1 font-bold text-secondary bottom-4 left-1/2 -translate-x-1/2 bg-white hover:cursor-pointer">
            {{btnText}}
            <div class="mt-1.5 ml-4">
                <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.63881 16.188L10.3572 8.72863L2.63881 1.26921C2.42844 1.06656 2.14618 0.955788 1.85413 0.961252C1.56209 0.966717 1.28417 1.08797 1.08153 1.29835C0.878882 1.50872 0.768108 1.79097 0.773573 2.08302C0.779037 2.37507 0.900293 2.65298 1.11067 2.85563L7.19087 8.72863L1.11066 14.6081C0.900293 14.8107 0.779037 15.0887 0.773572 15.3807C0.768108 15.6728 0.878882 15.955 1.08153 16.1654C1.28417 16.3758 1.56209 16.497 1.85413 16.5025C2.14618 16.5079 2.42844 16.3972 2.63881 16.1945L2.63881 16.188Z" fill="#FFAC3C"/>
                </svg>
            </div>
        </div>
    </div>        
</template>
  
<script>
export default {
    name: "InfoCard",
    props: {
        backImg: {},
        btnText: {}
    }
}
</script>