import R from "./R";
export const rules = {
    firstName: {
        required: {
            value: true,
            message: R.string.errors.firstName
        },
        pattern: {
            value: R.Regex.name,
            message: R.string.errors.commanmsg
        }
    },
    lastName: {
        required: {
            value: true,
            message: R.string.errors.lastName
        },
        pattern: {
            value: R.Regex.name,
            message: R.string.errors.commanmsg
        }
    },
    email: {
        required: {
            value: true,
            message: R.string.errors.emailEmpty
        },
        pattern: {
            value: R.Regex.email,
            message: R.string.errors.email
        },
    },

};