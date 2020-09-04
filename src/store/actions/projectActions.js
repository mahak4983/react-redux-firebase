export const createProject = (project) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore.collection('projects').add({
            ...project,
             authorFirstName:'Mahak',
             authorLastName: 'Chhajer',
             authorId: 2134,
             createdAt: new Date()
        })
        .then(()=>{
            dispatch({ type: 'CREATE_PROJECT', project: project });
        })
        .catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};
