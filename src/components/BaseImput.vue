<template>
    <validation-provider :rules="rules" :name="name" v-bind="$attrs" v-slot="{ errors }">
        <slot v-bind="slotData">
            <div v-if="type != 'password'">
                <v-text-field
                    outlined
                    rounded
                    :id="id"
                    :value="value"
                    v-on="listeners"
                    :type="type"
                    v-bind="$attrs"
                    v-mask="mask"
                    :prepend-inner-icon="prependIcon"
                    :error-messages="errors"
                    :label="label"
                    :hint="hint"
                    :class="{'focus': focused}"
                />
            </div>
        </slot>
    </validation-provider>
</template>

<script>

export default {
    name: 'base-input-validate',
    data(){
        return {
            showPassword: false,
            value: '',
            focused: false
        }
    },
    computed: {
        listeners(){
            return {
                ...this.$listeners,
                input: this.updateValue,
                focus: this.onFocus,
                blur: this.onBlur
            };
        },
        slotData() {
            return {
                focused: this.focused,
                error: this.error,
                ...this.listeners
            };
        },
    },
    methods: {
        updateValue(evt) {
            const value = evt;
            this.value = value;
            this.$emit("input", value); 
        },
        onFocus(evt) {
            this.focused = true;
            this.$emit("focus", evt);
        },
        onBlur(evt) {
            this.focused = false;
            this.$emit("blur", evt);
        }
    },
    props: {
        id: {
            type: String
        },
        type: {
            type: String,
            description: "Input type",
            default: "text"
        },
        mask: {
            type: [ String, Function ],
        },
        appendIcon: {
            type: String,
            description: "Append icon (right)"
        },
        prependIcon: {
            type: String,
            description: "Prepend icon (left)"
        },
        label: {
            type: String,
            description: "Label do input"
        },
        hint: {
            type: String,
            description: "Text information"
        },
        rules: {
            type: [String, Array, Object],
            description: 'Vee validate validation rules',
            default: ''
        },
        name: {
            type: String,
            description: 'Input name (used for validation)',
            default: ''
        }
    }
}
</script>