export const DBConfig = {
    name: 'MyDB',
    version: 1,
    objectStoresMeta: [
        {
            store: 'book',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'id', keypath: 'id', options: { unique: true } },
                { name: 'name', keypath: 'name', options: { unique: false } },
                { name: 'img', keypath: 'img', options: { unique: false } },
                { name: 'authorId', keypath: 'authorId', options: { unique: false } },
                { name: 'noOfPages', keypath: 'noOfPages', options: { unique: false } },
                { name: 'dateOfPublishing', keypath: 'dateOfPublishing', options: { unique: false } },
                { name: 'illustrator', keypath: 'illustrator', options: { unique: false } },
                { name: 'gerne', keypath: 'gerne', options: { unique: false } },
                { name: 'publisher', keypath: 'publisher', options: { unique: false } },
                { name: 'price', keypath: 'price', options: { unique: false } },
                { name: 'description', keypath: 'description', options: { unique: false } },
                { name: 'rate', keypath: 'rate', options: { unique: false } },
                { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
                { name: 'updatedAt', keypath: 'updatedAt', options: { unique: false } },
            ]
        },
        {
            store: 'author',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'id', keypath: 'id', options: { unique: true } },
                { name: 'name', keypath: 'name', options: { unique: false } },
                { name: 'bornOn', keypath: 'bornOn', options: { unique: false } },
                { name: 'spouce', keypath: 'spouce', options: { unique: false } },
                { name: 'bornIn', keypath: 'bornIn', options: { unique: false } },
                { name: 'children', keypath: 'children', options: { unique: false } },
                { name: 'img', keypath: 'img', options: { unique: false } },
                { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
                { name: 'updatedAt', keypath: 'updatedAt', options: { unique: false } },
            ]
        }
    ]
}

export default DBConfig