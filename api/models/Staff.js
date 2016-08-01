/**
 * Staff.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    staffForeName : { type: 'string' },

    staffSureName : { type: 'string' },

    staffPhone : { type: 'integer' },

    staffAddress : { type: 'string' },

    staffBankAccount : { type: 'integer' },

    class : {collection: 'class' , via: 'teacherId'},

    tutor : {collection: 'tutorGroup', via: 'tutorId'}
  }
};

