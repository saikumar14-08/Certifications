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
  },
};
