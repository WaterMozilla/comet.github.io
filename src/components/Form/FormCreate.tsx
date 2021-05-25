import React from 'react';
import AsyncValidator from 'async-validator';
export interface StoreProps {
    [propName:string]:any
};
export default function FormCreate() {
    return function(WrappedComponent: any) {
        const store: StoreProps= {};
        return class Form extends React.Component {
            getFieldsValue = () => {
                return Object.keys(store).reduce((memo, current) => {
                    return {
                        ...memo,
                        [current]: store[current].value,
                    }
                }, {})
                // return store;

            }
            render() {
                const form = {
                    getFieldProps: (fieldKey:string, options:any) => {
                        const { disabled, initialValue , validator} = options || {};
                        return {
                            key: fieldKey,
                            onInput: (e: any) => {
                                // eslint-disabled-next-line
                                const value = e.target.value;
                                store[fieldKey] = store[fieldKey] || {};
                                store[fieldKey].value =value;
                                const newValidator = new AsyncValidator({
                                    [fieldKey]: validator
                                });
                                if (validator) {
                                    newValidator.validate({[fieldKey]: value})
                                        .then(() => {
                                            console.log('pass');
                                            store[fieldKey].error = null;
                                        }).catch(({errors}) => {
                                            console.log(errors);
                                            store[fieldKey].error = errors.map((err:any) => err.message).join(',');
                                        }).then(() => {
                                            this.forceUpdate();
                                        })
                                }
                                
                            },
                            disabled: disabled ? disabled(this.getFieldsValue()) : undefined,
                            // value: store[fieldKey] || initialValue 
                        };
                    },
                    getFieldsValue: this.getFieldsValue,
                    getFieldsErrors: (fieldKey:string) => {
                        const error = store[fieldKey] && store[fieldKey].error
                        return {
                            children: error
                        }
                    }
                }
                return <WrappedComponent form={form} />
            }
        }
    }
}
