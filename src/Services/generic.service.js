const service = (model) => {
    /**
     * Return all documents
     * @returns {Promise<*>}
     */
    const getAll = () => {
        return await model.find();
    }
}