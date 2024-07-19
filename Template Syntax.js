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
