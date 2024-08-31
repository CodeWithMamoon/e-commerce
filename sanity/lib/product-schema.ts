import { defineField, defineType } from "sanity";

export const product = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'product title',
            type: 'string',
        },
        {
            name: 'images',
            title: 'Images',
            type: 'image',
            
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        }
        ,
        defineField({
            name:"category",
            title:"Product category",
            type:"reference",
            to:[
                {
                    type:"category"
                }
            ]
        })
    ]
});
