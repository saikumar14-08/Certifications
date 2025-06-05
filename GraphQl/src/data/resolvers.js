import { ContactSchema } from "./dbconnectors";

export const resolvers = {
  Query: {
    getContacts: () => {
      return ContactSchema.find();
    },
    getOneContact: async (root, { id }) => {
      const contact = await ContactSchema.findById(id);
      if (!contact) {
        throw new Error(`Contact with id ${id} not found`);
      }
      return contact;
    },
  },
  Mutation: {
    createContact: async (root, { input }) => {
      const newContact = new ContactSchema({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        company: input.company,
      });
      const savedContact = await newContact.save();
      savedContact.id = savedContact._id; // optional if your schema already returns _id
      return savedContact;
    },
    updateContact: async (root, { id, input }) => {
      const updatedContact = await ContactSchema.findOneAndUpdate(
        { _id: id },
        input,

        { new: true } // return the updated document and validate
      );
      const savedContact = await updatedContact.save();
      return savedContact;
    },
    deleteContact: async (root, { id }) => {
      const deletedContact = await ContactSchema.deleteOne({ _id: id });
      if (deletedContact.deletedCount === 0) {
        throw new Error(`Contact with id ${id} not found`);
      } else {
        return `Contact with id ${id} deleted successfully` ;
      }
    },  
  },
};
