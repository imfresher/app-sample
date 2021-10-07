import { db } from './index';

const USERS_COLLECTION = 'users';

export const getUsers = () => {
    db.collection(USERS_COLLECTION).onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));

        console.log(data);
    })
};