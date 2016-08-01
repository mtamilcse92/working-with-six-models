/**
 * Class.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    classSubject : { type: 'string' },

    classLessonTime : { type: 'integer' },

    grade:{collection: 'grade', via: 'classes'},

    teacherId: {model: 'staff'}
  }
};

