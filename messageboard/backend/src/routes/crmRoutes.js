import { addNewContact, 
        getContacts, 
        getContactWithID, 
        updateContact,
        deleteContact
} from '../controllers/crmControllers'

const crmRoutes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)
        
        // Post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
        // get a specific contact
        .get(getContactWithID)
        
        // updataing specific contact
        .put(updateContact)

        // deleting a specific contact
        .delete(deleteContact);
}

export default crmRoutes;