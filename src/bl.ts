export namespace bl {
    export const getEntities = () => {
        return { 
            propA: 'hi',
            propB: [3,0,1,2]
        }
    }

    export const setEntity = (entity: any) => {
        console.log('setEntity: entity: ', entity)
        return true
    }
}