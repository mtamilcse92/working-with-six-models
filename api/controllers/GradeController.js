/**
 * GradeController
 *
 * @description :: Server-side logic for managing grades
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `GradeController.create()`
   */
  create: function (req, res) {
    Grade.create(req.params.all(),function(err,created){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:created});
    });
  },


  /**
   * `GradeController.update()`
   */
  update: function (req, res) {
    Grade.update(req.param('id'),req.params.all(),function(err,updated){
    if (err) {
      return res.send(err,500);
    }
    res.json({value:updated});
   });
  },


  /**
   * `GradeController.destroy()`
   */
  destroy: function (req, res) {
     Grade.destroy(req.param('id'),function(err,destroy){
    if (err) {
      return res.send(err,500);
    }
    res.json({value:"deleted"});
   });
  },


  /**
   * `GradeController.show()`
   */
  show: function (req, res) {
    Grade.findOne(req.param('id'),function(err,found){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:found});
    });
  }
};

