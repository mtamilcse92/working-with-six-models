/**
 * Pupil.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    pupilForeName : { type: 'string' },

    pupilSureName : { type: 'string' },

    pupilDob : { type: 'date' },

    pupilPhone : { type: 'integer' },

    pupilMedicalNotes : { type: 'string' },

    pupilYear : { type: 'integer' },

    familyId : {model: 'family'},

    grade : {collection: 'grade',via: 'pupils'},

    tutorGroupId:{model: 'tutorGroup'}
  }
};

