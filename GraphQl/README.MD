# 📄 GraphQL Fragments Guide

## ✨ Purpose of Fragments

Fragments in GraphQL are used to **reuse parts of queries** that request the same fields across multiple queries or components. This:
- Avoids **repetition**
- Makes your code **cleaner** and **easier to maintain**

---

## 🛠️ Creating a Fragment

You define a fragment using the `fragment` keyword, followed by:
- A **fragment name**
- The **type** it applies to

```js
fragment contactFragment on Contact {
  firstName
  lastName
  company
}
```
✅ Here, contactFragment applies to the Contact type and includes the fields: firstName, lastName, and company.

📥 Using a Fragment
Once defined, use a fragment in your query with the spread operator (...):
```js
{
  contact1: getOneContact(id: 1) {
    ...contactFragment
  }
  contact2: getOneContact(id: 2) {
    ...contactFragment
  }
  allContacts: getContacts {
    ...contactFragment
  }
}
```
✅ Benefits of Using Fragments
Benefit	Description
✅ Consistency:	Request the same fields across queries, reducing human error
🛠 Maintainability:	Add or remove fields from one place (the fragment definition)
👁 Readability:	Cleaner queries by reducing duplication


💡 Example Scenario
Imagine you frequently need the fields firstName, lastName, and company for different contacts. Instead of rewriting them in every query, define a fragment once and reuse it:
```js
fragment contactFragment on Contact {
  firstName
  lastName
  company
}


fragment contactFragment on Contact {
  firstName
  lastName
}

query {
  one: getOneContact(id: "6841f40a08995896e93f67b1") {
    ...contactFragment
  }
  rendu: getOneContact(id: "68412efe1e70312920b1d6b1") {
    ...contactFragment
  }
  moodu: getContacts {
    ...contactFragment
  }
}
```

Overview of mutations: 
Definition of Mutations: Mutations in GraphQL are similar to the operations in REST APIs that add, update, or delete data. They are used to modify data on the server or database.
Types of Mutations: Mutations include creating new items, updating existing items, and deleting items.
Example: A mutation that creates a new contact and sends it to the database, effectively modifying the database.