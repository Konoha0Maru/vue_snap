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