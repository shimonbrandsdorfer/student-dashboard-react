
/**
 * 
 * @typedef {Object} Course
 * @property {number} id
 * @property {string} title
 * @property {number} cost
 * @property {number} num_of_sessions
 */



/**
 * 
 * @returns {Array<Course>}
 */
export const getAll = async () => {
    return [{
        id : 1,
        title : 'Programing',
        cost : 1000,
        num_of_sessions : 30
    }];
}

/**
 * This function will return an individual course by the id
 * @param {number} id
 * @returns {Course}
 */
export const getById = async (id) => {
    return {
        id : 1,
        title : 'Programing',
        cost : 1000,
        num_of_sessions : 30
    };
}