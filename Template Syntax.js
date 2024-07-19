// Text Interpolation
<span>Message:{{msg}}</span>


// RawHtml
<p>Using text interpolation:{{rawHtml}}</p>
<p>Using v-html directive:<span v-html="rawHtml"></span></p>

// Attribute Bindings

<div v-bind:id="dynamicID"></div>


// boolean attribute
<button :disabled="isButtonDisabled">Button</button>
