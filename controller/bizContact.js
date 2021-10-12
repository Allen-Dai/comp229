const contact = require('../model/bizContact')

const loadContacts = async (req, res) => {
    const contacts = await contact.find({});
    res.render('secure/contactList', {title: 'Contact', contacts: contacts});
}

const deleteContacts = async (req, res) => {
    await contact.deleteOne({_id: req.params.id})
        .then(() => res.redirect('/secure'))
        .catch((err) => console.log(err));
}

const updateContacts = async (req, res) => {

    //Remove null/empty object in req.body
    Object.keys(req.body).forEach(i => (!req.body[i] && req.body[i] !== undefined) && delete req.body[i]);

    await contact.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(() => res.redirect('/secure'));
}

const addContact = async (req, res) => {
    const newContact = contact(req.body);
    newContact.save({name:req.body.name, email:req.body.email, phoneNumber:req.body.phoneNumber}, (err) => {
        if (err) {
            console.log(err);
            res.status(err.code);
            res.send(err.message);
        }
        else{
            res.redirect('/')
        }
    })
}

module.exports = {loadContacts, deleteContacts, updateContacts, addContact};