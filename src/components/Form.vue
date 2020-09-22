<template>
    <div>
        <i-form ref="form" :model="formValidate" :rules="ruleValidate">
            <i-form-item label="username" prop="name">
                <i-input v-model="formValidate.name"></i-input>
            </i-form-item>
            <i-form-item label="email" prop="mail">
                <i-input v-model="formValidate.mail"></i-input>
            </i-form-item>
        </i-form>
        <button @click="handleSubmit">submit</button>
        <button @click="handleReset">reset</button>
        <br />
        <i-checkbox v-model="single">single option</i-checkbox>
        data: {{ single }}
        <i-checkbox-group v-model="multiple">
            <i-checkbox label="option1">option 1</i-checkbox>
            <i-checkbox label="option2">option 2</i-checkbox>
            <i-checkbox label="option3">option 3</i-checkbox>
            <i-checkbox label="option4">option 4</i-checkbox>
        </i-checkbox-group>
        data: {{ multiple }}
        <div>
            <i-radio v-model="radio" label="1">Option 1</i-radio>
            <i-radio v-model="radio" label="2">Option 2</i-radio>
        </div>

    </div>
</template>

<script>
    import iForm from '../components/form/form.vue'
    import iFormItem from '../components/form/form-item.vue'
    import iInput from '../components/input/input.vue'
    import iCheckboxGroup from '../components/checkbox/checkbox-group'
    import iCheckbox from '../components/checkbox/checkbox'
    import iRadio from '../components/radio/radio'
    export default {
        name: "Form",
        components: {
            iForm,
            iFormItem,
            iInput,
            iCheckboxGroup,
            iCheckbox,
            iRadio
        },
        data () {
            return {
                single: false,
                multiple: ['option1', 'option3'],
                radio: '1',
                formValidate: {
                    name: '',
                    mail: ''
                },
                ruleValidate: {
                    name: [
                        {
                            required: true,
                            message: 'cannot be empty',
                            trigger: 'blur'
                        }
                    ],
                    mail: [
                        {
                            required: true,
                            message: 'cannot be empty',
                            trigger: 'blur'
                        },
                        {
                            type: 'email',
                            message: 'the format is incorrect',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit () {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        window.alert('success')
                    } else {
                        window.alert('fail')
                    }
                })
            },
            handleReset () {
                this.$refs.form.resetFields()
            }
        }
    }
</script>

<style scoped>

</style>
