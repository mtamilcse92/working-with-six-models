/**
 * TutorGroupController
 *
 * @description :: Server-side logic for managing tutorgroups
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `TutorGroupController.create()`
   */
  create: function (req, res) {
   TutorGroup.create(req.params.all(),function(err,created){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:created});
    });
  },


  /**
   * `TutorGroupController.update()`
   */
  update: function (req, res) {
     TutorGroup.update(req.param('id'),req.params.all(),function(err,updated){
    if (err) {
      return res.send(err,500);
    }
    res.json({value:updated});
   });
  },


  /**
   * `TutorGroupController.destroy()`
   */
  destroy: function (req, res) {
     TutorGroup.destroy(req.param('id'),function(err,destroy){
    if (err) {
      return res.send(err,500);
    }
    res.json({value:"deleted"});
   });
  },


  /**
   * `TutorGroupController.show()`
   */
  show: function (req, res) {
    TutorGroup.findOne(req.param('id'),function(err,found){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:found});
    });
  }
};

