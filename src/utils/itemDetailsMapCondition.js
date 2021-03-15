export const mapConditionResult = (condition) => {
    return condition === 'not_specified'
    ? 'Sin Especificar' 
    : condition === 'new'
        ? 'Nuevo'
        : 'Usado' 
}