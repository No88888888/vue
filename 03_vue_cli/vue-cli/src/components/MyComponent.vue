<template>
  <div class="border">
    <h1>이건 내가 만든 새로운 컴포넌트</h1>
    <!-- 3. 사용하기 -->
    <MyComponentItem 
      static-props="MyComponent에서 보낸 데이터"
      :dynamic-props="dynamicProps"
      @child-to-parent="parentGetEvent"
      @child-input="getDynamicData"
    />
  </div>
</template>

<script>
// 1.불러오기
import MyComponentItem from '@/components/MyComponentItem'
export default {
    name: 'MyComponent',
    // 2. 등록하기
    components: {
        MyComponentItem,
    },
    data: function () {
      return {
        dynamicProps: '이건 동적인 데이터!',
      }
    },
    methods: {
      parentGetEvent: function (childData) {
        console.log('자식 컴포넌트에서 발생한 이벤트를 들었다')
        console.log(childData)
      },
      getDynamicData: function (childInputData) {
        console.log(`사용자가 입력한 값은 ${childInputData}입니다.`)
      }
    }
  }
</script>

<style>
    .border {
        border: solid 1px black;
    }
</style>