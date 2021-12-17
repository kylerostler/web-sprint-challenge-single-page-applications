import * as yup from 'yup';

const formSchema = yup.object().shape({
    name_input: yup
    .string()
    .trim()
    .required('pizza name is required')
    .min(2, 'name must be at least 2 characters'),

    special: yup
    .string()
    .trim(),

    size: yup
    .string()
    .oneOf(['Small', 'Medium', 'Large'], 'size is required'),

    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    mushrooms: yup.boolean(),
    sausage: yup.boolean(),

})
export default formSchema;