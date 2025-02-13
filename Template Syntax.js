// Text Interpolation
<span>Message:{{msg}}</span>


// RawHtml
<p>Using text interpolation:{{rawHtml}}</p>
<p>Using v-html directive:<span v-html="rawHtml"></span></p>

// Attribute Bindings

<div v-bind:id="dynamicID"></div>


// boolean attribute
<button :disabled="isButtonDisabled">Button</button>


// dynamically binding multiple attributes
const objectOfAttrs = {
    id:'container',
    class:'wrapper',
    style:'backgroung-color:green'
}

<div v-bind="objectOfAttrs"></div>


// using expression 
{{number +1}}
{{ok?'Yes':'NO'}}
{{MessageChannel.split('').reverse().join('')}}
<div :id="`list-${id}`"></div>

// calling function
<time :title="toTitleDate(date)":datetime="date">
{{formatDate(date)}}
</time>
// Functions called inside binding expressions will be called every time the components updates, so they should not have any SVGGradientElementeffects, such as changing data or trigegering asynchronous operations

<button @click="state.count++">
{{State.count}}
</button>

const count = ref(0)
const state = reactive({
    count
})
console.log(state.count)
state.count = 1
console.log(count.value)

const otherCount = ref(2)
state.count = otherCount
console.log(state.count)
console.log(count.value)

// Caveat in Arrays and Collections

const books = reactive([ref('Vue 3 Guide')])
console.log(books[0].value)

const map = reactive(new Map([['count'], ref(0)]))
console.log(map.get('count'.value))
// Caveat when Unwrapping in Templadtes
// Ref unwrapping in templates only applied if the ref is a top-level property in the template render Context
const count = ref(0)
const object = {id:ref(1)}
{{count + 1}}